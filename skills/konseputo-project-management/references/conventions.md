# Conventions — cross-cutting, apply to every playbook and command

## Config resolution

Three-tier, same pattern as the rest of the konseputo suite: per-invocation flag
> `PROJECT_ANCHOR_*` env var > `~/.config/konseputo/pm.json` on disk. `init`
(first use in a project) asks for the anchors that can't be inferred
(project name, task-ID prefix, repo scope) and writes the config — never
re-asks once set.

## stdout by default, write only with explicit consent

Every playbook/command prints its output to chat by default. A file only
gets written when the user passes `--apply` (or says "write it," "save
this," equivalent) — never silently. Before any write: check the target
isn't a dirty/uncommitted change the write would clobber; if it is, stop
and say so instead of overwriting.

## Ask vs. don't ask

| Ask | Don't ask |
|---|---|
| Anchors unset on first use in a project | Routine lookups a reference file already answers |
| Scope/target genuinely ambiguous between two real options | A command with an unambiguous single target |
| No service/repo specified in a polyrepo and it matters | The project has only one repo |
| A decision needs human sign-off (ADR acceptance) | Formatting/template-filling mechanics |

One question, not a dump. If context resolves it, don't ask — declare the
inference and proceed.

## Severity triage — BLOCK / WARN / INFO

Same three-tier system used throughout the konseputo suite (`/konseputo-review`'s
tags use it too — one mental model everywhere):

- **BLOCK**: violates a hard rule (missing acceptance criteria, an ADR
  accepted without human sign-off, a write attempted without `--apply`).
  Not mergeable/actionable until fixed.
- **WARN**: a heuristic flag that needs a human look — might be a false
  positive, still surfaced.
- **INFO**: advisory, no action forced.

BLOCK pile-up in one pass → one named systemic-debt item, per
`/konseputo-review`'s Verdict rule (applied at wider scope in `review.md`).

## Citation discipline

Never invent a fact — a task ID, an ADR number, a service name, a fact
about the codebase. Every claim cites something concrete: a file:line, an
ADR number, a spec section, a commit hash. Uncertain → ask, or verify with
a tool (Grep/Read), never guess and present the guess as fact. This is the
single most important convention in this skill — a PM tool that
hallucinates a fact is worse than one that admits it doesn't know.

## Subagent orchestration principles

Two patterns this skill's playbooks lean on — canonical mechanism in
`../../shared/subagents.md`:

- **Gather-then-synthesize** — periodic rituals (checkpoint, retro,
  plan-a-cycle) fan out parallel subagents to gather context BEFORE any
  generative writing; never draft-first-fact-check-after.
- **Layer-sharded review** — decompose a whole-service/repo review into N
  independent layer-scoped passes (`review.md`).

## Doc language and voice

Docstring/comment language for CODE stays `docstringLang`
(`konseputo-backend`'s config key). PM artifacts (specs, ADRs, retros,
checkpoints) — voice comes from `konseputo-humanizer`'s automatic
doc-generation trigger, formatting from `konseputo-md-generator`. This skill
owns content and structure only.
