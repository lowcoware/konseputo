---
name: konseputo-mobile
description: >
  Mobile engineering — Flutter-first (owner's primary), React Native, native
  SwiftUI/Kotlin, WebView wrappers. Anti-overengineering ladder for platform
  choice, day-one mobile baseline (crash reporting, release signing, dispose
  discipline, network timeouts), and the mobile-specific bug catalog.
  Triggers: "/konseputo-mobile", "flutter", "react native", "swiftui", "kotlin
  android", "мобилка", "мобильное приложение", "widget", "riverpod", "flatlist",
  "push notifications", "deep link", "webview", "app store", "offline-first".
---

# konseputo-mobile

Mobile counterpart to konseputo-backend/konseputo-frontend. Same stance: the plainest
thing that ships, a day-one baseline that's never skipped, ceiling markers
for deferred scaling. Flutter is the owner's primary — deepest coverage
there. Content synthesized from openly-licensed sources (see Lineage in
README); native Apple docs are orientation-only (proprietary).

## Platform-choice ladder

Stop at the first that holds:
1. **Cross-platform (Flutter)** unless a reason below forces otherwise — one
   codebase, two platforms.
2. **React Native** if the team/ecosystem is already React-native and the app
   is React-shaped.
3. **Drop to native for ONE feature** via platform channel / native module —
   not a full native rewrite — when it needs OS-level fidelity, a tiny
   system-utility binary, or deep OEM/hardware API access a bridge can't
   reach cleanly.
4. **Full native (SwiftUI/Kotlin)** only when most of the app is that one
   feature.

## Day-one mobile baseline — never skipped

- Crash reporting wired (Sentry/Crashlytics) from build #1
- Release signing + auto-incremented build number in CI (never by hand)
- Timeout on every network call (same rule as konseputo-backend baseline)
- **Dispose discipline:** every subscription/controller/listener/observer
  opened has a paired teardown — the #1 mobile leak (`hardening-mobile.md`)
- Phased rollout (1%→5%→20%→50%→100%) with a crash-rate halt threshold
- No secret in the app binary (see cross-cutting.md — it's public)

## References — load on demand

| File | Covers | Load when |
|---|---|---|
| references/flutter.md | state-mgmt choice, rebuild perf, BuildContext-async-gap, go_router, platform channels, isolates, dispose | any Flutter work |
| references/react-native.md | New Arch/Expo choice, FlatList perf, Expo Router, state, bridge/listener leaks | any React Native work |
| references/native.md | native-vs-cross-platform decision, SwiftUI @Observable state, Kotlin coroutines/Compose, dropping to native | native code or a platform channel |
| references/cross-cutting.md | secrets-in-binary, deep linking, WebView security, offline-first sync, push, release discipline | any app (all platforms) |
| references/hardening-mobile.md | the mobile AI-typical bug catalog: leaks, main-thread blocking, list perf, lifecycle | reviewing mobile code |
| [../../shared/context7.md](../../shared/context7.md) | Flutter/React Native/SwiftUI/Kotlin API syntax before writing against it — New Arch/Expo/Compose move fast | unfamiliar SDK API or a version-pinned mobile dep |

## Boundaries

- Backend the app talks to → konseputo-backend; auth/token handling → konseputo-security
  (mobile-specific: secret-in-binary rule in cross-cutting.md).
- Web frontend → konseputo-frontend (no ai-tells/register model transfers to
  mobile — different paradigm).
- "stop konseputo" / "normal mode": revert to default behavior.
