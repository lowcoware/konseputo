# Humanizer Skill Harvest — INDEX

Harvested from GitHub via `gh search repos` (queries: `humanize skill`, `text humanizer`,
`ai detector bypass`, `гуманизация текста`, `очеловечить текст`, `нейротекст`, `канцелярит`,
`ИИ-текст`, `voice-profile skill`, plus repo-tree inspection via `gh api .../git/trees/HEAD`
to confirm each candidate actually ships a `SKILL.md` / `.cursor/skills` / equivalent agent-skill
format before download). Account: `lowcoware`. Date of harvest: 2026-08-03.

This niche is genuinely small — the real universe of *agent-skill-format* humanizers (not
generic web-app "AI text humanizer" SaaS products, which were explicitly excluded) is on the
order of a few dozen repos, not hundreds. Counts below are honest, not padded.

**Total harvested: 31 repos** (3 RU top-stars + 8 RU noname + 10 general top-stars + 10 general noname).
Total on-disk size: ~8.5 MB (images/eval-corpora stripped, `.git` stripped).

Format legend: most are Claude-Code `SKILL.md` skills; a few are Cursor (`.cursor/skills`),
multi-agent bundles (`.claude`/`.codex`/`.cursor`/`.gemini`/`.opencode`), or plain-prompt/README
"protocol" repos (noted explicitly).

---

## RU — Russian-language humanizer skills

### ru/top-stars (3)

| # | Repo | ★ | Updated (pushedAt) | Description | Local path | Notes |
|---|------|---|---------------------|--------------|------------|-------|
| 1 | [ilyautov/humanizer-ru](https://github.com/ilyautov/humanizer-ru) | 181 | 2026-07-31 | Скилл для Claude. Убирает 54 признака нейросети в русском тексте: канцелярит, кальки, фингерпринты ChatGPT/Claude. Quad-pass audit, calibration to author voice. | `ru/top-stars/001_ilyautov-humanizer-ru` | Sparse-checked-out: README(s), CHANGELOG, LICENSE, `commands/`, `skills/humanizer-ru/SKILL.md`+references. Skipped `eval/` (large corpus of copyrighted classics + AI samples) and `docs/` (built HTML site) — not skill content. |
| 2 | [smixs/humanizer-ru](https://github.com/smixs/humanizer-ru) | 120 | 2026-07-23 | Skill для AI-агентов (Claude Code, Codex, OpenClaw, Hermes): убирает 37 признаков AI-генерации из русского текста, 38 regex-маркеров. | `ru/top-stars/002_smixs-humanizer-ru` | Full clone (already lean, ~100KB). |
| 3 | [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru) | 90 | 2026-07-30 | Скилл для ИИ-агентов: 37 паттернов и 38 regex-маркеров, PERSONA.md, обширный research/eval aппарат. | `ru/top-stars/003_Vladimir-Human-humanizer-ru` | Sparse-checked-out: README(s), LICENSE, PERSONA.md, SKILL.md, `references/*`. Skipped `eval/` and `research/` (huge A/B corpora incl. full Turgenev/Gogol/Dostoevsky/Tolstoy/Pushkin texts used as human baselines — not skill content, copyright-heavy). |

### ru/noname (8) — <50★, pushed within ~90 days (since ~2026-05-05) unless noted

| # | Repo | ★ | Updated (pushedAt) | Description | Local path | Notes |
|---|------|---|---------------------|--------------|------------|-------|
| 1 | [beaverbeard/slopotron](https://github.com/beaverbeard/slopotron) | 6 | 2026-07-13 | 🔫 Отстреливает нейрослоп из русского текста — канцелярит, AI-клише и «нейротропы». Claude Code-скил. | `ru/noname/001_beaverbeard-slopotron` | `.claude/skills/slopotron/SKILL.md` + slash command. |
| 2 | [beaverbeard/chukovsky](https://github.com/beaverbeard/chukovsky) | 2 | 2026-07-13 | Claude Code-скил: литературный и смысловой редактор — правит канцелярит и сломанную логику, не переписывает за автора. | `ru/noname/002_beaverbeard-chukovsky` | Adjacent/companion skill to slopotron by same author; editorial rather than pure detector-bypass, included for relevance to "removing AI tells" adjacent editing. |
| 3 | [metaflora-app/metaflora-humanizer-skill](https://github.com/metaflora-app/metaflora-humanizer-skill) | 2 | 2026-07-11 | Навык, превращающий гладкий нейротекст в живой авторский текст — сохраняет факты, ритм и голос, убирает штампы, канцелярит, ложную уверенность. | `ru/noname/003_metaflora-app-metaflora-humanizer-skill` | `.claude-plugin` + `.codex-plugin` manifests; dropped prebuilt `dist/*.skill` zip (redundant with source `skills/`). |
| 4 | [serg-shcherbak/stop-slop-ru](https://github.com/serg-shcherbak/stop-slop-ru) | 0 | 2026-07-10 | Скилл для редактуры русских текстов: убирает нейросетевую шаблонность, канцелярит, выдуманную конкретику. | `ru/noname/004_serg-shcherbak-stop-slop-ru` | Includes `AGENTS.md` + `agents/openai.yaml` cross-agent adapters. |
| 5 | [vefmvai/slog](https://github.com/vefmvai/slog) | 0 | 2026-07-18 | Русскоязычный скилл-редактор для Claude: убирает ИИ-слоп не калеча текст. | `ru/noname/005_vefmvai-slog` | Includes RU-language research notes on Russian neuropatterns (`research/02-русские-нейропаттерны.md`) and voice-template system. |
| 6 | [jet-marketing-pr-ai-utilities/ace-of-slops](https://github.com/jet-marketing-pr-ai-utilities/ace-of-slops) | 0 | 2026-07-01 | Проверяет русский текст на типичные ИИ-штампы и переписывает без потери смысла/цифр/фактов. Cursor-based workflow. | `ru/noname/006_jet-marketing-pr-ai-utilities-ace-of-slops` | **Cursor skill format** (`.cursor/skills/ace-of-slops-ru/SKILL.md`) rather than Claude — good format-diversity example. |
| 7 | [YAMAKAYAMACO/digitaltraffic-detectai](https://github.com/YAMAKAYAMACO/digitaltraffic-detectai) | 2 | 2026-07-08 | 🧹 Очеловечить текст и убрать признаки ИИ — Claude-скилл, 56 паттернов, 2 прохода, калибровка голоса. | `ru/noname/007_YAMAKAYAMACO-digitaltraffic-detectai` | Ships only as a packaged `digitaltraffic-detectai.skill` bundle (opaque archive) + README — no readable source tree; kept as-is since that's the entire published artifact. |
| 8 | [KondrashovDenis/claude-humanizer-ru-skill](https://github.com/KondrashovDenis/claude-humanizer-ru-skill) | 6 | 2026-04-25 | Claude Code skill для чистки русских текстов от AI-штампов; adaptation of blader/humanizer. | `ru/noname/008_KondrashovDenis-claude-humanizer-ru-skill` | Slightly outside strict 90-day window (~100 days old) but included — small real universe, still actively relevant (patterns-ru.md + voice-samples). |

**RU repos evaluated but skipped:** `TakhirKudusov/ru-academic-restyle` (0★, pushed 2026-04-15, ~110d stale), `Rasteo123/Humanizer_ru` (0★, pushed 2026-02-04, ~180d stale), `Traff444/humanize-ru` (0★, pushed 2026-04-07, ~118d stale) — all confirmed real `SKILL.md` repos but too stale for the noname freshness bar and too low-star for top-stars; noted here rather than silently dropped. `majlovskij-cmd/humanizer-ua` (Ukrainian, not Russian) excluded as off-language.

---

## General (non-RU) humanizer skills

### general/top-stars (10)

| # | Repo | ★ | Updated (pushedAt) | Description | Local path | Notes |
|---|------|---|---------------------|--------------|------------|-------|
| 1 | [LifelongLazyLearner/qu-ai-wei](https://github.com/LifelongLazyLearner/qu-ai-wei) | 355 | 2026-07-08 | 去 AI 味：去除简体中文 AI 写作痕迹 — Chinese humanizer skill. | `general/top-stars/001_LifelongLazyLearner-qu-ai-wei` | Sparse: README(s incl. en/es/ja/ko), SKILL.md, `.cursorrules`, `references/*`. Skipped `tests/` (large fixture/eval corpus). |
| 2 | [harshaneel/humanize](https://github.com/harshaneel/humanize) | 324 | 2026-07-10 | Best static AI text humanizer — two research-grounded, LLM-agnostic skills; nine levers, 50+ peer-reviewed sources, 2024-2026 detection literature. | `general/top-stars/002_harshaneel-humanize` | Two skills: `ai-check/SKILL.md` + `humanize/SKILL.md` (+ `humanize/references/research.md`). Skipped `.github/benchmark` CI scaffolding. |
| 3 | [tizzy916/humanities-writing-companion](https://github.com/tizzy916/humanities-writing-companion) | 295 | 2026-07-13 | End-to-end humanities writing assistant — Agent Skill, 11 modes, bilingual EN/中文, four-layer critique, voice preservation. | `general/top-stars/003_tizzy916-humanities-writing-companion` | Full clone (873K), includes `SKILL.md` + `SKILL.zh.md`. |
| 4 | [Aboudjem/humanizer-skill](https://github.com/Aboudjem/humanizer-skill) | 144 | 2026-07-15 | AI writing pattern detector and rewriter — 53 patterns, 5 voices, 0-100 AI-tell score, pure Markdown, zero dependencies. | `general/top-stars/004_Aboudjem-humanizer-skill` | Sparse: README(s), LICENSE, `skills/humanizer/` (incl. `SKILL.md`, evals, patterns, voice-profile refs), `examples/`. Skipped `docs-site/` (Docusaurus site), `cli/`, `landing/` — packaging/marketing, not skill content. |
| 5 | [crabin/paper-humanizer-skill](https://github.com/crabin/paper-humanizer-skill) | 102 | 2026-03-28 | 中英文学术文本润色与人性化skill — academic paper de-AI-ing, EN/中文. | `general/top-stars/005_crabin-paper-humanizer-skill` | Full clone (51K). |
| 6 | [Pythonation/AI-Text-Humanizer-Protocol](https://github.com/Pythonation/AI-Text-Humanizer-Protocol) | 83 | 2026-05-18 | Arabic-language advanced system prompt for detecting/removing machine-writing patterns and converting AI text to natural human Arabic. | `general/top-stars/006_Pythonation-AI-Text-Humanizer-Protocol` | **Generic agent-prompt repo, not SKILL.md format** — entire "skill" is the README-embedded system prompt. Included per spec's "generic agent prompt/instruction repos" scope; only Arabic-language humanizer found. |
| 7 | [marmbiz/humanizer-de](https://github.com/marmbiz/humanizer-de) | 77 | 2026-08-02 | German AI Text Humanizer for Claude Code & Codex — audits 72 German AI-writing patterns via deterministic linters + evidence-safe rewrites. | `general/top-stars/007_marmbiz-humanizer-de` | Sparse: README, LICENSE, NOTICE, SKILL.md, `skills/humanizer-de/`, `references/*`, one asset (checklist). Skipped the very large `tests/` corpus (27 scenario YAMLs + JSON fixtures) — evaluation harness, not skill content. |
| 8 | [asavvin-pixel/unslop](https://github.com/asavvin-pixel/unslop) | 50 | 2026-07-14 | English text humanizer for Claude: typography, vocabulary, structure; calibrates to user voice. Built on UMD/DeepMind study + Wikipedia's Signs of AI writing. | `general/top-stars/008_asavvin-pixel-unslop` | Full clone. |
| 9 | [humanizerai/agent-skills](https://github.com/humanizerai/agent-skills) | 38 | 2026-02-05 | HumanizerAI Agent Skills for Claude Code and Codex — AI detection and text humanization. | `general/top-stars/009_humanizerai-agent-skills` | Multi-agent bundle: `.claude/.codex/.cursor/.gemini/.opencode/.agent/.agents` all mirror `skills/{humanize,detect-ai,cold-email,follow-up,readability,word-stats}/SKILL.md` — good example of a cross-tool skill-distribution pattern. |
| 10 | [numen-tech/slopornot](https://github.com/numen-tech/slopornot) | 37 | 2026-07-02 | Agentic AI Humanizer Skill for Codex, Claude and OpenClaw: bypass AI detectors. | `general/top-stars/010_numen-tech-slopornot` | Sparse-checked-out top-level `skills/` only (repo duplicates the same skill three times under `plugins/claude/`, `plugins/codex/`, and `skills/` for distribution — kept one copy). Multilingual `ai-tells` reference set (da/de/es/it/no/sv). |

### general/noname (10) — <50★ (mostly ≤8★), pushed within ~90 days

| # | Repo | ★ | Updated (pushedAt) | Description | Local path | Notes |
|---|------|---|---------------------|--------------|------------|-------|
| 1 | [timolabs-ai/claude-humanize-skill](https://github.com/timolabs-ai/claude-humanize-skill) | 8 | 2026-06-01 | Claude Code skill (`/humanize`) — strips AI writing patterns via five editorial layers: vocabulary, sentence shape, bullet rhythm, paragraph structure, section narration. | `general/noname/001_timolabs-ai-claude-humanize-skill` | Small, clean single-skill repo. |
| 2 | [TwilightXQY/humanizer-zh-codex](https://github.com/TwilightXQY/humanizer-zh-codex) | 5 | 2026-06-10 | Humanizer skill for Codex, Chinese version. | `general/noname/002_TwilightXQY-humanizer-zh-codex` | Includes `agents/openai.yaml` adapter. |
| 3 | [fendouai/humanize-skill](https://github.com/fendouai/humanize-skill) | 3 | 2026-07-24 | Lightweight open-source skill for improving AI-looking drafts — less hype, more real voice, factual claims grounded in evidence. | `general/noname/003_fendouai-humanize-skill` | Rich `docs/` + 8 worked `examples/*` (draft→evidence→final). Stripped `assets/` (3 decorative PNGs, ~5.4MB, not skill content). |
| 4 | [EspritBoheme/humanize-skills](https://github.com/EspritBoheme/humanize-skills) | 2 | 2026-05-19 | 文章降低ai率的skills — lowering AI-detection-rate skill for articles (Chinese). | `general/noname/004_EspritBoheme-humanize-skills` | Minimal: SKILL.md + EXAMPLES.md + REFERENCE.md. |
| 5 | [ywy5734/paper-humanizer-skill](https://github.com/ywy5734/paper-humanizer-skill) | 2 | 2026-06-23 | 通用论文去 AI 味与学术改写 — general academic-paper de-AI-ing/rewriting skill (Chinese, cross-discipline). | `general/noname/005_ywy5734-paper-humanizer-skill` | `academic-humanizer/SKILL.md` + OpenAI adapter. |
| 6 | [Ecow0ker/econ-humanizer-skills](https://github.com/Ecow0ker/econ-humanizer-skills) | 2 | 2026-07-19 | 经济学论文去AI味与学术润色Skill — economics-paper-specific humanizer/polish skill. | `general/noname/006_Ecow0ker-econ-humanizer-skills` | Domain-specialized (econ style EN/ZH refs, reference-paper mode, extraction script). |
| 7 | [woai3c/humanize-skill](https://github.com/woai3c/humanize-skill) | 1 | 2026-07-23 | 消除 AI 文风，让 AI 说人话 — eliminate AI writing style, make AI "talk human". | `general/noname/007_woai3c-humanize-skill` | Includes `scripts/detect.js` + `rules.json` — programmatic detector alongside the skill. |
| 8 | [ameenmo/humanize-skill](https://github.com/ameenmo/humanize-skill) | 0 | 2026-08-01 | Agent Skill that strips AI-slop from a draft and rewrites it to read like a human wrote it. Works with Claude Code, Cursor, Codex, or any agent. | `general/noname/008_ameenmo-humanize-skill` | Freshest repo in the harvest (pushed the day before this harvest date). Includes Ogilvy-method reference + example style file. |
| 9 | [masterball-w/Master-humanizer-skill](https://github.com/masterball-w/Master-humanizer-skill) | 8 | 2026-07-31 | 一个自己总结的去AI味的skill，主要用来写公众号文章 — self-compiled de-AI-flavor skill, mainly for WeChat public-account articles (Chinese). | `general/noname/009_masterball-w-Master-humanizer-skill` | Unusually structured as 7 numbered sub-docs (principles/vocabulary/sentence-patterns/case-writing/execution-flow/evaluation/chengyu-reference) instead of one SKILL.md body. |
| 10 | [MrBridgeHQ/human-writer-en](https://github.com/MrBridgeHQ/human-writer-en) | 2 | 2026-07-28 | Human Writer (English) — AI-text humanizer & 0-100 detector (Claude Code skill), part of the mr-bridge.com toolkit. | `general/noname/010_MrBridgeHQ-human-writer-en` | Well-developed: register-specific adapters (editorial-seo/marketing/short-comms/technical), `scripts/analyze.py` + `rules.yaml` scorer, human/AI test fixtures. |

**General repos evaluated but skipped:** `WhimseyAI/humanizer-skill` (6★, pushed 2026-03-22, stale) and `scotchline/swiss-humanizer-skill` (2★, pushed 2026-03-27, stale) — real SKILL.md repos, excluded from noname only for being outside the ~90-day freshness window. `OthmanAdi/humanizer-semitic` (4★, pushed 2026-04-09, ~116d stale) — Arabic (MSA/Egyptian/Levantine) + Hebrew humanizer, 4 separate SKILL.md files — excluded from noname for staleness despite unique language coverage; worth a manual look if freshness isn't a hard requirement. Pure web-app / SaaS "AI text humanizer" products with no agent-skill file (`anasu1/text-humanizer` 684★, `DadaNanjesha/AI-Text-Humanizer-App` 413★, `rudra496/StealthHumanizer` 82★) were excluded entirely as out of scope (no SKILL.md/Cursor-rules/agent-prompt format — confirmed via `gh api .../git/trees/HEAD`, README-only repos). `xszcs546/ai-text-humanizer` (10★) excluded — it's an image-only comparison/awesome-list of commercial tools, not a skill.

---

## Method notes / rate limits

- No GitHub API rate-limit issues encountered during this harvest (all `gh search repos` and `gh api .../git/trees/HEAD?recursive=1` calls succeeded; two transient `git clone` TCP connection failures were retried successfully).
- Every repo listed above was tree-inspected via `gh api repos/<owner>/<repo>/git/trees/HEAD?recursive=1` *before* cloning to confirm it actually ships an agent-skill file (`SKILL.md`, `.cursor/skills/*/SKILL.md`, or — for the one exception noted — a plain agent-prompt README) rather than being a generic SaaS/web-app humanizer with no agent format.
- Download strategy: plain `git clone --depth 1` + `.git` strip for small repos; `git clone --depth 1 --filter=blob:none --no-checkout` + `git sparse-checkout set --no-cone <paths>` for repos with heavy non-skill payloads (eval corpora, docs sites, node_modules-style build dirs, decorative PNG assets, redundant packaged `.skill` zip bundles). Stripped paths are called out per-row above.
- No fabricated data: all star counts and `pushedAt` timestamps are as returned by `gh search repos --json fullName,stargazersCount,updatedAt,description,pushedAt` at harvest time (2026-08-03); "noname" freshness bucket target was pushedAt within ~90 days of that date, with a few explicitly-noted near-miss exceptions kept because the real RU-humanizer universe is small.
