# Changelog

The running record of the konseputo skill suite. From this release on, this file is
the single place changes are logged.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning:
[SemVer](https://semver.org/).

## [Unreleased]

## [1.0.2] - 2026-07-21

### Added

- 6 new skills (16 -> 22): `konseputo-shrink` (repo-wide overengineering audit),
  `konseputo-clone` (site-cloning discipline: recon-first, L1-L6 grades, Playwright
  harvest/mirror/diff scripts, ethics boundaries), `konseputo-goal` (autonomous
  execution engine: post-PM phase runner, verify/3-strike-recovery/final audit),
  `konseputo-artifact` (self-contained HTML artifact generator: report/plan/diagram,
  mandatory dark mode), `konseputo-wiki` (Obsidian project-wiki discipline:
  structure/MOC/vault-health/canvas/bases/CLI/capture-atomize).
- `konseputo-frontend`: AI-tells preflight scanner (`preflight.mjs` + RU lexicon +
  tests), motion-craft catalog (easing/duration/spring/gesture formulas,
  4-question gate), template-catalog (115 shapes) + brand-systems-catalog (153
  packages), ux-laws (29) + rtl-i18n-ui (21), gsap-api reference, interface-audit
  (48 Vercel WIG rules), design-contract, image-pipeline, forms/components/
  tokens/typography deltas.
- `konseputo-backend`: `security-checklist.md` (Go net/http + FastAPI hardening),
  `otel-collector.md` (OTel Collector config footguns), `stores-redis.md`,
  `platform-native.md`, worker-pool-sizing section in `hardening-go.md`
  (Little's Law), Python tooling table in `deps.md`, property-testing catalog
  in `testing.md`.
- `konseputo-ai`: `qdrant.md` multitenancy/memory-optimization/embedding-migration
  sections, `mcp-server.md` response-shape/pagination conventions.
- `konseputo-review`: `api-misuse-resistance.md` (misuse-resistant API/config design,
  `bug:`-tagged), `intent-reconstruction.md` (boundary-crossing filter,
  adaptive-depth/blast-radius framing), Python general-correctness section in
  `ai-bug-patterns-be.md`.
- `konseputo-dependency-audit`: dependency health-risk scoring in `supply-chain.md`.
- `konseputo-pm`: write-executor-plan + reconcile-plans + resolve-pr-feedback +
  research-synthesis playbooks.
- `scripts/check-versions.js` + CI step keeping every manifest's version equal.
- CI emoji-scan extended to `.py`.

### Changed

- Go HTTP framework priority: Gin is the first choice, GoFiber v3 second (was GoFiber-only as the canon).
- Python pinned to 3.14 (was 3.13).
- Lineage table (README/README.en) and LICENSE third-party grouping brought
  current with every source absorbed since 1.0.0 — was 5 sessions stale.

## [1.0.0] - 2026-07-04

Initial public release.

- 16 anti-overengineering skills for Claude Code, portable to Cursor, Codex, and
  Antigravity: konseputo-backend, konseputo-frontend, konseputo-review, konseputo-debt, konseputo-help,
  konseputo-humanizer, konseputo-md-generator, konseputo-project-management, konseputo-legacy,
  konseputo-ai, konseputo-security, konseputo-devops, konseputo-mobile, konseputo-brainstorm,
  konseputo-systematic-debug, konseputo-dependency-audit.
- An anti-overengineering ladder plus a non-negotiable day-one service baseline,
  scaling groundwork expressed as `konseputo:` ceiling markers rather than
  speculative code, and stateful modes (blitz / medium / hardcore) for
  konseputo-backend and konseputo-frontend.
- Bilingual documentation, Russian by default with English linked: README,
  INSTALL, USAGE, CONTRIBUTING, SECURITY.
- Install paths per CLI: native plugin (Claude Code marketplace, Antigravity
  `agy plugin`), `npx skills`, and an offline repository installer.
- Lifecycle hooks (mode flag, ruleset injection, subagent activation) and a
  statusline badge for Claude Code; a never-block, Windows-hardened hook design.
- A deterministic lint gate (skill schema, cross-reference consistency, ceiling
  marker report, no emoji) runnable locally and in CI.
