**Русский** · [English](README.en.md)

# konseputo

Мой скилл-сьют для Claude Code против оверинжиниринга: 22 скилла на бэкенд
(микросервисы на Go, Python — там, где он реально оправдан), фронтенд
(Vue 3 / Nuxt 4), ревью диффов, технический долг, очеловеченный текст,
документацию, управление проектом, легаси-код, AI/RAG-инфраструктуру,
безопасность, devops, мобильную разработку, брейнштормы, систематический
дебаг и аудит зависимостей. Не фреймворк — лестница против спекулятивной
сложности: неотменяемый бейзлайн первого дня, маркеры-потолки `konseputo:`
вместо кода "на будущее", ревью диффа в одну строку. Нативен для Claude
Code, через инсталлер переносится в Cursor, Codex и Antigravity CLI.

## Установка

Основной способ зависит от инструмента: у Claude Code и Antigravity — их
плагин-система, у Cursor и Codex — `npx skills` (открытый установщик
агентских скиллов vercel-labs/skills).

| CLI | Установка (основной способ) | Подробности |
|---|---|---|
| Claude Code | плагин: `/plugin marketplace add lowcoware/konseputo`, затем `/plugin install konseputo@konseputo` (даёт hooks, statusline, режимы) | `INSTALL.md` |
| Cursor | `npx skills add lowcoware/konseputo -a cursor` | `INSTALL.md` |
| Codex | `npx skills add lowcoware/konseputo -a codex` | `INSTALL.md` |
| Antigravity | плагин: `agy plugin install lowcoware/konseputo` | `INSTALL.md` |

`npx skills` работает и для Claude Code / Antigravity, но кладёт голый
уровень скиллов без плагин-обвязки. Альтернатива без npx — репозиторный
установщик, `node scripts/install.js --help`.

Hooks, statusline-бейдж и команды активации `/konseputo-*` — только для Claude
Code: остальные три CLI (и голая копия) подхватывают то же содержимое
скиллов по description. Что именно переносится на каждый таргет, а что
нет — в `INSTALL.md`.

## Быстрый старт (Claude Code)

1. `/plugin marketplace add lowcoware/konseputo`, затем `/plugin install konseputo@konseputo`.
2. Перезапустите сессию.
3. `/konseputo-help`.

## Скиллы

Все 22 скилла и как их позвать. Команды `/konseputo-*` — это Claude Code; на
других CLI те же скиллы подхватываются по description. Живая справка одним
экраном — `/konseputo-help`.

| Скилл | Команда | Для чего |
|---|---|---|
| konseputo | `/konseputo` | Универсальный роутер: опиши ситуацию — подскажет, какой konseputo-скилл подключить, разведёт пересекающиеся пары |
| konseputo-backend | `/konseputo-backend [mode]` | Бэкенды микросервисов с нуля, Go-first: лестница, бейзлайн первого дня, маркеры-потолки |
| konseputo-frontend | `/konseputo-frontend [mode]` | Vue 3 / Nuxt 4 / Tailwind v4: разделение регистров, баны AI-tells, канон GSAP/Lenis, протокол DESIGN.md |
| konseputo-review | `/konseputo-review` | Ревью диффа: оверинжиниринг, бейзлайн, seams, AI-типичные баги, гниль архитектуры, AI-tells — одна строка на находку |
| konseputo-debt | `/konseputo-debt` | Собирает маркеры `konseputo:` в реестр, помечает гниль |
| konseputo-humanizer | `/konseputo-humanize` | Пишет и переписывает текст в откалиброванном голосе пользователя, вычищает письменные AI-tells (и автоматом при генерации доков) |
| konseputo-md-generator | `/konseputo-md` | Оформляет доки под Obsidian Flavored Markdown — properties, wikilinks, callouts, без плагинов |
| konseputo-artifact | `/konseputo-artifact` | Генератор самодостаточных HTML-артефактов: отчёт/план/диаграмма одним файлом, обязательный dark mode |
| konseputo-wiki | `/konseputo-wiki` | Ведёт вики проекта в Obsidian: структура, MOC, здоровье вольта, Canvas-диаграммы, Bases-вьюхи, CLI |
| konseputo-project-management | `/konseputo-pm` | Spec-driven workflow, жизненный цикл ADR, масштабирование ревью, механические плейбуки |
| konseputo-legacy | `/konseputo-legacy` | Существующий/незнакомый код: characterization-тесты, seams, blast-radius, Strangler Fig, read-before-write для агента |
| konseputo-ai | `/konseputo-ai` | RAG/эмбеддинги/Qdrant, LLM gateway, дизайн и безопасность MCP, конвенции сабагентов Claude Code |
| konseputo-security | `/konseputo-security` | JWT/HMAC-аутентификация, секреты, IDOR/authz, многослойный rate limiting, CORS, hardening edge на Traefik |
| konseputo-devops | `/konseputo-devops` | Compose по окружениям, multi-stage Dockerfile, GH Actions (ловушка pull_request_target), Traefik ACME/TLS, blue-green на одном VPS |
| konseputo-mobile | `/konseputo-mobile` | Flutter/React Native/нативка: выбор платформы, мобильный бейзлайн первого дня, каталог dispose/leak, секреты в бинаре |
| konseputo-brainstorm | `/konseputo-brainstorm` | Трудно-обратимое решение: 3 реальных подхода, оценка по названным ограничениям, рекомендация + trip-wire → ADR |
| konseputo-systematic-debug | `/konseputo-debug` | Охота на баг по дисциплине: воспроизвести → bisect → лог гипотез → минимальный фикс → регрессионный тест |
| konseputo-dependency-audit | `/konseputo-audit` | Проверка зависимости на CVE/тайпсквоттинг/protestware/install-hooks; дисциплина lockfile+pin |
| konseputo-shrink | `/konseputo-shrink` | Аудит оверинжиниринга по всему репо (не дифф): что удалить/заменить stdlib'ом, ранжировано по размеру выигрыша |
| konseputo-clone | `/konseputo-clone` | Клонирование сайта как дисциплина: recon-first, грейды сложности L1-L6, Playwright-скрипты harvest/mirror/diff, fidelity-аудит |
| konseputo-goal | `/konseputo-goal` | Движок исполнения: после PM-фазы гонит план по фазам под одним `/goal` — verify, 3-strike recovery, финальный аудит против плана |
| konseputo-help | `/konseputo-help` | Справка одним экраном: скиллы, режимы, конфиг |

## Режимы

Режим (`blitz|medium|hardcore`) — это переключатель скорости и строгости,
он есть только у backend и frontend. Остальные скиллы из таблицы выше
просто запускаются своей командой, без режима. blitz — быстро и по делу;
medium — полный набор правил (по умолчанию); hardcore — сначала
архитектура: границы, контракты, режимы отказа каждого seam до кода.

Включить: `/konseputo-backend [blitz|medium|hardcore]`, `/konseputo-frontend [blitz|medium|hardcore]`.
Выключить: `stop konseputo` (или `normal mode`). Конфиг —
`~/.config/konseputo/config.json` (`defaultMode`, `docstringLang`,
`coverageTarget`); полная справка — `/konseputo-help`.

## Использование в разных CLI

Как позвать скиллы, зависит от инструмента: в Claude Code (плагин) —
слэш-команды `/konseputo-*` плюс режимы, hooks и statusline; в Cursor / Codex /
Antigravity и в голой копии Claude Code те же скиллы подключаются по
description, а режим называешь словами в промпте. Полный гайд по каждому
инструменту — `USAGE.md`, установка по каждому — `INSTALL.md`.

| CLI | Как звать | Команды / режимы |
|---|---|---|
| Claude Code (плагин) | `/konseputo-*` или описанием задачи | команды, режимы, hooks, statusline |
| Claude Code (копия) | описанием задачи | нет — режим словами |
| Cursor | описанием задачи | нет — режим словами |
| Codex | описанием задачи (+ `AGENTS.md`) | нет — режим словами |
| Antigravity | описанием задачи (+ rules) | нет — режим словами |

## Линтеры

`node scripts/check-skills.js && node scripts/check-sync.js && node scripts/konseputo-debt.js`
— схема frontmatter, лимиты размера, целостность кросс-ссылок и дрейф
компактных наборов правил. Те же три проверки гейтят CI
(`.github/workflows/lint.yml`) на каждый push и PR.

## Скиллы-компаньоны

konseputo отвечает за инженерию под анти-оверинжиниринг. Рядом стоит поставить
вот это — каждое владеет тем, что konseputo намеренно не дублирует:

- **caveman** — [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman).
  Режим сжатого общения: агент роняет воду и отвечает плотно, код, команды и
  ошибки остаются байт-в-байт. konseputo берёт из него стиль сжатия мышления, но
  сам режим общения живёт в caveman — ставь для экономии токенов на каждом
  ответе.
- **claude-bughunter** — [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter).
  Наступательная безопасность: bug bounty и внешний ред-тим, 48 hunt-скиллов
  по разобранным disclosed-репортам плюс матрицы атак на M365/Okta/vCenter.
  konseputo-security и konseputo-dependency-audit закрывают ЗАЩИТНУЮ, build-time
  сторону; bughunter — наступательную. Ставь, когда работа — авторизованный
  пентест или bug bounty, а не разработка.
- **agent-reach** — [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach).
  Доступ агента в интернет: роутер на 15 платформ (Twitter, Reddit, YouTube,
  小红书, B站, LinkedIn и др.), мультибэкенд, cookie-based доступ, транскрипция
  видео. konseputo — про инженерию кода, не про сбор контента из сети; ставь, когда
  агенту нужно исследовать/читать интернет, а не писать код.
- **i-have-adhd** — [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd).
  Формат вывода под ADHD-читателя: действие первой строкой, нумерованные шаги,
  состояние проговаривается каждый ход, конкретные time-estimate, бан преамбул
  и «Hope this helps». Тот же класс, что caveman — накладка на стиль ответа, не
  инженерия; konseputo утащил из него debug-spiral триггер (konseputo-systematic-debug) и
  pre-send checklist (shared/communication.md), но сам режим целиком — сюда.
- **obsidian-mind** — [breferrari/obsidian-mind](https://github.com/breferrari/obsidian-mind).
  Целый Obsidian-волт как долговременная память агента: lifecycle-хуки
  (инжект контекста на SessionStart, классификация каждого сообщения, валидация
  frontmatter/wikilink в момент записи), девять сабагентов под тяжёлые операции
  с волтом и graph-first дисциплина заметок. Внутри вендорится
  [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills)
  (obsidian-markdown, obsidian-bases, json-canvas, obsidian-cli, defuddle) плюс
  свои mermaid/excalidraw/qmd; ставится через
  [shardmind](https://github.com/breferrari/shardmind). konseputo-wiki и
  konseputo-md-generator владеют дисциплиной проектной вики и Obsidian-ФОРМАТОМ
  генерируемых доков; obsidian-mind владеет СИСТЕМОЙ личного волта вокруг них —
  ставь, когда волт это память, а не просто формат вывода.

## Ещё

- Как пользоваться в Claude Code / Cursor / Codex / Antigravity — `USAGE.md`
- Установка по каждому CLI — `INSTALL.md`
- Как добавить скилл или прислать фикс — `CONTRIBUTING.md`
- Как сообщить об уязвимости — `SECURITY.md`
- История изменений — `CHANGELOG.md`

## Lineage

Таблица атрибуции источников — юридический документ, строки ниже
воспроизведены без изменений.

| Source | Taken |
|---|---|
| ponytail | anti-overengineering ladder, ceiling-marker debt convention, one-line review format, never-block hook pattern |
| taste-skill | AI-tells catalog, GSAP/ScrollTrigger/Lenis motion canon, mechanical preflight |
| kepano/obsidian-skills (MIT, Steph Ango) | konseputo-wiki's Canvas + Bases + CLI vault-operation references |
| tpitsunov/obsidian-skills (MIT) | konseputo-wiki's vault-health scripts (orphan/broken-link/stats/ToC), MOC builder, capture/glossary/tagging/atomization workflows |
| adriangrant/Obsidian-SKILLS (MIT) | konseputo-wiki's CLI environment footguns (Linux sandbox, Snap) |
| ayghri/i-have-adhd (MIT) | konseputo-systematic-debug's debug-spiral trigger, shared/communication.md's pre-send checklist |
| plannotator/effective-html (MIT) | konseputo-artifact genre split (general/plan/diagram), dark-mode pattern, SVG pan/zoom technique |
| Anthropic html-effectiveness sample gallery (Apache-2.0) | konseputo-artifact's vendored 21-file example gallery (`examples/`) + the shared token/component palette extracted from it (`palette.md`) |
| impeccable | brand/product register split, 8-state components, harden checklist |
| humanizer | konseputo-humanizer skill — 3-layer AI-tell model, forked and recalibrated to one specific user voice |
| caveman (installed plugin) | thinking-compression style, manifest/hooks wiring ground truth |
| awesome-design-md | per-project DESIGN.md protocol, Linear dark surface-ladder reference |
| designer-skills | terse-checklist file format |
| kepano/obsidian-skills (MIT, Steph Ango) | konseputo-md-generator's core Obsidian syntax reference (wikilinks, properties, callouts, embeds) |
| React Native docs (MIT) / Expo docs (MIT) / pmndrs/zustand (MIT) | konseputo-mobile `react-native.md` — New Arch mandate, FlatList perf rules, Expo Router default, listener-leak pattern |
| Flutter docs (CC BY 4.0) / riverpod.dev (underlying repo MIT) / Android Developers docs (Apache-2.0) | konseputo-mobile `flutter.md` + `native.md` — Riverpod/const-rebuild, context.mounted bug, dispose discipline, Compose/StateFlow |
| dart.dev linter-rules (CC BY 4.0 docs) / Solido/awesome-flutter (CC0-1.0) | konseputo-mobile `flutter.md` — `use_build_context_synchronously` linter citation, curated Flutter package/pattern reference |
| PatrickJS/awesome-cursorrules (CC0) / HackTricks (CC BY-NC 4.0) | konseputo-mobile cross-cutting — cursor-rule mobile patterns, WebView/deep-link attack surface (patterns re-expressed, no verbatim) |
| open-source skill corpus (anthropics/skills — mixed: Apache-2.0 skills + source-available components, mechanisms re-expressed, no files copied; obra/superpowers, wshobson/agents — MIT) | mechanisms harvested, not files copied: RED-phase test authoring, redacted-handoff adversarial review, numeric escalation gates, structured find→verify review shape; second pass: form-to-failure authoring rule, claim→evidence table, 3-failed-fixes→architecture gate, durable orchestration (state-on-disk, status vocabulary, batch dispatch), spec self-review + pre-mortem, YAGNI-pushback, PG identity/NOT VALID/FK-index rules, GH Actions script-injection env-indirection, Reader Test, MCP annotation defaults + DNS-rebinding |
| davila7/claude-code-templates (MIT) | hook-enforced read-only auditor pattern, dated-refreshable threat-intel convention, GH Actions env-indirection corroboration |
| addyosmani/agent-skills (MIT) | perf metric-honesty rule (static = "potential", measured = cited), font/INP/bfcache perf-catalog entries |
| agentskills/agentskills spec (CC BY 4.0) | normative frontmatter schema behind scripts/check-skills.js (name/dir match, 64/1024 caps, allowed keys) |
| ibelick/ui-skills (ui-skills.com) | motion-performance ladder re-expressed: blur ≤8px one-shot, ≤200ms interaction feedback, no scroll polling, standing-will-change ban, paste-block ban |
| mattpocock/skills (MIT) | seam-counting + deletion test, 3-condition lean ADRs, tight-loop debug gate + DEBUG-tag, standards-vs-spec review axes, throwaway-prototype settle, grounding ledger + format arguments, opposing-constraint divergence, fog-vs-ticket, GLOSSARY authoring axioms (no-op test, completion criteria, leading words, load accounting) |
| deep second pass (anthropics eval harness, obra tests/, wshobson plugin-eval + SLO skill, davila7 hooks) | shared/evals.md protocol (paired evals, trigger holdout, pressure tests), interview mechanics (confidence opener, want-vs-should-want, stop test), SLO burn-rate alerting (14.4x/6x), WCAG 2.2 target size, interpreter-unwrap hook bypass class, TG token regex + callback_data 64B, hook-as-gate examples |
| SPEC-14 research corpus — 66 verified sources | citations folded into the ladder, baseline, and stack refs |
| alibaba/open-code-review (Apache-2.0) | konseputo-review's ai-bug-patterns-be.md Python general-correctness section (mutable defaults, bare except, is-vs-==, lazy logging, eval/pickle/yaml.load) |
| openai/skills (Apache-2.0) | konseputo-backend's security-checklist.md (Go net/http + FastAPI hardening rules), konseputo-ai's mcp-server.md pagination/response-format conventions |
| trailofbits/skills (CC BY-SA 4.0, mechanisms re-expressed, no text copied) | konseputo-review's api-misuse-resistance.md (sharp-edges pit-of-success doctrine) + differential-review adaptive-depth framing in SKILL.md, konseputo-backend's testing.md property catalog + deps.md modern-python tooling table, konseputo-dependency-audit's supply-chain.md dependency-health-risk section |
| qdrant/skills (Apache-2.0) | konseputo-ai's qdrant.md multitenancy + memory-optimization + embedding-model-migration sections |
| redis/agent-skills (MIT, Redis Inc.) | konseputo-backend's new stores-redis.md |
| s3onghyun/otelcol-doctor (Apache-2.0) | konseputo-backend's new otel-collector.md |
| zuoyebang/aiweave (Apache-2.0) | konseputo-backend's hardening-go.md worker-pool-sizing section (Little's Law, pool invariants) |
| phuryn/pm-skills (MIT) | konseputo-review's boundary-crossing-mismatch filter in the Intent reconstruction section |
| yetone/kill-ai-slop (Apache-2.0) | konseputo-frontend's preflight.mjs scanner + rules.ru.mjs (RU slop lexicon) + scanner tests, ai-tells bans 30-35, motion transition-all/hover-scale bans, tokens spacing-by-relationship, typography display rule, ai-bug-patterns-fe corner-geometry entries, FP table + `konseputo-ok` escape hatch, redesign de-slop ordering |
| emilkowalski/skills (MIT) | konseputo-frontend's motion-craft.md (4-question gate, easing/duration/spring catalog, gesture formulas, review protocol), motion tag expansion, settled-decisions principle, data-not-instructions convention (konseputo-review/konseputo-shrink/konseputo-legacy), motion glossary in vocabulary.md, Sonner toast principles in components.md, tracking-by-size in typography.md, write-executor-plan + reconcile-plans playbooks in konseputo-pm |
| nexu-io/open-design (Apache-2.0) | konseputo-frontend's template-catalog.md (115 shapes) + brand-systems-catalog.md (153 brand packages), vendored in full under design-templates/ + design-systems/, ux-laws.md (29 laws) + rtl-i18n-ui.md (21 rules), gsap-api.md (385-line API reference), interface-audit.md (48 Vercel WIG rules), design-contract.md, forms/components/tokens/typography/motion-craft deltas incl. WCAG large-text threshold fix, konseputo-clone (18th skill: recon-first, L1-L6 grades, 12 Playwright scripts, ethics boundaries), export bugs in ai-bug-patterns-fe, humanizer lint mode, prompt-templates pointer, resolve-pr-feedback + research-synthesis PM playbooks |
| robzilla1738/supergoal (MIT) | konseputo-goal (19th skill) — autonomous execution engine: SKILL.md router, workflow.md (stages 0-7), execution.md (loop/audit/recovery), planning-depth/phase-design/goal-format/repo-state-comparison, 4 templates, 6 scripts; renamed SUPERGOAL_→KONSEPUTOGOAL_, /supergoal→/konseputo-goal |

## Лицензия

MIT — см. `LICENSE`. `LICENSE` также перечисляет сторонние источники из
таблицы Lineage выше, по классам лицензий.
