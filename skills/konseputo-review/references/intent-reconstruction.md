# Intent reconstruction — deep pass for high-stakes diffs

For a diff where a silent misunderstanding is expensive (auth, money, data
migration, a public contract), run one extra pass before the tag sweep:
reconstruct what the code is *supposed* to do from the code alone — ignore
the PR title, the commit message, any prose the author wrote. Then compare
your reconstruction to their stated intent.

- **Match** → the code communicates; proceed to normal tagging.
- **Mismatch** → the gap IS a finding. Either the code is wrong, or it's so
  unclear the next maintainer (human or AI) will misread it the same way
  you did. File it as `bug:` (code wrong) or `arch:`/naming (code
  misleading).

This is the redacted-handoff move: strip the author's explanation, see if
the artifact still speaks. Cheap, catches the class of bug where code
passes every test but does the wrong thing confidently. Not every diff —
only where being confidently-wrong is costly. It's the review-time twin of
`konseputo-systematic-debug`'s rubber-duck step.

## When project docs exist

Treat a permissions spec, architecture doc, or ADR as the intent source
instead of reconstructing from code alone — same match/mismatch logic, but
cite both sides: the documented claim (quote it) and the enforcing code
(file:line), never "probably handled elsewhere."

Filter mismatches by whether they matter: a gap only rises to a finding
when crossing it reaches data, money, infrastructure, or another tenant a
reader shouldn't reach — drop cosmetic drift, keep boundary-crossing
drift. A documented-but-unenforced rule is itself a finding, ranked by
what crossing it exposes. (Boundary-crossing filter re-expressed from
phuryn/pm-skills `intended-vs-implemented`, MIT.)

## Scale depth to diff size and risk

Not a fixed procedure: small/low-risk diffs get the quick pass above; a
diff touching auth, money, or a public contract earns full reconstruction
plus a blast-radius pass (who else calls the changed surface,
transitively) before verdict — "small PR" is not an exemption, it's a
size, and a two-line diff can still be the highest-risk change in the
set. (Adaptive-depth framing re-expressed from trailofbits/skills
`differential-review`, CC BY-SA 4.0.)

## Two independent axes, never merged

**Standards** (does it follow the ruleset — the tag sweep) and **spec**
(does it do what was asked). Code can pass every standard and implement
the wrong thing; report the axes separately so a clean tag sweep can't
mask a spec fail.
