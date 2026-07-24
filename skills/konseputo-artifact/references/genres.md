# Genres — three modes, one skill

Pick the closest genre before opening the gallery. Each has a different
prose-to-visual ratio; picking the wrong one is the most common failure
mode (a diagram request that comes back prose-heavy, or a report that comes
back as a bare wall of text).

## General artifact

Default mode. A report, explainer, comparison, deck, or prototype that
isn't specifically a plan or a diagram. Review `gallery.md`'s "general"
rows for the nearest match, match style/density/tone — not a template to
fill in, a reference to calibrate against.

## Plan

A plan page: implementation plan, roadmap, weekly slide deck. Pragmatic and
simple over impressive. Keep the writing close to what the user actually
gave you — this is not the place to invent scope, restructure their intent,
or pad a short plan into a longer one because HTML has room. If the ask is
"clean up the grammar," clean up the grammar; don't turn it into a bigger
artifact than requested. Nearest gallery examples: 09, 16.

## Diagram

Full-screen, prose-light, built to make architecture or a system click
fast — not a report with a diagram in it. Nearest gallery examples: 04, 13,
21 (21 is the load-bearing exemplar: full-screen SVG stage, clickable
nodes, animated request paths).

Rules specific to this genre:

1. **Build the SVG with care.** Iterate on the diagram more than on
   anything else in the artifact — this genre's whole value is the
   diagram, not the surrounding chrome.
2. **Interactive when it earns it.** If the system has meaningful sequences
   (a request path, a state transition), make nodes clickable and animate
   the flow — don't leave it as a static picture when motion would make it
   click faster. Motivation gate still applies: name what the animation
   explains (konseputo-frontend/motion-craft.md §1) — decoration for its own
   sake is still a `tell:` even in a one-off artifact.
3. **Theme the SVG through CSS variables**, never hard-coded hex inside
   `<svg>` — see `dark-mode.md`. A diagram that ignores the toggle is a bug.
4. **Overlays are always dismissible and always reachable again.** Any
   panel that floats over the SVG stage (detail card, legend, filter) needs
   a visible close control AND must reopen when the user clicks the node or
   filter that triggers it. A floating panel with no close button
   permanently blocks the stage underneath it.
5. **Pan and zoom are almost always needed** — architecture diagrams exceed
   the screen. Full technique: `pan-zoom.md`.
