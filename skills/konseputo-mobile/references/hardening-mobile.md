# Hardening — mobile AI-typical bugs

The mobile counterpart to `konseputo-review/references/ai-bug-patterns-be.md` —
patterns AI-generated mobile code produces systematically. Each is a review
catch: signal → fix.

1. **Undisposed subscription/controller (Flutter).** Created in `initState`
   with no matching `dispose()` — the #1 Flutter leak. Full detail:
   `flutter.md` §6.
2. **Missing `removeObserver` on `WidgetsBindingObserver`** — leaks the whole
   State object. Full detail: `flutter.md` §6.
3. **BuildContext used after an `await` with no `mounted` check** — crashes
   or acts on a disposed widget. Full detail: `flutter.md` §3.
4. **FlatList with index-as-key / no `getItemLayout` / unmemoized
   `renderItem` (RN)** — re-render storms and state-bleed between rows.
   Full detail: `react-native.md` §2.
5. **Native-module/AppState/Keyboard listener never unsubscribed (RN)** —
   permanent leak. Full detail: `react-native.md` §5.
6. **CPU-bound work on the main isolate / JS thread** — UI jank/ANR. *Fix:*
   `Isolate.run()`/`compute()` (Flutter), a native module or Interaction
   Manager deferral (RN).
7. **App background/foreground ignored** — timers/streams keep running in
   background (battery drain), or stale data on resume. *Fix:* pause on
   background, refresh/resubscribe on resume via the lifecycle observer.
8. **Secret/API key in the bundle** — publicly extractable
   (`cross-cutting.md` §1). *Fix:* proxy through your backend.

These are `/konseputo-review`-style findings for mobile diffs — one line each,
signal + fix.

## App Store rejection — top causes, not folklore

~40-60% of first-time iOS submissions get rejected; Apple's own numbers
put crashes/broken functionality and performance issues as the single
biggest rejection categories, well ahead of anything content-policy
related. Cheapest wins before ANY submission: a working support URL
(Guideline 1.5 — a broken one is consistently a top-3 rejection cause on
its own), a present and accurate `PrivacyInfo.xcprivacy` manifest, and the
App Privacy "nutrition label" answers actually matching what the binary's
SDKs do (a mismatch here — e.g. an ad SDK tracking without disclosure — is
now a routine rejection, not an edge case). In-app-purchase violations
(external payment links for digital goods, hidden pricing, unclear
subscription terms) are their own dominant category, separate from
technical quality entirely.
[QAwerk: App Store rejection reasons 2026](https://qawerk.com/blog/app-store-rejection-reasons/)
