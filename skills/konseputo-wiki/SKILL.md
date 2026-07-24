---
name: konseputo-wiki
description: "Maintain a whole Obsidian vault as a living project wiki — structure/taxonomy, Maps of Content, vault health (orphan detection, broken-link healing, stats, TOC), Canvas diagrams, Bases database views, and CLI vault automation. Not per-note syntax formatting (konseputo-md-generator) and not deciding what gets written (konseputo-project-management) — this decides WHERE things live and keeps the vault connected and healthy as it grows. Triggers: \"/konseputo-wiki\", \"веди вики проекта\", \"создай вики\", \"vault health\", \"maintain the wiki\", \"построй MOC\", \"найди сироты\", \"почини битые ссылки\", \"canvas диаграмма\", \"obsidian base\", \"vault stats\", \"структура вольта\". From kepano/obsidian-skills (MIT) + tpitsunov/obsidian-skills (MIT) + adriangrant/Obsidian-SKILLS (MIT)."
---

# konseputo-wiki

The vault-lifecycle counterpart to `konseputo-md-generator`: that skill formats
ONE note's syntax; this skill maintains the WHOLE vault as a connected,
navigable project wiki — structure, cross-linking, health, and Obsidian's
richer file types (Canvas, Bases).

## Division of labor (read before doing anything)

| Question | Owner |
|---|---|
| Should this document exist? What does it say? When does it get written? | `konseputo-project-management` |
| How is this note's Markdown formatted (wikilinks, callouts, properties)? | `konseputo-md-generator` |
| Where does it live? How does it connect to the rest of the vault? Is the vault healthy? | **this skill** |

Never invents content — same non-negotiable konseputo-md-generator holds. A
canvas or a Base is the one exception: the diagram or the query IS the
deliverable this skill originates, not a record of something decided
elsewhere.

## Workflow

1. **New project, or first time this skill touches the vault** →
   `references/structure.md` for the folder taxonomy and how it maps to
   konseputo-project-management's outputs.
2. **Building or updating an index note** → `references/moc.md`.
3. **Health check, orphan/broken-link cleanup, stats, ToC** →
   `references/vault-health.md` — script-first, deterministic.
4. **Architecture/flow diagram as a vault artifact** →
   `references/canvas.md` (`.canvas` files — different from
   `konseputo-artifact`'s standalone-HTML diagrams; pick by where it needs to
   live).
5. **Database-like view over notes** (open ADRs, active specs, a task
   board) → `references/bases.md` (`.base` files).
6. **Shell automation against a running vault** → `references/cli.md`.
7. **Inbox triage, glossary, tagging, splitting an oversized doc** →
   `references/capture-and-atomize.md`.

## Locate the skill (for script invocation)

```bash
KONSEPUTOWIKI_DIR=$(dirname "$(ls -1 \
  "$HOME/.claude/skills/konseputo-wiki/SKILL.md" \
  "$PWD/.claude/skills/konseputo-wiki/SKILL.md" \
  2>/dev/null | head -n1)")
export KONSEPUTOWIKI_DIR
```

Every bundled script in `scripts/` is invoked as `python3
$KONSEPUTOWIKI_DIR/scripts/<name>.py <args>` — see the reference file for each
operation for exact arguments.

## References

| File | Covers | Load when |
|---|---|---|
| references/structure.md | vault folder taxonomy for a PROJECT (not personal PKM), content-source mapping to konseputo-pm | starting on a new vault, or deciding where something belongs |
| references/moc.md | building/rebuilding a Map of Content index note | any MOC task |
| references/vault-health.md | orphan detection, broken-link healing, stats, ToC generation — all script-backed | vault maintenance, periodic health check |
| references/canvas.md | `.canvas` file schema, node/edge types, validation | architecture/flow diagram as a vault artifact |
| references/canvas-examples.md | full worked canvas examples (mind map, project board, research, flowchart) | need a concrete starting shape |
| references/bases.md | `.base` file schema, filters, formulas, views, the actual failure modes (Duration math, YAML quoting, undefined formula refs) | any database-view-over-notes task |
| references/bases-functions.md | full function catalog (Date/String/Number/List/File/Link/Object/RegExp) | writing a non-trivial formula |
| references/cli.md | vault-CRUD shell commands, environment footguns (Linux sandbox, Snap) | scripting a vault operation from the shell |
| references/capture-and-atomize.md | inbox triage, glossary building, tagging, zettel atomization of oversized docs | organizing raw/oversized material into the vault's shape |
| references/self-reference.md | self-generated reference artifact — a real `_MOC_<Name>.md` built by this skill's own moc.md workflow, indexing the suite's own skills | checking whether current MOC output still matches this skill's own baseline |

## Scripts

`find_orphans.py` · `heal_links.py` · `generate_toc.py` · `vault_stats.py`
· `gather_data.py` (MOC data extraction) · `atomizer.py` (lossless
paragraph-level document splitting). Each documented with exact invocation
in its owning reference file above.

## Boundaries

- Obsidian PLUGIN or THEME development (writing `.js`/`.css` that extends
  Obsidian itself) is a different domain entirely — out of scope. This
  skill maintains a vault's CONTENT, not Obsidian's codebase.
- Personal life-PKM workflows (daily journaling ritual, personal
  Zettelkasten ideation, social-media clipping/transcription) are out of
  scope — this skill's taxonomy and health operations are calibrated for a
  PROJECT wiki, not a personal second brain.
- A diagram meant to ship as a standalone shareable HTML file (not a vault
  artifact) → `konseputo-artifact`'s diagram genre, not `canvas.md`.
- "stop konseputo" / "normal mode": revert to default behavior.
