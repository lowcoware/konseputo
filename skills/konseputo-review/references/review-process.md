# Review process — how much to look at, and how hard to trust it

Not a bug catalog (see `ai-bug-patterns-be.md` and `ai-bug-patterns-fe.md` for
those) — this is
about the review ACT itself: how much diff one pass can actually cover, why a
polished diff is not evidence of correctness, and what an LLM reviewer (this
skill included) is and isn't good at.

## Size — defect detection collapses past ~400 lines

A SmartBear-documented Cisco Systems study is the field's reference point:
detection rate by review size — 1-100 lines ~87%, 101-300 ~78%, 301-600 ~65%,
601-1000 ~42%, 1000+ ~28%. Google's internal review data independently lands
on the same number: PRs under ~400 changed lines get materially better review
than larger ones. Speed matters too — defect density collapses above
~400-500 LOC/hour; a review that's fast AND thorough past that rate is not
happening, one of the two is fiction.
[SmartBear: Cisco peer-review study](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/) ·
[Propel Code: PR size vs review quality](https://www.propelcode.ai/blog/pr-size-impact-code-review-quality-data-study)

**Applies directly to konseputo-review:** a diff over ~400 lines is not "the
same review, more of it" — it is a different task. Chunk it (see below)
rather than running one pass and reporting full confidence.

## Chunking a large (agent-scale) diff

Agent output routinely produces diffs no human-scale review process was
sized for. Two findings, both actionable:

**Structural features predict review effort better than reading the diff
does.** Added/deleted LOC, files-changed count, and change entropy predict
how much a diff will cost to review more accurately than its content does —
a "circuit breaker" triage built on these caught 69% of high-effort PRs
while only reading 20% of the review budget.
[Early-Stage Prediction of Review Effort in AI-Generated PRs, arXiv:2601.00753](https://arxiv.org/html/2601.00753)

**Risk-based triage, not uniform depth.** Classify by risk (touches auth/
money/public-contract/data-migration vs. not — same axis as
`intent-reconstruction.md`'s adaptive-depth rule) before deciding review
depth: low-risk + small + green tests → fast pass; high-risk or large or
boundary-crossing → full pass, reviewed first, not last.
[Codex KB: practical review strategies for agent output](https://codex.danielvaughan.com/2026/05/24/human-review-bottleneck-code-review-strategies-agent-output/)

For konseputo-review specifically: on a diff this large, sample proportionally
across files/risk-classes rather than reviewing front-to-back and running out
of attention before the riskiest file. State which files got full depth vs.
a lighter pass — an unstated partial review reads as a complete one.

## Automation bias — polish is not correctness

Automation bias is a documented, general finding: operators reduce
monitoring of automated systems specifically under multi-task load — and
increased verification effort is the documented countermeasure, not more
trust in the system's own confidence.
[Parasuraman & Manzey: complacency and bias in automation use](https://dl.acm.org/doi/10.1007/s00146-025-02422-7)

Applied here: an AI-authored diff reads as confident and syntactically clean
whether or not it's correct — that's exactly the surface signal a reviewer's
habitual pattern-matching keys off. A well-formatted diff, plausible variable
names, and a clean diff view are not evidence of correctness; they are the
same signal a human-written diff gives when it's *also* wrong. Review the
diff you'd get from an intern who is extremely fluent and occasionally
confidently wrong — the fluency is not the risk signal, autopilot trust is.
This is the standing justification for `bug:`/`arch:` existing as an
explicit, separate pass instead of trusting "it reads fine."

## LLM-as-reviewer — know the tool's own failure mode

konseputo-review is itself run by an LLM. Its limits are the field's, not
special to this suite:

- **High false-positive rates are the dominant failure mode**, not missed
  bugs — some pipelines produce 7+ false positives per PR on average; one
   open-source security-report pipeline saw its confirmed-valid rate driven
  below 5% by AI-generated submissions, prompting maintainers to pause intake
  entirely.
  [StepSecurity-adjacent field data via arXiv:2601.18844](https://arxiv.org/pdf/2601.18844)
- Best measured LLM-reviewer setups still trade precision for recall or vice
  versa — no current setup clears both bars at once. Treat every `bug:`/
  `arch:` finding this skill emits the same way: state it as a claim with a
  concrete failure scenario, not as ground truth. If the failure scenario
  can't be stated concretely, the finding is probably a false positive.
- This is exactly why the format mandates `<file>:<line>: <SEV> <tag> <what>.
  <fix>.` — a vague finding with no locatable failure scenario is the
  false-positive shape the research above describes.

## Tests passing is not "correct" — benchmark contamination as the cautionary case

SWE-bench, the field's reference agentic-coding benchmark, has documented
contamination and gaming: models reproducing memorized gold patches
verbatim, agents dropping a `conftest.py` that survives environment reset and
overwrites test outcomes via a pytest hook, and a large fraction of "hardest"
unsolved tasks turning out to have flawed test cases rather than unsolved
bugs. The field's own response was building a harder, less-contaminated
successor (SWE-bench Pro) rather than trusting the original scores.
[Position: coding benchmarks are misaligned with agentic SWE, arXiv:2606.17799](https://arxiv.org/pdf/2606.17799)

Applied here: "tests pass" is evidence, not proof. A diff can pass every
test and still not do what was asked (`intent-reconstruction.md`'s whole
premise) or pass tests that were shaped to make it pass (`test:`'s
same-pass-self-verification finding, `ai-bug-patterns-be.md`). Green CI on an
agent-authored diff earns the same scrutiny as green CI anywhere else — it
narrows the search space, it doesn't close the review.

## Test-quality addendum — over-mocked tests

A 2026 empirical study of coding-agent-generated tests found agents
systematically over-mock: tests pass but verify the mock's behavior, not the
system's. Companion finding: AI-generated suites reach high line coverage
while killing far fewer mutants than equivalent human-written suites —
coverage and fault-detection diverge specifically in agent-authored tests.
[Are Coding Agents Generating Over-Mocked Tests?, MSR'26](https://andrehora.github.io/pub/2026-msr-agents-over-mocked-tests.pdf)

Add to the `test:` tag's checklist alongside assert-less tests and same-pass
self-verification: a test suite that's all-green and high-coverage on an
agent-authored diff is a reason to spot-check for real assertions and real
mocked-vs-real boundaries, not a reason to skip that check.

## Multi-agent failure taxonomy — cross-check for `arch:`/`bug:` gaps

MAST (1600+ annotated traces across 7 multi-agent frameworks, expert-
annotated, κ=0.88 inter-annotator agreement) found 14 distinct failure modes
in 3 clusters: **specification/system-design** (~42% — task
misinterpretation, ambiguous roles, poor decomposition, duplicate agent
roles, missing termination conditions), **inter-agent coordination
breakdown** (~37%), and **weak task verification** (~21%). Relevant to a
diff that itself implements multi-agent orchestration (a `konseputo-goal`-style
pipeline, a custom subagent fleet): the dominant failure class is
specification quality, not inter-agent mechanics — a review of orchestration
code should scrutinize the task/role definitions and termination conditions
first, coordination logic second. This is a cross-check for gaps in this
skill's own `bug:`/`arch:` catalog on multi-agent code specifically, not a
new tag — file findings under existing tags.
[MAST: Why Do Multi-Agent LLM Systems Fail?, NeurIPS 2025](https://arxiv.org/abs/2503.13657)

## Company practice, 2026 snapshot

Google reports ~75% of new code is AI-authored; its internal guidance
respond by naming code review, security, and maintenance as the areas
needing more rigor, not less — the review step gets *more* attention as
authorship shifts to AI, not less. Corroborates this skill's entire premise.
[9to5google: Google's internal AI-coding guidance](https://9to5google.com/2025/06/30/google-engineers-ai-code/)

## Sources

- [SmartBear: Cisco peer-review study, 200-400 LOC / 400-500 LOC-per-hour thresholds](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/)
- [Propel Code: PR size vs review quality, Google 400-line data point](https://www.propelcode.ai/blog/pr-size-impact-code-review-quality-data-study)
- [Early-Stage Prediction of Review Effort in AI-Generated PRs, arXiv:2601.00753](https://arxiv.org/html/2601.00753)
- [Codex KB: review strategies for agent output, risk-based triage](https://codex.danielvaughan.com/2026/05/24/human-review-bottleneck-code-review-strategies-agent-output/)
- [Parasuraman & Manzey: complacency and bias in automation use](https://dl.acm.org/doi/10.1007/s00146-025-02422-7)
- [These Aren't the Reviews You're Looking For: how humans review AI-generated PRs, arXiv:2605.02273](https://arxiv.org/html/2605.02273v1)
- [Reducing False Positives in Static Bug Detection with LLMs, arXiv:2601.18844](https://arxiv.org/pdf/2601.18844)
- [Position: Coding Benchmarks Are Misaligned with Agentic SWE, arXiv:2606.17799](https://arxiv.org/pdf/2606.17799)
- [Are Coding Agents Generating Over-Mocked Tests?, MSR'26](https://andrehora.github.io/pub/2026-msr-agents-over-mocked-tests.pdf)
- [9to5google: Google's internal AI-coding guidance, 2025-06-30](https://9to5google.com/2025/06/30/google-engineers-ai-code/)
- [GitClear 2026: The Maintainability Gap](https://www.gitclear.com/the_ai_code_quality_maintainability_gap)
