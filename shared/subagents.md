# Subagents — configuration, scope, orchestration, and when they're worth it

Canonical owner for subagent policy across the suite. Was scattered across
13 files with no owner (research-checklist finding, 2026-07-24) — this file
absorbs the general-purpose content that had settled under
`konseputo-ai/references/subagents.md` for historical reasons plus new
research-backed additions. `konseputo-ai` keeps only what's genuinely
AI-infrastructure-specific (RAG/MCP-facing agent patterns) and points here
for everything else. Other mention sites (`konseputo-project-management`,
`konseputo-brainstorm/references/panel.md`, `shared/evals.md`, `konseputo-help`,
`konseputo-md-generator/references/style.md`) are not yet swept to point
here — flagged as remaining work, not silently merged.

## Custom subagent vs. general-purpose

Build a custom subagent type only when the same worker — same
instructions, same tool scope — gets spawned repeatedly. A one-off
research/exploration task uses `general-purpose` or `Explore`; building a
bespoke subagent type for a single use is the ladder's
no-unrequested-abstraction rule applied to agent design.

## The four-element system-prompt contract

Every subagent prompt needs all four, or drift follows:

1. **Objective** — what this subagent is actually trying to accomplish.
2. **Output format** — what shape the final message should take (raw
   data for a research subagent, not a human-facing summary — the caller
   parses it).
3. **Tool/source guidance** — which tools it should reach for, in what
   order, for the task at hand.
4. **Task boundaries** — what's explicitly out of scope, so the subagent
   doesn't wander into adjacent work the caller didn't ask for.

Missing any one of the four is a documented drift source in Anthropic's
own multi-agent research-system writeup — not a stylistic nicety. Current
(2026) Claude Code docs describe subagents in the same shape — independent
session, own context window, own tool list, optional isolation strategy —
the contract hasn't drifted since this was first written.

## Context isolation — the exact failure mode, not a vague caveat

A subagent receives ONLY: its own system prompt, the delegation task
message, the project's agent-instructions file and memory hierarchy, a
git-status snapshot, and any skills
named in its `skills` field. Every intermediate step — every file it read,
every command it ran, every line of test output — stays inside its context
and never reaches the parent. Only the final message returns.

**Consequence for `hooks/konseputo-subagent.js`:** it re-injects the konseputo
RULESET into every subagent (SessionStart doesn't reach Task-spawned
subagents), but it cannot re-inject the TASK's own motivating context — that
lives only in whatever the parent wrote into the delegation prompt. A
delegation that states WHAT but not WHY produces a summary shaped by an
incomplete picture of the goal — the single most commonly reported subagent
failure in the field, and it's a prompt-authoring problem, not a
konseputo-config one. State the why in the same message as the what, always.

## Tool restriction — safety and scope in one mechanism

Narrow the subagent's tool list to the minimum the task needs. This is
simultaneously a safety boundary (a read-only research subagent literally
can't `Write`) and a scope-enforcement mechanism (a subagent without the
`Agent` tool can't spawn its own children, which is the right default
unless nested orchestration is specifically intended — nesting is supported
up to 5 levels, but each level adds cost and drift risk, opt in
deliberately, not by omission). Independent empirical grounding: tool
*availability itself*, not task content, is the variable that produces
unsafe behavior in agent-safety studies — a prompt that produces a compliant
refusal text-only produces a real violation once an executable tool exists
to act on it. Scoping isn't just tidiness; it's the actual containment
boundary.

**Open item:** none of konseputo's own subagent-invoking guidance currently
prescribes an explicit tool allowlist per subagent role — worth doing, not
done in this pass.

## When a subagent is worth its cost — two thresholds, both required

1. **Task size** — long enough (field's rough marker: >2 minutes of work)
   that the fixed cost of an isolated context is amortized.
2. **Separability** (parallel subagents specifically) — the file/data sets
   they touch don't overlap. Two agents assigned the same file isn't
   parallelism, it's a scheduled merge conflict.

This is the same shape already gating `konseputo-brainstorm/references/panel.md`'s
subagent fan-out (reversal-cost + anchoring) — that gate answers "worth it
for THIS decision," this answers "worth it for THIS task shape." Both apply
together.

Cost tradeoff, stated plainly: multi-agent orchestration runs 10-15x the
token cost of one agent doing the same work sequentially (Anthropic's own
research-system numbers). It buys parallelism and context isolation, not
cheapness — reach for it when the task is genuinely parallelizable or needs
isolated context, never as a default posture for any multi-step task.

## Parallel subagents editing files — worktree isolation, and what still breaks

Standard mitigation: one git worktree per agent, automated verification
(tests/lints, not a manual diff scan) gating any merge. Two failure classes
survive worktree isolation and are worth naming because they're silent:

- **Duplicated implementations** — two isolated branches independently solve
  the same sub-problem because they had no way to share the decision
  mid-flight. Near-identical helpers with slightly different names.
- **Semantic contradiction** — each branch is locally correct, passes its
  own tests; the two together break at integration because nothing checked
  the combination. Textual merge succeeds; behavior doesn't.

Neither is caught by "no merge conflicts" — both need an integration-level
check after the merge, not just before it.

## Orchestration patterns

- **Gather-then-synthesize**: fan out parallel subagents to gather context
  BEFORE any generative/writing step starts. Used throughout
  `konseputo-project-management`'s playbooks (checkpoint, retro, sprint
  planning) — draft-first-fact-check-after is the wrong order for the same
  reason it's wrong in `konseputo-legacy`'s characterize-before-refactor rule.
- **Layer-sharded**: decompose one large review/analysis into N
  independent, non-overlapping subagent passes (by architectural layer, by
  file domain, by concern) that can't interfere with each other and finish
  in the time of the slowest shard, not the sum. Used by
  `konseputo-project-management/references/review.md`'s whole-service audit.
- **No direct subagent-to-subagent messaging.** The orchestrator-worker
  pattern is the only supported shape: the lead agent plans, delegates in
  parallel, subagents report back to the lead (not to each other) — avoids
  the "telephone game" of information degrading across hops.

## Durable orchestration — surviving compaction and interruption

A long multi-agent workflow that lives only in the context window dies at
the first compaction. Mechanics that survive:

1. **State on disk, not in context.** A `state.json` + numbered per-phase
   output files (`NN-phase.md`); every phase RE-READS the prior phase's file
   instead of trusting window memory. Resume-after-interruption comes free.
2. **Progress ledger** the orchestrator appends to after every completed
   unit — after a compaction the next turn reads the ledger and continues,
   no re-derivation.
3. **Explicit checkpoints** at phase boundaries: stop, show the phase
   result, get approval before the next fan-out — long workflows drift
   worst exactly where nobody is looking.
4. **Multi-session projects: map with a fog line.** The plan document holds
   tickets (precisely phrased questions/tasks) and FOG — areas you can't yet
   phrase precisely. The test for promoting fog to a ticket is precision of
   the QUESTION, not answerability. One ticket resolved per session;
   decisions-so-far accrete on the map, not in memory.

## Handoff discipline — orchestrator ↔ worker

1. **Hand off files, not pasted context.** A worker gets paths to read, not
   a 5k-token paste that goes stale the moment the file changes.
2. **Fixed status vocabulary** in worker reports: DONE /
   DONE_WITH_CONCERNS / BLOCKED / NEEDS_CONTEXT. Free-prose status forces
   the orchestrator to interpret; a contract doesn't.
3. **Never pre-judge a reviewer's findings** — the orchestrator forwards
   the diff without its own "this looks fine" framing, or the reviewer
   anchors on it. Mirror rule for the reviewer: a worker's stated rationale
   is a CLAIM, not a severity discount — "the plan said to do it this way"
   never downgrades a defect; the plan's author doesn't grade its own work.
4. **Report file ≠ final message.** Worker writes the full report
   (evidence, test output, concerns) to a file; the final message is ~15
   lines pointing at it — keeps orchestrator context lean without losing
   the evidence trail.
5. **Batch fix dispatches.** One worker fixing N related findings beats N
   workers fixing one each — shared context loads once.
6. **Turn count beats token price** when picking a worker model: a stronger
   model that finishes in 2 turns is usually cheaper than a weak one that
   thrashes for 8.
7. **Enforce read-only with hooks, not prompt convention.** An audit/review
   subagent whose non-destructiveness matters gets a `PreToolUse` hook
   hard-blocking Write/Edit/Bash — the harness guarantees what the prompt
   only requests. If Bash stays allowed with a command blocklist, the
   blocker must UNWRAP interpreters first (`sh -c`, `python -c`, `node -e`,
   pipe-to-shell, `env X=y sh -c`) and re-check the inner command — the
   wrapper bypass is the standard hole. Simplest alternative when no Bash is
   needed at all: a read-only permissions profile (allow Read/Glob/Grep,
   deny the rest), no hook code.

## ReAct / self-reflection — diminishing returns, not free improvement

Reflection (agent critiques its own prior attempt, retries) helps, but not
unboundedly: returns diminish sharply past 3-5 reflection attempts,
especially when the verifier signal itself is noisy — more attempts on a
weak feedback signal doesn't compound, it just burns budget. A documented
case (WebShop benchmark): a full reflection loop improved accuracy from
33% to 35% — one additional task solved for a full extra pass's cost. Pure
ReAct (interleaved reason-then-act, no reflection) is fine for short,
well-specified tasks but compounds errors on long-horizon or ambiguous
ones — reflection is the fix for exactly that failure mode, not a general
quality multiplier to bolt onto every agent call.
*Applies here:* cap reflection/retry loops at a small fixed number (3-5),
not "keep retrying until it works" — past that point, the fix is a better
verifier signal or a different decomposition, not more attempts.
[Reflection in AI agents: how self-improvement actually works, 2026](https://stackviv.ai/blog/reflection-ai-agents-self-improvement)

## Model/effort per subagent

No suite-wide rule to state with confidence — the field data cuts both
ways. Routing mechanical subagents (file navigation, boilerplate edits) to a
cheaper/faster model is a real, reported cost win — but a cheap-model
subagent needing several retry passes plus cleanup can cost more than one
clean frontier pass, and per-task cost isn't reliably predictable up front
(agentic runs on nominally the same task have varied by an order of
magnitude in total tokens in published benchmarks). *Practical stance:*
route by task TYPE (mechanical → cheap tier is safe), not by a guessed
complexity score, and don't assume a cheap-tier subagent stays cheap without
a budget check.

## Evaluating tool-selection behavior, not just tool implementation

Testing whether an agent picks the *right* tool and uses it *correctly* is a
different test than unit-testing the tool's own implementation. Evaluate at
three levels:

1. **End-to-end** (black box) — did the task succeed.
2. **Trajectory-level** — was the tool-call sequence sensible (no redundant
   calls, no wrong-tool selection, reasonable retry behavior on failure).
3. **Component-level** — was any single tool call's arguments/result correct
   in isolation.

Practical technique: have the agent emit its reasoning before each tool call
(interleaved thinking), then read the transcripts specifically looking for
where it got "stumped or confused" — that's where a tool description or
granularity choice needs revision, found empirically rather than guessed.

## Observability

No specific measured methodology found for "did this subagent spend its
context well." Qualitatively: ties to the injection-size meter already
built into `hooks/konseputo-config.js` — every subagent spawn pays the
ruleset injection cost, now visible per spawn. Extending observability past
that is unresolved — flagged, not solved.

## `KONSEPUTO_SUBAGENT_MATCHER` default — still unresolved

The hook's default is inject-into-every-subagent; scoping to specific agent
types is opt-in via an env var. No data surfaced in this research pass that
directly measures the cost/benefit of flipping that default (inject-only-
into-code-writing-agents). Leaving the default as-is rather than guessing —
this is exactly the kind of change that should follow a measurement, not
precede one.

## Sources

- [Claude Code docs: subagents](https://code.claude.com/docs/en/sub-agents)
- [XDA: Claude Code sub-agent context-window collapse](https://www.xda-developers.com/ignored-claude-code-sub-agents-context-window-collapsing/)
- [wmedia: why sub-agents return incomplete results](https://wmedia.es/en/tips/claude-code-subagent-context-loss)
- [Totalum: Claude Code subagents 2026 production playbook — tool scoping](https://www.totalum.app/blog/claude-code-subagents-totalum)
- [Agent-safety study: tool availability and compliance violation shift](https://arxiv.org/pdf/2507.06134)
- [Augment Code: multi-agent production requirements — 2-minute/separability threshold, duplicated-implementation and semantic-contradiction failure classes](https://www.augmentcode.com/guides/multi-agent-ai-production-requirements)
- [Ivern AI: agent cost benchmark, token-variance data](https://ivern.ai/blog/ai-agent-cost-benchmark-report-2026)
