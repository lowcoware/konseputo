# React Native

1. **Architecture decision:** the New Architecture (Fabric/TurboModules/JSI)
   is mandatory as of RN 0.82 (legacy frozen mid-2025, no toggle). Expo
   managed workflow is the 2026 default — go bare only for a specific native
   integration Expo's plugin system can't cover. Measured deltas over the
   legacy bridge, not just an architectural preference: complex-list
   rendering ~43% faster, scroll frame drops down ~95%, memory ~33% lower,
   JS-to-native call latency 30-50% faster (JSI's direct memory access
   replaces the old serialize-over-the-bridge round trip).
2. **FlatList perf (the classic RN killer):** stable `keyExtractor` (never
   array index if data reorders — same class as the web `:key="index"` bug),
   `getItemLayout` when item height is fixed (skips per-item measurement —
   consistently the single highest-impact FlatList fix on its own),
   memoize `renderItem` (module-level or `useCallback`) to stop re-render
   storms. For a list that's still janky after all three: FlashList (Fabric-
   native) or the newer LegendList are drop-in-ish replacements built
   specifically to eliminate the blank-cell-flash FlatList still shows
   under fast scroll — reach for one before hand-rolling virtualization.
3. **Navigation:** Expo Router (file-based, auto deep-linking) is the default
   for new Expo projects; React Navigation for bare RN or bespoke
   transitions. Expo Router is built on React Navigation, not a replacement
   for its concepts.
4. **State:** same landscape as web — Context for small apps, Zustand as the
   sweet-spot default (tiny, selector-based, no boilerplate), Redux only for
   genuinely complex state.
5. **Bridge/listener leak:** passing a JS closure/listener to a native
   module can pin the whole component scope in memory if native never
   releases it; AppState/Keyboard listeners without a `useEffect` cleanup
   leak permanently — always return the unsubscribe fn from the effect.
6. **Effects are an escape hatch for external systems** (subscriptions,
   native listeners, timers) — not a place to derive state from
   props/state (do that inline during render) or to react to a user action
   (do that in the handler). An effect that sets state to trigger another
   effect is a chain to collapse into one handler/render pass (React core
   docs).

Sources: [React Native docs (MIT)](https://reactnative.dev) ·
[Expo docs (MIT)](https://docs.expo.dev) ·
[pmndrs/zustand (MIT)](https://github.com/pmndrs/zustand) ·
[ImpactTechLab: New Architecture JSI/Fabric/TurboModules performance data](https://impacttechlab.com/react-native-new-architecture-app-performance/) ·
[Medium: FlashList vs FlatList 2026](https://medium.com/@KaushalVasava/flashlist-vs-flatlist-in-react-native-a-2026-deep-dive-into-performance-architecture-and-fa4266f92ea9)
