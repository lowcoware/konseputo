# Spec-driven development — the unit of work

## Why not sprints

A sprint time-boxes implementation effort. That's the wrong axis once an
agent implements a feature in minutes — the pacing element moved to review
and integration. 2025-2026 industry consensus (GitHub Spec Kit, AWS Kiro,
BMAD-METHOD): specs replace tickets as the primary artifact, and cadence
becomes **WIP-limited flow**, not calendar boxes.

1. "Sprint" survives only as an optional reporting grouping (for
   changelog/checkpoint rollups) — never as a scheduling constraint on when
   work starts or finishes.
2. The real limit is **how many specs are "active" at once** — cap it (2-3
   for a solo dev, scale with team size) so review doesn't drown.
3. A spec moves through states: `inbox` → `active` → `review` → `archive`.
   No state skips `review`, regardless of how fast implementation was.

## The pipeline

`constitution → specify → clarify → plan → tasks → implement → verify`

- **Constitution** (once per project, not per feature): the fixed
  constraints an agent must never violate — this project's canon is
  `konseputo-backend`/`konseputo-frontend`'s blessed stack + ladder + baseline; a PM
  spec doesn't re-derive these, it inherits them.
- **Specify**: what, for whom, why — see template below.
- **Clarify**: ask exactly what's ambiguous, once, per `conventions.md`'s
  ask-vs-don't-ask table — never a multi-question dump.
- **Plan**: how, at the architecture level — cites relevant ADRs
  (`adr.md`), names the services/files it touches (blast-radius estimate).
  Also assigns the Ship-Show-Ask review tier NOW (`review.md`) — tier is a
  function of risk/blast-radius, known at plan time, not of eventual diff
  size.
- **Tasks**: decomposed into agent-executable units — see decompose-as-spec
  below.
- **Implement**: the agent's job, against the spec — not against a verbal
  summary of it.
- **Verify**: acceptance criteria checked, the review tier assigned at Plan
  actually carried out (Ship merges, Show async-reviewed, Ask
  sync-reviewed), then archived.

## Spec template

```markdown
# <Title>

## Context
Why this, why now. Cite the trigger — an incident, a request, a metric —
not "it would be nice."

## Non-Goals
What this spec explicitly does NOT cover. Cheap to write, expensive to
skip — this is what stops scope creep mid-implementation.

## Assumptions
What's taken as given (an API exists, a service is available). If an
assumption turns out false mid-implementation, that's a stop-and-ask
signal, not a silent workaround.

## Design Principles
Which existing conventions this spec leans on (blessed stack, ladder rung,
a specific ADR) — not re-explained, just cited.

## Data Model / Contract
Schema, event envelope, API shape — whatever this spec's boundary actually
is. Skip this section entirely if the spec touches no data contract.

## Runtime Behavior
What happens, step by step, including failure paths — not just the happy
path.

## Testing Strategy
What proves this is done: which test level (unit/integration/E2E) covers
which acceptance criterion. See `konseputo-backend/references/testing.md`.

## Decision Log
Choices made *during* this spec's own drafting that aren't big enough for
a standalone ADR but are still worth recording — "considered X, went with
Y because Z." This is what makes the spec double as an audit trail later.

## Acceptance Criteria
Measurable, checkable — "returns 409 on duplicate" not "handles duplicates
well."
```

Non-Goals, Decision Log, and Acceptance Criteria are the three fields most
specs skip and most regret skipping — they're what lets a spec function as
a review artifact and a debugging trail six months later, not just an
implementation prompt.

## Spec self-review — run before anyone else sees it

Four mechanical passes on the just-written spec, inline, no subagent:

1. **Placeholder scan** — banned phrases that defer the actual decision:
   "add appropriate error handling", "similar to task N — repeat",
   "handle edge cases", "as needed". Each one = a decision the implementer
   will make alone that the spec existed to make.
2. **Internal consistency** — does the Data Model match what Runtime
   Behavior describes; do Acceptance Criteria test things Non-Goals
   excluded.
3. **Scope check** — everything in the spec traceable to the stated goal;
   anything extra moves to Non-Goals or a new spec.
4. **Ambiguity check** — any sentence a hostile reader could implement two
   ways gets rewritten or a Decision Log entry.

Task right-sizing test: the smallest unit that carries its own test cycle
and is worth a fresh reviewer's gate. Smaller = slicing overhead; bigger =
the 400-line-diff gate (`review.md`) fires later anyway.

## Interviewing the requester — before writing the spec

When the ask is fuzzy, interview — but with mechanics, not vibes:

1. **Open with a hypothesis + confidence number.** "My read: you want X
   for Y. Confidence ~40% — missing: who uses it, why now." Forces your
   uncertainty into the open and gives the user something to correct,
   which is faster than answering open questions.
2. One question at a time, each with your best guess attached — "Which
   store? (guess: Postgres, it's already there)" — a guess to correct
   beats a blank to fill.
3. **Want vs should-want probe** when answers feel performative: "если бы
   это не надо было никому обосновывать — что бы ты попросил?"
4. **Stop test:** can you predict the answers to your next three
   questions? → stop asking, restate (Outcome / User / Why now / Success
   / Constraint / **Out of scope**), get one confirmation, write the spec.

## Pre-mortem gate — before building at all

For a new product/feature (not a bugfix/refactor): one short pass BEFORE
the spec — is this worth building? Five questions, one line each: who
demonstrably wants it / why now / what's the money-or-retention path /
what kills it (riskiest assumption) / what's the cheapest evidence that
would settle that assumption. Output: build / delay-until-evidence / drop.
Ten minutes here beats a perfectly-specced thing nobody needed. Contested
call → `konseputo-brainstorm`.

## Decompose-as-spec-type

Task granularity has no universal right size — too broad and an agent makes
architectural choices alone that should've been a human call; too narrow
and a human spends more time slicing than the agent saves. Resolve this by
making decomposition itself a spec:

1. A **decompose spec**'s only deliverable is a set of child specs, each
   independently implementable.
2. Review the decomposition once, before any child spec goes `active` —
   catching a bad slice here is cheap; catching it after three children are
   half-implemented is not.
3. A child spec that turns out too broad during implementation triggers a
   new decompose spec, not silent scope stretching inside the original.

## What NOT to do

No mandatory two-document system (a full Implementation Plan AND a
separate Task Plan for one feature) — that's exactly the ceremony this
suite's anti-overengineering stance already rejects for code; it's the same
mistake in a PM costume. One spec, one lifecycle. File a decompose spec
only when a feature genuinely needs splitting, not as a default step.
