---
name: konseputo
description: "Universal entry point and router for the konseputo suite. Describe a situation in plain words and it names the best-fit konseputo skill(s) to plug in, disambiguating the overlapping pairs. Triggers: \"/konseputo\", \"which konseputo skill\", \"what konseputo skill for this\", \"какой konseputo скилл\", \"что из konseputo подключить\", \"куда это по konseputo\", \"konseputo, помоги выбрать\", \"route this\", \"what should I use for\". Bare /konseputo routes; /konseputo blitz|medium|hardcore is the mode switch (handled by the hook), not this. A static one-screen card is /konseputo-help; this one reads the situation and recommends."
---

# konseputo — router

Read the user's situation (their words + the repo: changed files, stack,
whether there's an observed failure) and recommend which konseputo skill to plug
in. Suggest, don't hijack: name the best fit and why, then proceed with it if
the match is clear, or present a short pick-list if it's genuinely ambiguous.
One-shot. Changes no modes, writes no files.

## Output shape

```
Reading this as: <one-line situation>.
Best fit: <skill> — <one-line why>.
Alternative: <skill> if <condition>.   (only when a real fork exists)
```

Then: clear winner -> "Proceeding with <skill>." and follow that skill.
Genuine fork -> `AskUserQuestion` with the 2-3 candidates, one line each.

## Routing table

| Situation signal | Skill |
|---|---|
| Build/extend backend: service, endpoint, worker, consumer, Kafka, gRPC, migration, DB | konseputo-backend |
| Build/extend web UI: component, landing, dashboard, form, tokens, browser animation | konseputo-frontend |
| Build/extend mobile: Flutter, React Native, SwiftUI, Kotlin, native screen | konseputo-mobile |
| AI infra: RAG, embeddings, Qdrant, LLM gateway, MCP server/tool | konseputo-ai |
| Existing/unfamiliar code, refactor without tests, migration | konseputo-legacy |
| Proactive security while writing: JWT, authz/IDOR, rate limit, CORS, secrets | konseputo-security |
| Third-party dependency safety: CVE, supply chain, "safe to install?" | konseputo-dependency-audit |
| Deploy/infra without k8s: Compose, Dockerfile, GH Actions, Traefik/TLS, VPS | konseputo-devops |
| Review a diff/PR for slop, baseline, AI-typical bugs | konseputo-review |
| Repo-wide over-engineering cut-list (not a diff) | konseputo-shrink |
| Harvest `konseputo:` ceiling markers into a debt ledger | konseputo-debt |
| An OBSERVED failure to explain: broken, failing test, regression, wrong output | konseputo-systematic-debug |
| Not-yet-decided fork: which approach, tech choice, schema, boundaries | konseputo-brainstorm |
| Plan work: spec, ADR, changelog, checkpoint, retro, triage, review cadence | konseputo-project-management |
| Drive an existing plan to done autonomously, phase by phase | konseputo-goal |
| Rewrite/generate text in the user's voice, strip AI tells | konseputo-humanizer |
| Format a doc as Obsidian markdown (properties, callouts, wikilinks) | konseputo-md-generator |
| Generate a standalone HTML report/plan/diagram, one shareable file | konseputo-artifact |
| Maintain an Obsidian vault as a project wiki: structure, MOCs, vault health, Canvas/Bases | konseputo-wiki |
| Clone/reverse-engineer a website (with a legitimate basis) | konseputo-clone |
| Just want the reference card of skills/modes/tags | konseputo-help |

## Disambiguation — the overlapping pairs

Where two skills look plausible, the fork is the value:

- **review vs systematic-debug vs shrink.** Observed failure (something IS
  broken) -> debug. A diff with no failure, checking quality/slop -> review.
  Whole repo, not a diff, hunting what to delete -> shrink.
- **brainstorm vs project-management.** Decision NOT yet made (weighing
  approaches) -> brainstorm. Decision made, now record/plan it (spec, ADR) ->
  pm.
- **project-management vs goal.** Writing the plan (spec/roadmap/ADR) -> pm.
  Autonomously executing a plan to completion (phase loop, audit) -> goal.
  Natural sequence: pm plans, goal drives.
- **security vs dependency-audit.** Vulnerability in OUR code (authn, IDOR,
  rate limiting, CORS) -> security. Risk in a THIRD-PARTY package (CVE,
  typosquat, install hook) -> dependency-audit.
- **frontend vs mobile.** Browser UI (Vue/Nuxt/Tailwind) -> frontend.
  Flutter/RN/SwiftUI/Kotlin screens -> mobile.
- **backend/frontend vs legacy.** Greenfield or code written this session ->
  backend/frontend. Existing/unfamiliar code needing characterization tests
  and blast-radius first -> legacy (then it hands back to the builder skill).
- **humanizer vs md-generator vs artifact vs wiki vs pm.** Voice/AI-tells
  of prose -> humanizer. Obsidian FORMATTING of one note -> md-generator.
  Rendering as a standalone shareable HTML file (report/plan/diagram) ->
  artifact. WHERE a note lives, vault structure/MOCs/health/Canvas/Bases ->
  wiki. WHAT the doc should say and whether it exists -> pm. They stack: pm
  decides content, humanizer voices it, md-generator formats the note,
  wiki places it in the vault and keeps it connected.
- **review vs clone.** Judging code you have -> review. Rebuilding a site you
  don't have the source of -> clone.

## Modes and companions

- Modes (`blitz|medium|hardcore`) apply to backend and frontend only. `/konseputo
  blitz` etc. is the mode switch (the hook handles it) — not this router.
- Off-charter asks route OUT of the suite, say so plainly: offensive
  security / pentest / bug bounty -> companion `claude-bughunter`;
  token-compressed chat mode -> companion `caveman`; deep general web
  research -> the host's research tooling; a chart/dataviz -> the host's
  dataviz skill.

## Boundaries

Recommends and routes; does not itself build, review, or write. Picks the
skill; that skill does the work. Not the static card — that's `konseputo-help`.
Nothing here changes mode or state.
"stop konseputo" / "normal mode": revert to default behavior.
