[Русский](INSTALL.md) · **English**

# Install — konseputo across CLIs

This suite is authored as native `SKILL.md` + `references/*.md` — the
agentskills.io format. That format is spoken **natively** by all five CLIs
below, so installing is placement, not conversion: both `npx skills` and
the repo's `scripts/install.js` just copy `skills/*/` (router + references)
into whichever CLI's extension directory you target, nothing is rewritten
or translated.

The primary path depends on the tool: **Claude Code** and **Antigravity**
use their own plugin systems (the Claude Code marketplace plugin and the
Antigravity plugin bundle, sections below); **Cursor**, **Codex**, and
**OpenCode** use `npx skills`. OpenCode has a third path too, often the
shortest one: if the suite is already installed for Claude Code or
Codex/Antigravity in the same project or home directory, OpenCode reads
`.claude/skills/` and `.agents/skills/` natively at both scopes and
**already sees it, zero extra steps** (OpenCode section below).

## Install via npx skills (primary path for Cursor and Codex)

For Claude Code and Antigravity the plugin system gives a native install —
and on Claude Code also hooks, statusline, and modes; `npx skills` works for
them too but drops the bare skill level without the plugin wiring.

`npx skills` is the open agent-skills installer (vercel-labs/skills): it
pulls skills from a GitHub repo into your tool's directory — GitHub is the
registry instead of npm. The suite is already in the native agentskills.io
format, so it installs as-is — no manifest needed, all 22 skills are
auto-discovered (verified 2026-07-04: `npx skills add lowcoware/konseputo --list`
finds all 16).

One command per tool:

```
npx skills add lowcoware/konseputo -a claude-code    # Claude Code
npx skills add lowcoware/konseputo -a cursor         # Cursor
npx skills add lowcoware/konseputo -a codex          # Codex
npx skills add lowcoware/konseputo -a antigravity    # Antigravity
npx skills add lowcoware/konseputo -a opencode       # OpenCode
```

All at once — list the targets: `-a claude-code -a cursor -a codex
-a antigravity -a opencode` (or `--all`, every skill into every detected
agent). It
installs into the project by default; `-g` installs into your user
directory, global to all projects. Also handy: `-y` (non-interactive, for
CI), `--list` (show skills, install nothing), `-s <skill>` (only specific
ones, e.g. `-s konseputo-backend -s konseputo-frontend`).

Where it lands: `claude-code` → `.claude/skills/`, `cursor` / `codex` /
`opencode` → `.agents/skills/` at project scope (Cursor and OpenCode both
read `.claude/skills/` and `.agents/skills/` natively — neither writes its
own separate copy). At user/global scope `opencode` has its own path:
`~/.config/opencode/skills/` — see the OpenCode section. Verify
Antigravity's path on the spot — the interface is young and has moved
already (see the Antigravity section below).

One note on level: `npx skills` installs skill content (SKILL.md + each
skill's `references/`) — the same bare level as a `scripts/install.js` copy.
It does not carry hooks, the statusline badge, the stateful mode switch, or
the `/konseputo-*` commands; those come only from the native Claude Code plugin
(below). The skills installer also doesn't place `shared/*.md` — cross-skill
links depend on those, see "Shared files and cross-skill links".

## Repo installer (alternative)

If you want an offline path without npx, the exact copy plan up front
(dry-run), or a symmetric `--uninstall`, the repo ships its own installer.
Run `node scripts/install.js --help` for the full CLI surface. Short version:

```
node scripts/install.js --target=claude|cursor|codex|antigravity|opencode \
  [--scope=project|user] [--project-dir=PATH] [--apply] [--uninstall]
```

Default (no `--apply`) is **dry-run**: it prints the exact copy plan
(source -> destination, one line per file) and writes nothing. Add `--apply`
to execute. It's idempotent — re-running `--apply` overwrites this suite's
own folders in place — and it never touches sibling files or other
skills/plugins already present in the same directory. `--uninstall` (with
`--apply`) removes exactly what the matching install created.

Per-target formats below are verified **2026-07-04** against each vendor's
own docs. These interfaces move fast and
sit past this suite's knowledge cutoff — re-check the source URL before
trusting an install on a materially newer CLI release.

## Update

**Verified:** 2026-07-18. Source: `code.claude.com/docs/en/plugin-marketplaces`,
`vercel-labs/skills` README.

One thing to know first: this repo's history is intentionally a **single
commit, force-pushed on every release**. A plain `git pull` in a clone will
therefore fail with non-fast-forward. Update a clone with:

```
git fetch origin && git reset --hard origin/main
```

Per install path:

**Claude Code native plugin (marketplace):**

```
/plugin marketplace update konseputo
/plugin update konseputo@konseputo
```

Restart the session, verify with `/konseputo-help`. Details:

- Marketplace added from **GitHub**: the refresh pulls the repo; because of
  the force-pushed history the pull fails non-fast-forward and Claude Code
  falls back to re-cloning from scratch — that's expected and fine, the
  manual commands above are the reliable path.
- Marketplace added from a **local path** (the install commands in the Claude
  Code section use one): update the local clone first (`git fetch` +
  `reset --hard` above), then run the two `/plugin` commands.
- Update detection keys on `version` in `.claude-plugin/plugin.json` — if
  the version you already have matches, `/plugin update` **skips the plugin
  even when file contents changed**. Releases of this suite bump that
  version; if yours seems stuck, check whether the version actually changed
  upstream, and as a last resort `/plugin uninstall konseputo@konseputo` +
  `/plugin install konseputo@konseputo`.

**Via `npx skills`:**

```
npx skills update        # update all installed skills (interactive scope prompt)
npx skills update -y     # non-interactive, auto-detects scope
npx skills update konseputo-backend konseputo-frontend   # only specific skills
```

Re-running `npx skills add lowcoware/konseputo -a <agent>` also refreshes
to the latest state.

**Repo installer (`scripts/install.js`):** update the clone, re-run the same
install command — it's idempotent and overwrites this suite's own folders in
place, never touching siblings:

```
git fetch origin && git reset --hard origin/main
node scripts/install.js --target=<t> [--scope=user] --apply
```

**Manual copy:** re-run the same copy commands from the target's "Manual
fallback" — same overwrite-in-place semantics.

## What never ports, on any target but Claude Code's native plugin

The konseputo suite has two layers: the **content** (routers + references — this
is what installs everywhere) and Claude-Code-plugin-only **machinery**:
hooks (`SessionStart` mode flag, `UserPromptSubmit` ruleset injection,
`SubagentStart` propagation), the statusline mode badge, and `/konseputo-backend
[mode]` / `/konseputo-frontend [mode]` as a *stateful mode switch*. That machinery
is wired through `.claude-plugin/plugin.json`'s `hooks` block and only loads
when the suite is installed as a **native plugin** (marketplace path) — it
does not exist for a bare skill-folder copy, on Claude Code or anywhere else.

What *does* still work everywhere, including a bare copy: every CLI's own
router still auto-attaches a skill by matching your prompt against that
skill's frontmatter `description` (the trigger phrases each SKILL.md lists).
There's no `blitz`/`medium`/`hardcore` mode flag outside the plugin, but you
get the same effect by naming the mode in your prompt — e.g. "review this
Go service in hardcore mode" still reads `konseputo-backend`'s hardcore guidance,
it's just not tracked as session state or shown on a statusline.

## Claude Code

**Verified:** 2026-07-04. Source: `code.claude.com/docs/en/plugins-reference`,
`/plugin-marketplaces`, `/skills`.

**Prerequisites:** Claude Code CLI installed.

**Via `npx skills`:** `npx skills add lowcoware/konseputo -a claude-code` — the
bare level (no hooks/statusline/modes; for those use the native plugin below).

**Install — native plugin (primary path):**

```
/plugin marketplace add <path-to-this-repo>
/plugin install konseputo@konseputo
```

This is the only path that wires hooks, the statusline badge, and the
`/konseputo-backend [mode]` / `/konseputo-frontend [mode]` mode switch. Restart the
session; verify with `/konseputo-help`.

**Install — installer (bare skill copy):**

```
node scripts/install.js --target=claude --apply
```

Project scope by default (`.claude/skills/` under the current directory —
pass `--project-dir=PATH` to target a different project); add
`--scope=user` to install into `~/.claude/skills/` instead (available to
every project, no per-project trust dialog).

**After restart, expect:** all 22 skills listed under Claude Code's skills
(project scope shows a one-time trust dialog; user scope does not); each
still triggers on its own description whenever your prompt matches, same as
the plugin path. No hooks, no statusline badge, no stateful mode switch (see
above).

**Manual fallback** (no Node, or you'd rather see the commands):

```
robocopy skills <project>\.claude\skills /E
robocopy shared <project>\.claude\konseputo-shared /E
```

(POSIX equivalent: `cp -r skills/. <project>/.claude/skills/` and
`cp -r shared/. <project>/.claude/konseputo-shared/`.)

**Uninstall:**

```
node scripts/install.js --target=claude --apply --uninstall
```

Native plugin: `/plugin uninstall konseputo@konseputo`. Manual: delete
`<project>\.claude\skills\konseputo-*` and `<project>\.claude\konseputo-shared\`.

## Cursor

**Verified:** 2026-07-04. Source: `cursor.com/docs/context/rules`,
`/context/skills`.

**Prerequisites:** Cursor with Agent Skills enabled.

**Via `npx skills` (primary path):** `npx skills add lowcoware/konseputo -a cursor`.

Cursor reads `.claude/skills/` **directly, natively, for compatibility** — no
separate `.cursor/skills/` copy exists or is needed. `--target=cursor` is an
alias: it verifies/creates the exact same `.claude/skills/` tree
`--target=claude` does.

**Install — one command:**

```
node scripts/install.js --target=cursor --apply
```

(`--scope=user` for `~/.claude/skills/`, global to all your Cursor projects.)

**Native alternative:** if you'd rather use Cursor's own skills directory
instead of the shared `.claude/skills/` path, point the same source tree at
`.cursor/skills/` (project) or `~/.cursor/skills/` (user) by hand — the
installer does not offer this as a separate target because it would just be
a second, redundant copy of files Cursor already reads.

**After restart, expect:** the same 22 skills, auto-attached by description
(Cursor's Agent-Requested rule type) or by explicit invocation. No hooks, no
statusline, no mode-flag state — see "What never ports" above.

**Manual fallback:** identical to Claude Code's manual fallback above — same
destination directory.

**Uninstall:**

```
node scripts/install.js --target=cursor --apply --uninstall
```

## Codex CLI

**Verified:** 2026-07-04 for the core mechanism. Source:
`developers.openai.com/codex/skills`, `/codex/guides/agents-md`,
`/codex/config-reference`, `github.com/openai/skills`. (Its
plugins-system field-name detail is single-source in the research pass —
treat only the `.agents/skills/` placement + frontmatter caps below as
confirmed.)

**Prerequisites:** OpenAI Codex CLI with skills support.

**Via `npx skills` (primary path):** `npx skills add lowcoware/konseputo -a codex`.

**Install — one command:**

```
node scripts/install.js --target=codex --apply
```

Project scope installs to `.agents/skills/<skill>/` under the current
directory (Codex resolves this from your repo root); `--scope=user` installs
to `~/.agents/skills/`.

Codex enforces hard frontmatter caps this installer validates **before**
copying anything: `name` ≤ 64 characters, lowercase letters/digits with
single hyphens (no leading/trailing hyphen), and equal to the skill's
directory name; `description` ≤ 1024 characters. A violation is reported by name and
fails the run (exit code 2) rather than being silently truncated — see
"Validation findings" below for this suite's current result (clean).

**After restart, expect:** all 22 skills available under Codex's own skill
listing, auto-attached by description. `AGENTS.md` is Codex's separate,
core-supported context-injection mechanism (concatenated root -> leaf, 32 KiB
default cap) — this installer does not generate one; if you want the suite's
guidance force-loaded rather than routed, add your own pointer line to your
project's `AGENTS.md` by hand.

**Manual fallback:**

```
robocopy skills <project>\.agents\skills /E
robocopy shared <project>\.agents\konseputo-shared /E
```

**Uninstall:**

```
node scripts/install.js --target=codex --apply --uninstall
```

## Antigravity

**Verified:** 2026-07-04, but treat as **young and volatile** — Antigravity's
own skill path has already been renamed once (`.agent/` -> `.agents/`)
during its public life, and the current paths should be treated as
"likely-stable-not-frozen." Re-verify against
`antigravity.google/docs/skills` (also `/docs/rules-workflows`, `/docs/plugins`,
`/docs/cli/gcli-migration`) before relying on this for anything but the
current release. `.agent/` (singular) is honored as a back-compat alias if
you find an older install using it.

**Prerequisites:** Google Antigravity CLI.

**Install — Antigravity plugin (primary path):**

The Antigravity CLI installs plugins by command:

```
agy plugin install lowcoware/konseputo
```

Alongside: `agy plugin list` shows what's installed; `agy plugin enable konseputo`
/ `agy plugin disable konseputo` toggle it without deleting; `agy plugin uninstall
konseputo` removes it. The suite is packaged as a plugin bundle (`plugin.json` at
the repo root plus the `skills/` folder — Antigravity reads
`skills/<name>/SKILL.md`), so it installs as-is.

If your CLI build wants a full URL, use `agy plugin install
https://github.com/lowcoware/konseputo`. Manual fallback without the command —
drop the bundle into Antigravity's plugins directory and it's picked up on
startup:

- workspace: `.agents/plugins/konseputo/` at your workspace root;
- global: `~/.gemini/antigravity-cli/plugins/konseputo/` (on some builds,
  `~/.gemini/config/plugins/konseputo/`).

```
git clone https://github.com/lowcoware/konseputo .agents/plugins/konseputo
```

Confirm the `agy plugin install` source-argument format and the exact
plugins directory against `antigravity.google/docs/cli/plugins` — the
interface is young (see the warning above). The Antigravity plugin ships the
same 22 skills; the konseputo hooks, modes, and statusline are
Claude-Code-plugin-only, and the suite ships no Antigravity-specific
`hooks.json`/`rules`.

**Install — skills without the plugin wrapper (alternative):**

`npx skills add lowcoware/konseputo -a antigravity`, or
`node scripts/install.js --target=antigravity --apply`.

Project scope installs to `.agents/skills/<skill>/` — **the same directory
Codex uses at project scope.** If you've already run
`--target=codex --apply` in this project, that install already satisfies
Antigravity too; the installer detects and reports this rather than
duplicating anything. `--scope=user` installs to
`~/.gemini/config/skills/<skill>/`, which is Antigravity-specific (not
shared with Codex).

Antigravity shares the same underlying skill spec as Codex, so this
installer applies the same `name`/`description` validation described in the
Codex section above.

**After restart, expect:** all 22 skills available, auto-attached by
description. `.agents/rules/*.md` (workspace) / `~/.gemini/GEMINI.md`
(global) and `AGENTS.md` are Antigravity's separate rule-injection paths
(capped at 12000 chars) — not generated by this installer.

**Manual fallback:**

```
robocopy skills <project>\.agents\skills /E
robocopy shared <project>\.agents\konseputo-shared /E
```

(user scope: `%USERPROFILE%\.gemini\config\skills\` and
`%USERPROFILE%\.gemini\config\konseputo-shared\`.)

**Uninstall:**

```
node scripts/install.js --target=antigravity --apply --uninstall
```

## OpenCode

**Verified:** 2026-07-18. Source: `opencode.ai/docs/skills`, `/docs/plugins`,
`/docs/config`; the `opencode` target in `vercel-labs/skills`
(`github.com/vercel-labs/skills` README, Supported Agents table).

**Prerequisites:** OpenCode CLI with the `skill` tool enabled (on by
default; restrictable via `permission.skill` in `opencode.json`).

**OpenCode has no native `/plugin` command and no GUI/TUI installer** —
unlike Claude Code (`/plugin marketplace add` + `/plugin install`) or
Antigravity (`agy plugin install`). The only officially supported paths
are: an npm package listed in the `plugin` array of `opencode.json`, or
plugin files placed in `.opencode/plugins/` / `~/.config/opencode/plugins/`
(auto-loaded at startup). Unofficial third-party skill-marketplace tools
(`opencode-marketplace` and similar) exist, but those are community
wrappers, not a vendor feature — deliberately left out of this section,
which sticks to paths from OpenCode's own docs.

**Key difference from the other four targets:** OpenCode doesn't route by
`description` at the prompt level — it has a dedicated `skill` tool
instead. The agent sees a list of available skills (name + description)
and decides itself to call `skill({ name: "konseputo-frontend" })` when a
description fits the task. Same effect (the skill attaches when relevant),
different mechanism (an explicit tool call, not a system-prompt injection).

**OpenCode reads `.claude/skills/` and `.agents/skills/` natively, at both
project AND user/global scope** — on top of its own `.opencode/skills/`
(project) and `~/.config/opencode/skills/` (global). If the suite is
already installed for Claude Code (`.claude/skills/`) or for
Codex/Antigravity (`.agents/skills/`) in the same project or home
directory, OpenCode **already sees all 22 skills, zero extra steps.** What
follows is the path for OpenCode running on its own, without the others.

**Via `npx skills` (primary path for a clean OpenCode-only install):**
`npx skills add lowcoware/konseputo -a opencode`.

**Install — one command:**

```
node scripts/install.js --target=opencode --apply
```

Project scope installs to `.agents/skills/<skill>/` — the same directory
Codex/Antigravity use at project scope (if either is already installed
here, the installer detects and reports this rather than duplicating).
`--scope=user` installs to `~/.config/opencode/skills/<skill>/`, which is
OpenCode-specific — not shared with Codex/Antigravity.

Frontmatter caps are the same spec as Codex/Antigravity: `name` ≤ 64
characters, kebab-case, equal to the skill's directory name; `description`
≤ 1024 characters. The installer validates with the same code path used
for Codex — the suite already passes clean (see "Validation findings"
below).

**After restart, expect:** all 22 skills available through the `skill`
tool — `skill list` (or your client's equivalent) shows all 16 names with
their descriptions. Attachment happens via an explicit tool call from the
agent, not prompt auto-routing (see the difference above). No hooks, no
statusline, no stateful mode switch — see "What never ports" above.

**Manual fallback:**

```
robocopy skills <project>\.agents\skills /E
robocopy shared <project>\.agents\konseputo-shared /E
```

(user scope: `%USERPROFILE%\.config\opencode\skills` and
`%USERPROFILE%\.config\opencode\konseputo-shared`.)

**Uninstall:**

```
node scripts/install.js --target=opencode --apply --uninstall
```

## Shared files and cross-skill links

`shared/authoring.md`, `shared/communication.md`, `shared/evals.md`, and
`shared/context7.md` are copied alongside the skills into a `konseputo-shared/`
folder at each target's root (`.claude/konseputo-shared/`, `.agents/konseputo-shared/`,
`~/.gemini/config/konseputo-shared/`, `~/.config/opencode/konseputo-shared/` on
OpenCode's user scope — at project scope OpenCode shares `.agents/konseputo-shared/`
with Codex/Antigravity). Several skills also link to *other*
skills' `references/*.md` by relative path (e.g. `konseputo-frontend` pointing at
a `konseputo-backend` reference). This installer places files; it does not
rewrite links. Inside Claude Code's native plugin, those links resolve
because the whole suite installs as one tree. Everywhere else — bare copies
on any target — a deep cross-skill link may not resolve to a file on disk.
That's an accepted degradation, not a bug: the links are pointers for a
human or an agent to go find the referenced guidance, not hard imports the
skill depends on to function. Building a link-rewriting engine to fix this
was considered and rejected as overengineering for a documentation
cross-reference.

## Validation findings (current suite, checked 2026-07-04)

All 22 skills pass the Codex/Antigravity/OpenCode frontmatter caps this
installer enforces (one shared spec, validated with one code path for all
three): every `name` is ≤ 64 characters and matches its directory exactly;
every `description` is ≤ 1024 characters. Zero violations found — this
installer's validator is defense-in-depth against future skills breaking
the cap, not a fix for a currently-broken one (`scripts/check-skills.js`
already enforces the same two caps suite-wide in CI).

## Compatibility matrix

| | Claude Code | Cursor | Codex | Antigravity | OpenCode |
|---|---|---|---|---|---|
| SKILL.md native | yes (origin format) | yes | yes | yes | yes |
| This installer's target dir | `.claude/skills/` | `.claude/skills/` (alias) | `.agents/skills/` | `.agents/skills/` (project, = codex) / `~/.gemini/config/skills/` (user) | `.agents/skills/` (project, = codex) / `~/.config/opencode/skills/` (user) |
| references/*.md as-is | yes | yes | yes | yes | yes |
| Hooks / statusline / mode-flag `/konseputo-*` | plugin-only | no | no | no | no |
| How a skill attaches | router by description | router by description | router by description | router by description | explicit tool call `skill({name})`, agent decides by description |
| Natively reads other targets' directories | — | `.claude/skills/` | — | — | `.claude/skills/` AND `.agents/skills/`, both project+user |
