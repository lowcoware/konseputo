# ADR lifecycle — for agent-drafted, human-decided architecture

## When an ADR is warranted

A decision earns an ADR when it has real blast radius: a cross-service
contract, data ownership, a dependency swap affecting more than one
service, a decision future work will assume without re-litigating. Not
warranted: implementation details reversible in one PR, anything already
covered by an existing ADR (record a supersede instead of a new one), a
decision the ladder/baseline already makes for you (those aren't decisions,
they're defaults).

Sharper 3-condition test — write one only when ALL three hold: hard to
reverse, surprising without context, the result of a real trade-off. And
an ADR can be 1-3 sentences — the template below is a ceiling, not a
form to fill; a lean ADR that gets written beats a thorough one that
doesn't. Grounding for the lean-over-thorough bias: an action-research
study found ADRs measurably improved team cooperation once adopted, but
also found industrial adoption stays inconsistent specifically because
of the tension between documentation overhead and agile pace — the
lighter the format, the more likely it survives contact with a real
sprint. Where teams do run ADR discussions, keeping them to 30-45 minutes
max is the reported sweet spot; longer sessions are where ADR practice
tends to die from friction, not from the decisions being unimportant.
[TechTarget: ADR best practices](https://www.techtarget.com/searchapparchitecture/tip/4-best-practices-for-creating-architecture-decision-records)

## Who writes what — the human/agent split

1. **Agent drafts.** Given a decision that needs one, the agent researches
   the codebase for the actual alternatives, scans for constraints, and
   writes a full first-draft ADR — Context, Decision, Alternatives,
   Consequences.
2. **Human decides.** The ADR is marked `accepted` only on explicit human
   sign-off — never auto-accepted because the agent wrote a confident
   draft. This is the one place in this skill where "the agent is
   confident" is explicitly not sufficient.
3. **Agent enforces afterward.** Once accepted, an agent touching code the
   ADR governs checks it first (`Consult before touching governed code`,
   below) — the ADR becomes a constraint the agent respects, not just a
   record it wrote once.

## Before vs after implementation

Write it *before* implementation when the decision is foreseeable at plan
time (the spec's Plan stage already names it). Write it *after*, but before
merge, when the decision emerged during implementation and wasn't
foreseen — never skip it because implementation is already done; an
undocumented decision an agent made mid-implementation is exactly the
"agent silently violates unstated architecture" failure mode this whole
practice exists to prevent.

## Consult before touching governed code

Before an agent edits a file/module an ADR explicitly governs (named
services, named patterns, named boundaries), it checks the active ADR
index first. Two outcomes:

- The change is consistent with the ADR → proceed normally.
- The change would violate it → stop, flag the conflict to the human. Never
  silently work around an ADR because the new request seems to want
  something different — that's exactly how architecture erodes one
  well-intentioned diff at a time.

## Template

```markdown
# ADR-<NNN>: <decision, as a noun phrase>

## Status
proposed | accepted | rejected | superseded by ADR-<NNN>

## Context
What's forcing this — an incident, a constraint, a scaling number. Not
"as the system grows in complexity."

## Decision
Stated flatly, one paragraph.

## Alternatives considered
Each alternative, one line: what it was, why it lost. Not an essay per
option.

## Consequences
The honest tradeoff — what this costs, not just what it buys. An ADR that
only lists benefits reads like marketing, not a decision record.

## Links
Depends-on / Used-by / Related specs / External sources
```

Formatting/rendering (properties, wikilinks between ADRs, callouts) is
`konseputo-md-generator`'s job — this template is content structure only.

## Numbering and supersede

Sequential, project-scoped (`ADR-014`), never reused even for a rejected
ADR — a rejected ADR stays in the index as a record that the option was
considered, marked `rejected`, not deleted. A later ADR that changes course
sets `status: superseded by ADR-NNN` on the old one and cites it in the new
one's Context — never silently contradicts a still-`accepted` ADR.

## Propagate the decision

Accepting an ADR isn't the end of the work. A short, explicit checklist
runs immediately after acceptance:

1. Does any existing doc (service README, another ADR's Consequences)
   need a one-line update to stay consistent?
2. Does the change belong in the day's changelog entry
   (`playbooks.md`'s update-changelog)?
3. Is there code already violating the new decision that now needs a
   tracked cleanup task — not a silent, unplanned refactor bundled into an
   unrelated diff?

Skipping this step is how an ADR becomes true on paper and false in the
codebase within a month.
