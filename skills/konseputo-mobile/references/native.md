# Native — SwiftUI / Kotlin

1. **When native beats cross-platform (the decision rule):** pixel-perfect
   OS-level fidelity, a tiny binary/system-utility constraint, or deep
   OEM/hardware API access a cross-platform bridge can't reach cleanly.
   Otherwise cross-platform wins on two-team-cost grounds. From an existing
   Flutter/RN app, drop to native for the ONE feature that needs it via a
   platform channel/native module — never a full native rewrite.
2. **SwiftUI state:** iOS 17+ `@Observable` macro replaces
   `@Published`/`@ObservedObject` boilerplate — model uses `@Observable`, the
   owning view holds it via `@State` (yes, reference types now), passed-down
   views use `@Bindable`. Pre-iOS17 rule still matters for older targets:
   whoever creates the object owns it via `@StateObject`; children get
   `@ObservedObject`.
3. **Kotlin/Compose:** `viewModelScope` auto-cancels on ViewModel clear —
   put async work there, never `GlobalScope`. `LaunchedEffect`/
   `rememberCoroutineScope` for composable-scoped effects (auto-cancelled on
   leaving composition). Expose immutable `StateFlow` from the ViewModel,
   mutate only inside it.

Note: Apple's SwiftUI/HIG docs are proprietary — used for orientation only,
not extracted. Kotlin/Compose guidance leans on Android Developers docs
(Apache-2.0) and MIT-licensed cursor-rule collections.

Sources: [Android Developers (Apache-2.0)](https://developer.android.com) ·
[PatrickJS/awesome-cursorrules (CC0)](https://github.com/PatrickJS/awesome-cursorrules)
