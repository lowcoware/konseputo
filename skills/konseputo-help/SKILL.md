---
name: konseputo-help
description: >
  One-screen reference card for the konseputo suite: skills, modes, ceiling-marker
  syntax, review tags, config keys, mode-switch commands. One-shot display,
  changes nothing. Triggers: "/konseputo-help", "konseputo help", "справка konseputo",
  "что умеет konseputo", "как включить konseputo", "konseputo commands".
---

Display this card when invoked. One-shot: do NOT change mode, write flag
files, or persist anything.

# konseputo — reference card

## Skills

| Skill | Trigger | Does |
|---|---|---|
| konseputo | `/konseputo` | Router: describe a situation, it recommends which skill(s) to plug in and splits the overlapping pairs |
| konseputo-backend | `/konseputo-backend [mode]` | Greenfield microservice backends, Go-first: ladder + day-one baseline + ceiling markers |
| konseputo-frontend | `/konseputo-frontend [mode]` | Vue 3 / Nuxt 4 / Tailwind v4: register split, AI-tells bans, GSAP/Lenis canon, DESIGN.md protocol |
| konseputo-review | `/konseputo-review` | Diff review: overengineering + baseline + seams + AI-typical bugs + architecture-decay + AI-tells. One line per finding |
| konseputo-debt | `/konseputo-debt` | Harvest `konseputo:` markers into a ledger, flag rot |
| konseputo-humanizer | `/konseputo-humanize` (chat) or automatic in doc generation | Rewrites/generates text in the calibrated user voice; strips AI writing-tells |
| konseputo-md-generator | `/konseputo-md` | Formats generated docs as Obsidian Flavored Markdown — properties, wikilinks, callouts, zero plugin dependency |
| konseputo-artifact | `/konseputo-artifact` | Self-contained HTML artifact: report/plan/diagram as one file, mandatory dark mode, gallery-calibrated |
| konseputo-wiki | `/konseputo-wiki` | Maintains an Obsidian project wiki: structure, MOCs, vault health, Canvas, Bases, CLI automation |
| konseputo-project-management | `/konseputo-pm` | Spec-driven workflow, ADR lifecycle, review-cadence scaling, mechanical playbooks (task/changelog/checkpoint/retro/triage) |
| konseputo-legacy | `/konseputo-legacy` | Existing/unfamiliar code: characterization tests, seams, blast-radius assessment, Strangler Fig, agent read-before-write protocol |
| konseputo-ai | `/konseputo-ai` | RAG/embeddings/Qdrant, LLM gateway, MCP server/tool design + security, Claude Code subagent conventions |
| konseputo-security | `/konseputo-security` | JWT/HMAC auth, secrets management, IDOR/authz, layered rate limiting, CORS, Traefik edge hardening |
| konseputo-devops | `/konseputo-devops` | Compose multi-env, multi-stage Dockerfiles, GH Actions (pull_request_target footgun), Traefik ACME/TLS, blue-green on one VPS, infra decay |
| konseputo-mobile | `/konseputo-mobile` | Flutter/React Native/native: platform-choice ladder, day-one mobile baseline, dispose/leak catalog, secrets-in-binary rule |
| konseputo-brainstorm | `/konseputo-brainstorm` | Hard-to-reverse design decision: 3 real approaches, score vs named constraints, recommend + trip-wire → ADR |
| konseputo-systematic-debug | `/konseputo-debug` | Disciplined bug hunt: reproduce → bisect → hypothesis-log → smallest fix → regression test |
| konseputo-dependency-audit | `/konseputo-audit` | Vet a dep for CVEs/typosquat/protestware/install-hooks; lockfile+pin discipline; supply-chain incidents |
| konseputo-shrink | `/konseputo-shrink` | Repo-wide over-engineering audit: delete/inline/stdlib list, ranked biggest cut first |
| konseputo-clone | `/konseputo-clone` | Website cloning: recon-first, L1-L6 grading, Playwright harvest/mirror/diff scripts, fidelity audit |
| konseputo-goal | `/konseputo-goal` | Execution engine: drives a plan through phases under one `/goal` — verify, 3-strike recovery, final audit vs the plan |
| konseputo-help | `/konseputo-help` | This card |

## Modes

| Mode | What changes |
|---|---|
| blitz | Fastest excellent attempt. No plan prose, no alternatives talk. Baseline + carve-outs + tests still mandatory |
| medium | Default. Full ruleset as written |
| hardcore | Architecture mode: boundaries, contracts, failure modes of every seam BEFORE code. Analysis in thinking + short chat summary, never documents |

Switch: `/konseputo-backend blitz`, `/konseputo-frontend hardcore`. Off: `stop konseputo` / `normal mode`.
Statusline badge: `[KONSEPUTO:BE:BLITZ]`, `[KONSEPUTO:FE]`, `[KONSEPUTO:BE+FE:HARDCORE]`.

## Ceiling marker

`// konseputo: <ceiling>, <upgrade trigger>` (Go/TS) · `# konseputo: ...` (Python)
(example: konseputo-backend references/ladder.md)
No trigger = rot; /konseputo-debt flags it.

## Review tags

BE: `over:` `baseline:` `seam:` `test:` `resil:` `bug:` `arch:` — FE: `tell:` `state:` `motion:` `token:` `a11y:` `bug:` `perf:`
Severity: BLOCK / WARN / INFO. Clean verdict: `Lean. Ship.`

## Config

| Key | Where | Values |
|---|---|---|
| defaultMode | `~/.config/konseputo/config.json` | blitz / medium (default) / hardcore |
| docstringLang | same | ru / en — default owned by konseputo-backend docs.md |
| coverageTarget | same | number — default owned by konseputo-backend testing.md |

Resolution: `KONSEPUTO_DEFAULT_MODE` env > config file > medium.
Flag file: `~/.claude/.konseputo-active` — `{"backend":true,"frontend":false,"mode":"medium"}`.
