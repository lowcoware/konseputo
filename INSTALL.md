**Русский** · [English](INSTALL.en.md)

# Установка — konseputo на разных CLI

Сьют написан в нативном формате `SKILL.md` + `references/*.md` —
agentskills.io. Этот формат все четыре CLI ниже понимают **нативно**, так
что установка — это раскладка файлов, а не конвертация: и `npx skills`,
и репозиторный `scripts/install.js` просто копируют `skills/*/` (роутер +
references) в директорию расширений нужного CLI, ничего не переписывается
и не адаптируется под другой формат.

Основной способ зависит от инструмента: у **Claude Code** и **Antigravity**
— их собственная плагин-система (плагин Claude Code через маркетплейс и
плагин-бандл Antigravity, разделы ниже), у **Cursor**, **Codex** и
**OpenCode** — `npx skills`. Для OpenCode есть и третий путь, часто самый
короткий: если сьют уже стоит для Claude Code или Codex/Antigravity в этом
же проекте или в домашней директории — OpenCode читает `.claude/skills/` и
`.agents/skills/` нативно на обоих scope и **уже видит его без единого
доп. шага** (раздел OpenCode ниже).

## Установка через npx skills (основной способ для Cursor и Codex)

Для Claude Code и Antigravity плагин-система даёт нативную установку, а у
Claude Code ещё hooks, statusline и режимы; `npx skills` для них тоже
работает, но кладёт голый уровень скиллов без плагин-обвязки.

`npx skills` — открытый установщик агентских скиллов (vercel-labs/skills):
берёт скиллы из GitHub-репо и кладёт в директорию нужного инструмента.
GitHub тут вместо npm-реестра. Сьют уже в нативном формате agentskills.io,
поэтому ставится как есть — манифест не нужен, все 22 скилла
подхватываются автоматически (проверено 2026-07-04:
`npx skills add lowcoware/konseputo --list` находит все 16).

Одна команда на инструмент:

```
npx skills add lowcoware/konseputo -a claude-code    # Claude Code
npx skills add lowcoware/konseputo -a cursor         # Cursor
npx skills add lowcoware/konseputo -a codex          # Codex
npx skills add lowcoware/konseputo -a antigravity    # Antigravity
npx skills add lowcoware/konseputo -a opencode       # OpenCode
```

Сразу во все — перечислите таргеты: `-a claude-code -a cursor -a codex
-a antigravity -a opencode` (или `--all` — все скиллы во все обнаруженные
агенты). По
умолчанию ставит в проект; `-g` — в пользовательскую директорию, глобально
для всех проектов. Ещё полезное: `-y` — без вопросов (для CI), `--list` —
показать скиллы и ничего не ставить, `-s <skill>` — только конкретные
(например `-s konseputo-backend -s konseputo-frontend`).

Куда кладёт: `claude-code` → `.claude/skills/`, `cursor` / `codex` /
`opencode` → `.agents/skills/` на project scope (Cursor и OpenCode читают
и `.claude/skills/`, и `.agents/skills/` нативно — своих отдельных копий
не создают). На user/global scope у `opencode` свой путь:
`~/.config/opencode/skills/` — см. раздел OpenCode. Пути Antigravity
уточняйте на месте — интерфейс молодой и уже переезжал (см. раздел
Antigravity ниже).

Один момент про уровень: `npx skills` ставит контент скиллов (SKILL.md +
`references/` каждого) — тот же голый уровень, что и копия через
`scripts/install.js`. Hooks, бейдж statusline, стейтфул-режим и команды
`/konseputo-*` он не переносит; их даёт только нативный плагин Claude Code
(раздел ниже). Файлы `shared/*.md` установщик скиллов тоже не кладёт — на
них завязаны кросс-ссылки между скиллами, подробнее в разделе "Общие файлы
и кросс-ссылки".

## Установщик репозитория (альтернатива)

Нужен офлайн-режим без npx, точный план копирования заранее (dry-run) или
симметричное удаление `--uninstall` — в репозитории есть свой установщик.
Полный список опций — `node scripts/install.js --help`. Коротко:

```
node scripts/install.js --target=claude|cursor|codex|antigravity|opencode \
  [--scope=project|user] [--project-dir=PATH] [--apply] [--uninstall]
```

По умолчанию (без `--apply`) — **dry-run**: печатает точный план
копирования (источник -> назначение, по одной строке на файл) и ничего не
пишет на диск. Добавьте `--apply`, чтобы выполнить. Он идемпотентен —
повторный `--apply` перезаписывает папки сьюта на месте — и никогда не
трогает соседние файлы или другие скиллы/плагины, уже лежащие в той же
директории. `--uninstall` (вместе с `--apply`) убирает ровно то, что
создал соответствующий install.

Форматы по каждому таргету ниже проверены **2026-07-04** по документации
самих вендоров. Эти интерфейсы
меняются быстро и уже выходят за горизонт знаний сьюта — перед установкой
на заметно более новом релизе CLI перепроверьте источник по ссылке.

## Обновление

**Проверено:** 2026-07-18. Источник: `code.claude.com/docs/en/plugin-marketplaces`,
README `vercel-labs/skills`.

Сначала важное: история этого репозитория — намеренно **один коммит,
force-push при каждом релизе**. Обычный `git pull` в клоне упадёт с
non-fast-forward. Клон обновляется так:

```
git fetch origin && git reset --hard origin/main
```

По каждому способу установки:

**Нативный плагин Claude Code (marketplace):**

```
/plugin marketplace update konseputo
/plugin update konseputo@konseputo
```

Перезапустите сессию, проверьте через `/konseputo-help`. Детали:

- Marketplace добавлен из **GitHub**: refresh делает pull репозитория;
  из-за force-push истории pull падает non-fast-forward, и Claude Code
  откатывается на повторное клонирование с нуля — это ожидаемо и нормально,
  ручные команды выше работают надёжно.
- Marketplace добавлен из **локального пути** (команды установки в секции
  Claude Code используют именно его): сначала обновите локальный клон
  (`git fetch` + `reset --hard` выше), потом две команды `/plugin`.
- Детекция обновления завязана на `version` в `.claude-plugin/plugin.json` —
  если версия у вас совпадает с новой, `/plugin update` **пропустит плагин,
  даже когда содержимое файлов поменялось**. Релизы сьюта поднимают эту
  версию; если обновление «залипло», проверьте, изменилась ли версия
  upstream, а как крайняя мера — `/plugin uninstall konseputo@konseputo` +
  `/plugin install konseputo@konseputo`.

**Через `npx skills`:**

```
npx skills update        # обновить все установленные скиллы (интерактивный выбор scope)
npx skills update -y     # без вопросов, scope определяется автоматически
npx skills update konseputo-backend konseputo-frontend   # только конкретные скиллы
```

Повторный `npx skills add lowcoware/konseputo -a <agent>` тоже
подтягивает свежее состояние.

**Установщик репозитория (`scripts/install.js`):** обновите клон и
перезапустите ту же команду установки — он идемпотентен, перезаписывает
папки сьюта на месте и не трогает соседей:

```
git fetch origin && git reset --hard origin/main
node scripts/install.js --target=<t> [--scope=user] --apply
```

**Ручное копирование:** повторите те же команды копирования из "Ручного
фолбэка" нужного таргета — та же семантика перезаписи на месте.

## Что не переносится ни на один таргет, кроме нативного плагина Claude Code

У сьюта два слоя: **контент** (роутеры + references — это ставится
везде) и **машинерия**, доступная только в плагине Claude Code: hooks
(флаг режима на `SessionStart`, инъекция ruleset на `UserPromptSubmit`,
распространение на `SubagentStart`), бейдж режима в statusline и
`/konseputo-backend [mode]` / `/konseputo-frontend [mode]` как *state-переключатель
режима*. Эта машинерия подключена через блок `hooks` в
`.claude-plugin/plugin.json` и грузится только когда сьют установлен как
**нативный плагин** (путь через маркетплейс) — при голой копии папок со
скиллами её нет ни в Claude Code, ни где-либо ещё.

А что работает везде, включая голую копию: роутер любого CLI сам
подключает скилл, сверяя ваш промпт с `description` из frontmatter (те
самые триггер-фразы из каждого SKILL.md). Флага режима
`blitz`/`medium`/`hardcore` вне плагина нет, но тот же эффект даёт просто
упоминание режима в промпте — например, "review this Go service in
hardcore mode" всё равно подтянет hardcore-гайдлайны `konseputo-backend`,
просто без трекинга в session state и без отметки в statusline.

## Claude Code

**Проверено:** 2026-07-04. Источник: `code.claude.com/docs/en/plugins-reference`,
`/plugin-marketplaces`, `/skills`.

**Требования:** установлен Claude Code CLI.

**Через `npx skills`:** `npx skills add lowcoware/konseputo -a claude-code` —
голый уровень (без hooks/statusline/режимов; за ними — нативный плагин ниже).

**Установка — нативный плагин (основной способ):**

```
/plugin marketplace add <path-to-this-repo>
/plugin install konseputo@konseputo
```

Только этот путь подключает hooks, бейдж statusline и переключатель
режима `/konseputo-backend [mode]` / `/konseputo-frontend [mode]`. Перезапустите
сессию, проверьте через `/konseputo-help`.

**Установка — через инсталлер (голая копия скиллов):**

```
node scripts/install.js --target=claude --apply
```

По умолчанию — project scope (`.claude/skills/` в текущей директории;
чтобы указать другой проект, передайте `--project-dir=PATH`). Добавьте
`--scope=user`, чтобы поставить в `~/.claude/skills/` — тогда доступно
всем проектам сразу, без диалога доверия на каждый из них.

**После рестарта ожидайте:** все 22 скилла в списке скиллов Claude Code
(project scope один раз покажет диалог доверия, user scope — нет); каждый
по-прежнему триггерится по своему description при совпадении промпта, так
же как и в варианте с плагином. Без hooks, без бейджа statusline, без
state-переключателя режима (см. выше).

**Ручной фолбэк** (нет Node, или просто хотите видеть команды):

```
robocopy skills <project>\.claude\skills /E
robocopy shared <project>\.claude\konseputo-shared /E
```

(POSIX-эквивалент: `cp -r skills/. <project>/.claude/skills/` и
`cp -r shared/. <project>/.claude/konseputo-shared/`.)

**Удаление:**

```
node scripts/install.js --target=claude --apply --uninstall
```

Нативный плагин: `/plugin uninstall konseputo@konseputo`. Вручную: удалите
`<project>\.claude\skills\konseputo-*` и `<project>\.claude\konseputo-shared\`.

## Cursor

**Проверено:** 2026-07-04. Источник: `cursor.com/docs/context/rules`,
`/context/skills`.

**Требования:** Cursor с включённым Agent Skills.

**Через `npx skills` (основной способ):** `npx skills add lowcoware/konseputo -a cursor`.

Cursor читает `.claude/skills/` **напрямую, нативно, ради
совместимости** — отдельной копии в `.cursor/skills/` нет и не нужно.
`--target=cursor` — это алиас: он проверяет/создаёт то же самое дерево
`.claude/skills/`, что и `--target=claude`.

**Установка — одна команда:**

```
node scripts/install.js --target=cursor --apply
```

(`--scope=user` — для `~/.claude/skills/`, глобально для всех ваших
проектов в Cursor.)

**Нативная альтернатива:** если хотите использовать собственную
директорию скиллов Cursor вместо общего пути `.claude/skills/`, вручную
направьте то же дерево источников в `.cursor/skills/` (проект) или
`~/.cursor/skills/` (пользователь) — отдельным таргетом инсталлер это не
предлагает, потому что это была бы просто вторая, избыточная копия
файлов, которые Cursor и так читает.

**После рестарта ожидайте:** те же 22 скилла, автоподключение по
description (тип правила Agent-Requested в Cursor) или явный вызов. Без
hooks, без statusline, без state режима — см. "Что не переносится" выше.

**Ручной фолбэк:** идентичен ручному фолбэку Claude Code выше — та же
директория назначения.

**Удаление:**

```
node scripts/install.js --target=cursor --apply --uninstall
```

## Codex CLI

**Проверено:** 2026-07-04 для базового механизма. Источник:
`developers.openai.com/codex/skills`, `/codex/guides/agents-md`,
`/codex/config-reference`, `github.com/openai/skills`. (Детали по
названиям полей в системе плагинов взяты из одного источника в ходе
research-прохода — подтверждёнными считайте только размещение в
`.agents/skills/` и лимиты frontmatter ниже.)

**Требования:** OpenAI Codex CLI с поддержкой скиллов.

**Через `npx skills` (основной способ):** `npx skills add lowcoware/konseputo -a codex`.

**Установка — одна команда:**

```
node scripts/install.js --target=codex --apply
```

Project scope ставит в `.agents/skills/<skill>/` в текущей директории
(Codex резолвит это от корня вашего репозитория); `--scope=user` ставит в
`~/.agents/skills/`.

Codex жёстко требует лимиты frontmatter, инсталлер проверяет их
**до** копирования чего-либо: `name` ≤ 64 символов, строчные буквы/цифры
с одиночными дефисами (без ведущего/хвостового дефиса) и равно имени
директории скилла; `description` ≤ 1024 символов. Нарушение репортится по
имени и валит запуск (exit code 2), а не обрезается молча — текущий
результат сьюта (чисто) смотрите в "Результатах проверки" ниже.

**После рестарта ожидайте:** все 22 скилла доступны в собственном
списке скиллов Codex, автоподключение по description. `AGENTS.md` —
отдельный, встроенный в ядро механизм инъекции контекста у Codex
(конкатенация root -> leaf, лимит по умолчанию 32 KiB) — инсталлер его не
генерирует; если хотите, чтобы гайдлайны сьюта форс-загружались, а не
роутились, добавьте свою строку-указатель в `AGENTS.md` проекта вручную.

**Ручной фолбэк:**

```
robocopy skills <project>\.agents\skills /E
robocopy shared <project>\.agents\konseputo-shared /E
```

**Удаление:**

```
node scripts/install.js --target=codex --apply --uninstall
```

## Antigravity

**Проверено:** 2026-07-04, но относитесь как к **молодому и
нестабильному** — путь скиллов у Antigravity уже переименовывали один раз
за время публичной жизни (`.agent/` -> `.agents/`), а текущие пути стоит
считать "вероятно-стабильными-не-замороженными". Прежде чем
полагаться на это для чего-то кроме текущего релиза, перепроверьте по
`antigravity.google/docs/skills` (а также `/docs/rules-workflows`,
`/docs/plugins`, `/docs/cli/gcli-migration`). `.agent/` (в единственном
числе) поддерживается как алиас для обратной совместимости, если найдёте
старую установку с ним.

**Требования:** Google Antigravity CLI.

**Установка — плагин Antigravity (основной способ):**

Antigravity CLI ставит плагины командой:

```
agy plugin install lowcoware/konseputo
```

Рядом: `agy plugin list` — показать установленные, `agy plugin enable konseputo`
/ `agy plugin disable konseputo` — включить/выключить без удаления,
`agy plugin uninstall konseputo` — удалить. Сьют собран как плагин-бандл
(`plugin.json` в корне + папка `skills/`, Antigravity читает
`skills/<name>/SKILL.md`), поэтому ставится как есть.

Если ваша сборка CLI хочет полный адрес — `agy plugin install
https://github.com/lowcoware/konseputo`. Ручной фолбэк без команды — положить
бандл в директорию плагинов, CLI подхватит его на старте:

- workspace: `.agents/plugins/konseputo/` в корне рабочего пространства;
- глобально: `~/.gemini/antigravity-cli/plugins/konseputo/` (в части сборок —
  `~/.gemini/config/plugins/konseputo/`).

```
git clone https://github.com/lowcoware/konseputo .agents/plugins/konseputo
```

Формат аргумента `agy plugin install` и точную директорию плагинов сверьте
с `antigravity.google/docs/cli/plugins` — интерфейс молодой (см.
предупреждение выше). Плагин Antigravity отдаёт те же 22 скилла; konseputo-хуки,
режимы и statusline — только у плагина Claude Code, отдельного
`hooks.json`/`rules` под Antigravity сьют не поставляет.

**Установка — скиллы без плагин-обёртки (альтернатива):**

`npx skills add lowcoware/konseputo -a antigravity`, либо
`node scripts/install.js --target=antigravity --apply`.

Project scope ставит в `.agents/skills/<skill>/` — **та же директория,
что Codex использует на project scope.** Если вы уже запускали
`--target=codex --apply` в этом проекте, эта установка уже покрывает и
Antigravity — инсталлер это обнаруживает и репортит, а не дублирует.
`--scope=user` ставит в `~/.gemini/config/skills/<skill>/` — это
специфично для Antigravity (с Codex не общее).

У Antigravity та же базовая спецификация скиллов, что у Codex, поэтому
инсталлер применяет ту же валидацию `name`/`description`, что описана в
разделе Codex выше.

**После рестарта ожидайте:** все 22 скилла доступны, автоподключение по
description. `.agents/rules/*.md` (workspace) / `~/.gemini/GEMINI.md`
(глобально) и `AGENTS.md` — отдельные пути инъекции правил у Antigravity
(лимит 12000 символов) — инсталлер их не генерирует.

**Ручной фолбэк:**

```
robocopy skills <project>\.agents\skills /E
robocopy shared <project>\.agents\konseputo-shared /E
```

(user scope: `%USERPROFILE%\.gemini\config\skills\` и
`%USERPROFILE%\.gemini\config\konseputo-shared\`.)

**Удаление:**

```
node scripts/install.js --target=antigravity --apply --uninstall
```

## OpenCode

**Проверено:** 2026-07-18. Источник: `opencode.ai/docs/skills`,
`/docs/plugins`, `/docs/config`; таргет `opencode` в `vercel-labs/skills`
(`github.com/vercel-labs/skills` README, таблица Supported Agents).

**Требования:** OpenCode CLI с включённым `skill`-тулом (по умолчанию
включён; можно ограничить через `permission.skill` в `opencode.json`).

**У OpenCode нет нативной команды `/plugin` и нет GUI/TUI-инсталлера** —
в отличие от Claude Code (`/plugin marketplace add` + `/plugin install`) и
Antigravity (`agy plugin install`). Официально поддерживаются только: npm-
пакет в массиве `plugin` внутри `opencode.json`, или файлы плагина в
`.opencode/plugins/` / `~/.config/opencode/plugins/` (авто-загрузка при
старте). Сторонние неофициальные тулы для маркетплейса скиллов
(`opencode-marketplace`, аналоги) существуют, но это community-обёртки, не
вендорская фича — в этот раздел не включаю, здесь только пути из
официальной документации OpenCode.

**Важное отличие от остальных четырёх таргетов:** OpenCode не роутит по
`description` на уровне промпта — у него отдельный тул `skill`. Агент
видит список доступных скиллов (имя + description) и сам решает вызвать
`skill({ name: "konseputo-frontend" })`, когда описание подходит к задаче.
Эффект тот же (скилл подключается по релевантности), механизм другой
(явный tool call, а не системная инъекция).

**OpenCode читает `.claude/skills/` и `.agents/skills/` нативно, на обоих
scope (project И user/global) — в дополнение к своим собственным
`.opencode/skills/` (project) и `~/.config/opencode/skills/` (global).**
Если сьют уже стоит для Claude Code (`.claude/skills/`) или для
Codex/Antigravity (`.agents/skills/`) в этом же проекте или в домашней
директории — OpenCode **уже видит все 22 скилла, без единого доп. шага.**
Ниже — путь для случая, когда OpenCode стоит сам по себе, без остальных.

**Через `npx skills` (основной способ для чистой OpenCode-установки):**
`npx skills add lowcoware/konseputo -a opencode`.

**Установка — одна команда:**

```
node scripts/install.js --target=opencode --apply
```

Project scope ставит в `.agents/skills/<skill>/` (та же директория, что
у Codex/Antigravity на project scope — если один из них уже стоит здесь,
инсталлер это обнаруживает и репортит, не дублирует). `--scope=user`
ставит в `~/.config/opencode/skills/<skill>/` — это специфично для
OpenCode, с Codex/Antigravity не общее.

Frontmatter-лимиты у OpenCode — та же спецификация, что у Codex/Antigravity:
`name` ≤ 64 символов, kebab-case, равно имени директории; `description`
≤ 1024 символов. Инсталлер валидирует тем же кодом, что для Codex — сьют
уже проходит чисто (см. "Результаты проверки" ниже).

**После рестарта ожидайте:** все 22 скилла доступны через тул `skill` —
`skill list` (или его эквивалент в используемом клиенте) покажет все
16 имён с description. Подключение — явным tool call от агента, не
автороутингом промпта (см. отличие выше). Без hooks, без statusline, без
state-переключателя режима — см. "Что не переносится" выше.

**Ручной фолбэк:**

```
robocopy skills <project>\.agents\skills /E
robocopy shared <project>\.agents\konseputo-shared /E
```

(user scope: `%USERPROFILE%\.config\opencode\skills` и
`%USERPROFILE%\.config\opencode\konseputo-shared`.)

**Удаление:**

```
node scripts/install.js --target=opencode --apply --uninstall
```

## Общие файлы и кросс-ссылки между скиллами

`shared/authoring.md`, `shared/communication.md`, `shared/evals.md` и
`shared/context7.md` копируются вместе со скиллами в папку `konseputo-shared/`
в корне каждого таргета (`.claude/konseputo-shared/`, `.agents/konseputo-shared/`,
`~/.gemini/config/konseputo-shared/`, `~/.config/opencode/konseputo-shared/` на
OpenCode user scope — на project scope OpenCode делит `.agents/konseputo-shared/`
с Codex/Antigravity). Некоторые скиллы ещё и ссылаются на
`references/*.md` *других* скиллов по относительному пути (например,
`konseputo-frontend` указывает на референс `konseputo-backend`). Инсталлер просто
раскладывает файлы, ссылки он не переписывает. Внутри нативного плагина
Claude Code эти ссылки резолвятся, потому что весь сьют ставится одним
деревом. Везде ещё — при голых копиях на любом таргете — глубокая
кросс-ссылка между скиллами может не найти файл на диске. Это осознанная
деградация, а не баг: ссылки — это указатели для человека или агента, куда
пойти за нужным гайдлайном, а не жёсткий импорт, от которого зависит
работа скилла. Строить движок, переписывающий ссылки, ради этого
обсуждали и отклонили — оверинжиниринг для документационной
кросс-ссылки.

## Результаты проверки (текущий сьют, проверено 2026-07-04)

Все 22 скилла проходят лимиты frontmatter для Codex/Antigravity/OpenCode
(общая спецификация, инсталлер валидирует одним кодом для всех трёх): у
каждого `name` ≤ 64 символов и точно совпадает с директорией; у каждого
`description` ≤ 1024 символов. Ноль нарушений —
валидатор инсталлера тут это defense-in-depth на случай, если будущий
скилл выйдет за лимит, а не фикс уже сломанного (`scripts/check-skills.js`
и так гейтит эти же два лимита по всему сьюту в CI).

## Матрица совместимости

| | Claude Code | Cursor | Codex | Antigravity | OpenCode |
|---|---|---|---|---|---|
| SKILL.md нативно | да (исходный формат) | да | да | да | да |
| Целевая директория этого инсталлера | `.claude/skills/` | `.claude/skills/` (алиас) | `.agents/skills/` | `.agents/skills/` (проект, = codex) / `~/.gemini/config/skills/` (пользователь) | `.agents/skills/` (проект, = codex) / `~/.config/opencode/skills/` (пользователь) |
| references/*.md как есть | да | да | да | да | да |
| Hooks / statusline / mode-flag `/konseputo-*` | только плагин | нет | нет | нет | нет |
| Подключение скилла | роутер по description | роутер по description | роутер по description | роутер по description | явный tool call `skill({name})`, агент решает по description |
| Нативно читает чужие директории других таргетов | — | `.claude/skills/` | — | — | `.claude/skills/` И `.agents/skills/`, project+user |
