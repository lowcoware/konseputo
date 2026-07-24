# MOC: Skills

The konseputo suite's own 22 skills, grouped by what they own — a self-generated
reference for `konseputo-wiki`, built following its own `moc.md` workflow
against this repo's `skills/` folder instead of a project's `/specs/` or
`/adrs/`.

## Engineering domains

- [[konseputo-backend]] — Go-first microservices: day-one baseline, the ladder's
  rungs, hardening (Go/Python), events/outbox/DLQ, per-store playbooks.
- [[konseputo-frontend]] — Vue 3 / Nuxt 4 / Tailwind v4: AI-tells kill list,
  design tokens, motion craft, a11y/interface audit.
- [[konseputo-mobile]] — Flutter-first, React Native, native SwiftUI/Kotlin;
  mobile-specific hardening and platform baselines.
- [[konseputo-ai]] — RAG pipelines, Qdrant, MCP server/tool design and
  security, LLM gateway, subagent orchestration.
- [[konseputo-devops]] — Docker Compose, Traefik/TLS, GitHub Actions CI,
  backup/DR — no Kubernetes.

## Quality and safety

- [[konseputo-security]] — auth/authz architecture, rate limiting, CORS,
  secrets management, webhook signature verification.
- [[konseputo-dependency-audit]] — supply-chain vetting, lockfile discipline,
  slopsquatting, CVE/EPSS triage before and after adding a dep.
- [[konseputo-review]] — diff review against the suite's own ruleset:
  overengineering, AI-typical bug patterns, architecture decay.
- [[konseputo-systematic-debug]] — disciplined bug hunting for an OBSERVED
  failure: delta debugging, flaky tests, concurrency bugs.
- [[konseputo-legacy]] — characterization tests, blast-radius assessment,
  strangler fig for code nobody fully understands yet.
- [[konseputo-shrink]] — repo-wide overengineering audit, not a single diff.
- [[konseputo-debt]] — harvests `konseputo:` ceiling markers into one ledger,
  flags markers with no upgrade trigger.

## Knowledge and output formatting

- [[konseputo-wiki]] — this skill: vault structure, MOCs, Canvas, Bases, vault
  health.
- [[konseputo-md-generator]] — per-note Obsidian Markdown syntax: callouts,
  embeds, properties, wikilinks.
- [[konseputo-artifact]] — single-file HTML documents: reports, plans,
  diagrams, calibrated against a vendored example gallery.
- [[konseputo-humanizer]] — voice-calibrated editing, AI-tell removal in
  prose.
- [[konseputo-clone]] — web-clone assessment ladder (L1-L6), legal framework
  for scraping a target site.

## Process and planning

- [[konseputo-project-management]] — spec-driven workflow, ADR lifecycle,
  mechanical playbooks (checkpoint, retro, triage).
- [[konseputo-goal]] — phased autonomous execution engine: plan, execute,
  verify, audit.
- [[konseputo-brainstorm]] — structured pick-an-approach panel before a
  hard-to-reverse decision.

## Router and reference card

- [[konseputo]] — universal entry point: describes a situation, names the
  best-fit skill.
- [[konseputo-help]] — one-screen reference card for the whole suite.

## Rebuild trigger

Rebuild when the skill count in `skills/` changes materially (a handful of
new/removed skills, not every renamed reference file) — same threshold
`vault-health.md`'s stats script would flag in a real vault. Last built:
2026-07-24, 22 skills.
