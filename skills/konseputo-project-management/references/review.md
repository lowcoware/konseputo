# Review — scaling the bottleneck, not the ceremony

`/konseputo-review` finds line-level issues in a diff. This file governs a
different question: how much review attention a change *earns*, and how to
review a whole service/repo when a diff is too narrow a lens. Data behind
why this matters: AI-assisted teams show +59% branch throughput but PR
review time +91%, PRs got larger, and ~45% of AI-generated code samples
introduced an OWASP Top-10 issue in one security benchmark (Veracode) when
review doesn't specifically target it.
Left unmanaged, review becomes either the bottleneck or a rubber stamp —
both are failure modes, not tradeoffs to accept.

## Ship-Show-Ask — review tier by risk, not by author

| Tier | When | What happens |
|---|---|---|
| **Ship** | Trivial, reversible, in a well-understood file (typo, config value, a change matching an existing pattern exactly) | Merges directly, no gate |
| **Show** | Medium risk — new logic in a familiar area, no contract change | Async review, doesn't block the next spec from starting |
| **Ask** | High risk — touches a contract, crosses a service boundary, governed by an ADR, or is the first spec in a new area | Synchronous review before merge, required |

Assign the tier when the spec is planned, not after implementation —
a spec touching a payment contract is `Ask` from the start regardless of
how small the eventual diff turns out to be.

## Diff-size as a rubber-stamp detector

A review whose time approaches the *human* baseline for writing that code,
or a diff over roughly 400 lines, is functionally a rubber stamp — nobody
reads 400 lines carefully in the time budget review actually gets. Two
responses, not one:

1. **Prevent it**: specs decompose (`spec-driven.md`) before implementation
   sprawls into one giant diff.
2. **Detect it**: if a diff arrives at 400+ lines anyway, the reviewer's
   first move is asking for a decompose, not reviewing it whole.

## Numeric escalation gates — thresholds, not vibes

Tier is assigned by risk (above), but these hard numbers *force* an escalation
regardless of the assigned tier — they exist so "it felt small" can't
downgrade a genuinely large or dangerous change. Cross a line → bump the gate,
no judgment call:

| Signal | Threshold | Forced action |
|---|---|---|
| Diff size | > 400 changed lines | Reviewer refuses whole-review → asks for decompose (above) |
| Files touched | > ~10 files in one change | Auto-escalate one tier (Show → Ask) |
| `/konseputo-review` BLOCKs | > 10 | One systemic-debt task, not 10 tickets (konseputo-review Verdict rule) |
| Blast radius | change touches a contract / shared lib / auth / money path | Force `Ask` tier, ignore diff size |
| Coverage delta | drops below `coverageTarget` | CI blocks — non-negotiable, no reviewer override |

The point is removing discretion where discretion fails: a tired reviewer
rubber-stamps a "small-looking" 500-line diff; a gate doesn't get tired. Keep
the list short — a gate for everything is bureaucracy, these are the few that
actually predict escaped defects.

Gates can be HOOKS, not just review-time checks: a PreToolUse gate that
blocks editing production code with no sibling test file (tests-ship-with-
code enforced mechanically), or a non-blocking warn when touched files
drift from the spec's declared "files to modify" list. Same
discretion-removal move, earlier in the loop.

## Intent reconstruction over line-by-line diffing

For anything above `Ship` tier, reconstruct intent before reading the diff
line by line: read the spec, the relevant ADRs, and prior related PRs
first — then the diff. A diff read cold, with no context, either misses
real problems (the change conflicts with a pattern the reviewer doesn't
know about) or manufactures false ones (the reviewer doesn't recognize an
intentional deviation). Mechanical checks (types, lint, contract tests,
`/konseputo-review`'s tag catalog, CI gates) run first and are never re-litigated
by a human — human attention goes to spec-conformance and intent, the
things automation can't judge.

## Receiving review — rigor, not agreement

Respond to findings technically, not socially. Two gates:

1. **Verify before implementing.** A reviewer's "this is broken" is a
   hypothesis — reproduce/confirm it first (same rule as
   `konseputo-systematic-debug`); implementing an unverified finding ships the
   reviewer's misunderstanding.
2. **YAGNI pushback is a legitimate response.** Reviewer says "implement
   this properly / more robustly" → grep for actual usage first; if the
   code path is unused or single-caller, propose REMOVAL or the one-line
   version, citing the ladder — with the grep output as evidence, not as
   opinion. "Reviewer suggested it" is not an exemption from
   anti-overengineering.

## Whole-service / whole-repo review — layer-sharded

`/konseputo-review` is explicitly one-shot-per-diff. This skill owns the wider
lens: reviewing an entire service or repo, not a change to it — for a
periodic audit, a pre-release check, or onboarding into unfamiliar code
(pairs with `konseputo-legacy`).

**Mechanism**: fan out parallel subagents, one per architectural layer, so
findings can't interfere with each other and the review finishes in the
time of the slowest layer, not the sum:

| Layer | Subagent checks |
|---|---|
| Contracts | proto/OpenAPI/AsyncAPI vs actual handlers — drift, undocumented fields |
| Data | migrations, indexes, soft-delete consistency, explicit FKs |
| Security | authn/authz on every endpoint, secrets handling, rate limits present |
| Tests | coverage gate, contract tests per seam, assert-less tests |
| Docs | README accuracy, `.env.example` completeness, `docs.md`'s minimal list |

Findings from each layer feed one merged report with the same BLOCK/WARN/
INFO severity triage as everything else in this suite (`conventions.md`).

## Severity-gated debt aggregation

The per-diff case is `/konseputo-review`'s Verdict rule (already cited in the
gates table above). The whole-service review applies the same aggregation
at larger scale: a layer whose BLOCKs cross that threshold becomes one
named "pay down X debt" spec, not a pile of disconnected tickets nobody
prioritizes. The debt-aggregation threshold exists specifically to prevent
review findings from becoming a backlog graveyard.

## Pairs-with-konseputo-review division of labor

| Question | Owner |
|---|---|
| Is this specific line/diff correct, safe, AI-slop-free? | `/konseputo-review` |
| Does this change need sync review before merge, or can it ship? | This skill (Ship-Show-Ask) |
| Is the whole service healthy, not just this diff? | This skill (layer-sharded audit) |
| Is a cluster of findings a real systemic problem? | Both — same aggregation rule, different scope |
