---
name: konseputo-artifact
description: "Generate a self-contained, single-file HTML artifact — a report, plan, comparison, prototype, or full-screen interactive diagram — calibrated against a curated example gallery. Mandatory dark mode. Not a Vue/Nuxt app: a one-off shareable document. Triggers: \"/konseputo-artifact\", \"make an HTML report\", \"visualize this architecture\", \"html diagram\", \"turn this into a plan page\", \"self-contained html\", \"one-file html artifact\", \"сделай html отчёт\", \"визуализируй архитектуру\", \"html диаграмма\", \"сделай план в html\", \"визуальный артефакт\", \"покажи схему архитектуры\". From plannotator/effective-html (MIT) + Anthropic's html-effectiveness example gallery (Apache-2.0)."
---

# konseputo-artifact

The artifact-generation counterpart to `konseputo-md-generator`: that skill
formats structured Markdown for Obsidian; this one renders a single
self-contained HTML file for anything meant to be opened as a document —
a report, plan, comparison, prototype, or diagram — not a production Vue
app. If the deliverable needs routing, state management, or a build step,
it's konseputo-frontend's job, not this skill's.

## Workflow

1. **Pick a genre** — general / plan / diagram. `references/genres.md`.
2. **Open the gallery**, find the nearest example(s), match style, density,
   and tone — not a template to fill in, a calibration reference.
   `references/gallery.md` indexes all 21 files in `examples/`. Start from
   `references/palette.md`'s tokens (extracted from what 20 of the 21 files
   independently converge on) rather than inventing a new palette per
   artifact.
3. **Content already decided elsewhere?** A calling skill (konseputo-pm,
   konseputo-review, konseputo-debt, konseputo-goal) usually supplies WHAT the artifact
   says — this skill only decides HOW it renders. `references/handoff.md`.
4. **Dark mode, always** — CSS variables, toggle, `localStorage`,
   apply-before-paint script. Non-negotiable on every artifact, every
   genre. `references/dark-mode.md`.
5. **Diagram genre only** — pan/zoom technique, dismissible overlays,
   motivated interactivity. `references/pan-zoom.md`.
6. **Ship as one file.** No build step, no external dependencies beyond
   what the browser ships natively — the whole point is "open this file
   and it works."

## What this is not

Not a template-fill exercise — the gallery teaches calibration (how much
prose, how dense, what tone), not fields to substitute. A diagram request
that comes back prose-heavy, or a report that comes back as a bare wall of
text, means the wrong genre was picked in step 1.

## References

| File | Covers | Load when |
|---|---|---|
| references/genres.md | the three genres and their rules | every task, first read — pick the genre |
| references/gallery.md | index of all 21 vendored examples, genre-tagged | finding the nearest calibration reference |
| references/palette.md | shared token set extracted from the corpus (colors, type scale, radius, dot/pill/delta component patterns), dark variant | starting any artifact's visual system |
| references/dark-mode.md | the four mandatory dark-mode pieces + reference implementation | every artifact |
| references/pan-zoom.md | SVG pan/zoom technique: 1:1 pan, cursor-anchored zoom, click-after-drag suppression | diagram genre |
| references/handoff.md | where an artifact request comes from (konseputo-pm/review/debt/goal), the content-vs-format contract | the request originates from another konseputo skill's output |
| references/self-reference.html | self-generated reference artifact — Apple design system (konseputo-frontend/references/design-systems), general+plan+diagram genre techniques in one file, the skill's own output measured against itself, not the vendored gallery | checking whether current output still matches this skill's own baseline; regenerate and diff when the rules above change |

## Boundaries

- Content policy (should this document exist, what cadence, what it says)
  stays with the calling skill — konseputo-project-management for specs/retros/
  status reports, konseputo-review for findings. This skill formats; it never
  decides.
- Ongoing notes that live in an Obsidian vault → `konseputo-md-generator`, not
  this skill. This skill is for a standalone shareable file.
- A production Vue/Nuxt surface (routing, state, a real app) →
  `konseputo-frontend`. This skill is for a one-off document.
- Visual quality bar (banned defaults, one accent, no fake-precise numbers)
  is `konseputo-frontend/references/ai-tells.md` — a smaller surface than a full
  app, but the same discipline; see `dark-mode.md`'s note on this.
- Voice on generated prose → `konseputo-humanizer`, same automatic-trigger
  pattern konseputo-md-generator uses.
- **CSP is a real deployment constraint this skill can't design around.**
  A single-file artifact leans entirely on inline `<script>`/`<style>` —
  the exact pattern a real Content-Security-Policy exists to restrict, since
  inline JS is one of the most common XSS vectors. If the artifact ever
  gets served through infrastructure enforcing a strict CSP (an internal
  wiki, a doc portal, anywhere adding a `script-src`/`default-src`
  directive), inline scripts silently stop executing unless that
  infrastructure adds a matching nonce/hash — which a static single file
  can't provide for itself, and a hash breaks the moment the script's
  whitespace changes on the next edit. This skill has no lever to pull
  here; if the artifact needs to survive a strict-CSP host, that's a
  hosting-side decision (nonce injection, or serving as a sandboxed
  `iframe`) outside this skill's scope — flag it, don't silently assume
  the artifact will just run wherever it's opened.
- "stop konseputo" / "normal mode": revert to default behavior.

## Lineage

Genre split (general/plan/diagram) and the dark-mode + pan-zoom techniques
are plannotator/effective-html (MIT). The 21-file example gallery under
`examples/` is Anthropic's own "unreasonable effectiveness of HTML" sample
set (Apache-2.0), vendored directly — plus one interactive architecture
exemplar from plannotator/effective-html (MIT). `handoff.md` and the
ai-tells/humanizer integration are original to the konseputo suite.
