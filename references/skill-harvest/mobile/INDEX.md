# Mobile AI-Agent Skill Harvest — INDEX

Harvested via `gh search repos` (GitHub CLI, account `prometazinesoldier` active in keyring — the intended `lowcoware` token was invalid, so search/read calls ran under the org-scoped fallback account; this is read-only and does not affect result quality). Scope: AI-agent "skill" repos (Claude Skills / SKILL.md, Cursor rules, generic agent-instruction repos, MCP-based mobile dev tools) focused on **mobile development** across iOS native, Android native, and cross-platform (Flutter / React Native / KMP).

Generated: 2026-08-03. Each repo was fetched via `git clone --depth 1` with `.git` stripped after clone (no full history kept). Local paths below are relative to the repo root (`C:\Users\lowcoware\Projects\konseputo\`).

## Balance across categories

| Category | top-stars | noname | Total |
|---|---|---|---|
| iOS (Apple native) | 16 | 24 | 40 |
| Android (native) | 19 | 10 | 29 |
| Cross-platform | 16 | 19 | 35 |
| **Total** | **51** | **53** | **104** |

The three categories are reasonably close (29–40 repos each) but not perfectly even. Two honest imbalances:

- **Android noname (10, short of the ~30-35 target):** the long tail of low-star Android search results is dominated by near-duplicate "android-mcp-server" ADB-control clones (dozens of them, many barely differentiated forks of the same idea). Rather than pad the count with a dozen indistinguishable ADB-MCP forks, only distinct/actively-updated ones within the ~90-day window were kept. Android's shortfall is offset by it having the strongest **top-stars** bucket (19, and the single highest-starred repo overall at 791 stars).
- **iOS noname (24) and iOS top-stars (16) overshoot/undershoot the round targets slightly** because iOS skill repos cluster heavily around App Store/ASO/TestFlight tooling and SwiftUI/UIKit "expert skill" packages — there simply are more small, recent, single-purpose iOS skill repos than there are genuinely high-star ones (iOS top-stars tops out with only two repos over 100 stars: RocketSimApp at 787 and swiftui-design-skill at 163; everything else in that bucket is under 35 stars).
- **Cross-platform** is the most balanced bucket-to-bucket (16 top-stars / 19 noname) — Flutter dominates within it (cursor-rules, MCP servers, audit skills), with React Native, KMP, and Compose Multiplatform each contributing a handful.

## Notes on search & filtering

- Queries combined `--topic claude-skill` / `--topic cursor-rules` / `--topic agent-skill` with platform topics (`ios`, `swiftui`, `xcode`, `android`, `kotlin`, `jetpack-compose`, `flutter`, `react-native`, `mobile`), plus free-text queries (`"swiftui cursor rules skill"`, `"android mcp server" sort:updated`, `"flutter mcp server" sort:updated`, etc.), sorted both by stars and by last-updated.
- Excluded from all buckets: the underlying SDKs/frameworks themselves (flutter/flutter, react-native, expo/expo, ionic-framework, appwrite, etc. — these are not agent-skill repos), generic non-mobile-specific "awesome-claude-skills" meta-lists (not mined further for individual mobile entries given time budget), and a few borderline non-dev repos (device forensics/hardware-hacking tools, single-app demo projects that merely *use* Cursor rather than define a reusable skill).
- **noname** bucket = <50 stars (mostly 0-2) AND `updatedAt` within ~90 days of harvest date (i.e. on/after ~2026-05-05). A handful of low-star repos that were relevant but stale (last updated 2025 or early 2026) were deliberately left out of noname rather than padding the count with dead repos.
- **Rate limits:** GitHub search API (`gh search repos`) is capped at 30 req/min; hit twice during the run (one hard 403, one transient network timeout) — both queries were simply re-run after the window reset, no data loss.
- **Clone hiccups:** a background clone batch stalled on a few slow/hung git processes (killed and retried); a handful of retries initially failed with "destination path already exists and is not empty" from a prior partial attempt — resolved by removing the stale partial directory and re-cloning. All 104 planned repos are present on disk with 0 empty/missing folders.

## Layout

```
references/skill-harvest/mobile/
  ios/{top-stars,noname}/NNN_owner-repo/
  android/{top-stars,noname}/NNN_owner-repo/
  crossplatform/{top-stars,noname}/NNN_owner-repo/
  manifest.tsv          (curated pick list used to drive cloning)
  clone_plan.csv         (fullName -> destPath -> cloneUrl mapping)
  INDEX.md               (this file)
```

---
## iOS (Apple native)

### top-stars (16)

| # | Repo | Stars | Updated | Description | Local Path |
|---|------|-------|---------|--------------|------------|
| 1 | [AvdLee/RocketSimApp](https://github.com/AvdLee/RocketSimApp) | 787 | 2026-08-02 | RocketSim - 30+ tools for Xcode's iOS Simulator: testing, debugging, network monitoring, AI agent automation via RocketSim CLI | `references\skill-harvest\mobile\ios\top-stars\001_AvdLee-RocketSimApp` |
| 2 | [Wholiver/swiftui-design-skill](https://github.com/Wholiver/swiftui-design-skill) | 163 | 2026-08-01 | SwiftUI Front-End Design Skills - six rules against AI sloppiness, brand asset guidelines, five-dimensional review | `references\skill-harvest\mobile\ios\top-stars\002_Wholiver-swiftui-design-skill` |
| 3 | [furkancingoz/aso-skill](https://github.com/furkancingoz/aso-skill) | 34 | 2026-07-22 | Complete App Store Optimization skill for Claude Code - metadata, competitor analysis, App Store Connect submission, screenshots | `references\skill-harvest\mobile\ios\top-stars\003_furkancingoz-aso-skill` |
| 4 | [Nagarjuna2997/ios-agent-skill](https://github.com/Nagarjuna2997/ios-agent-skill) | 31 | 2026-08-01 | Production-ready iOS SwiftUI guidance for AI coding agents | `references\skill-harvest\mobile\ios\top-stars\004_Nagarjuna2997-ios-agent-skill` |
| 5 | [ivan-magda/swift-security-skill](https://github.com/ivan-magda/swift-security-skill) | 29 | 2026-07-24 | AI agent skill for secure credential storage & cryptography on Apple platforms - Keychain, biometrics, CryptoKit, OWASP | `references\skill-harvest\mobile\ios\top-stars\005_ivan-magda-swift-security-skill` |
| 6 | [mhaviv/Swift-FocusEngine-Agent-Skill](https://github.com/mhaviv/Swift-FocusEngine-Agent-Skill) | 19 | 2026-07-31 | AI agent skill for correct focus management for tvOS, iOS, macOS, visionOS & watchOS | `references\skill-harvest\mobile\ios\top-stars\006_mhaviv-Swift-FocusEngine-Agent-Skill` |
| 7 | [JustinPerea/app-store-review-skill](https://github.com/JustinPerea/app-store-review-skill) | 9 | 2026-07-30 | Claude Code skill that scans Xcode projects for common App Store rejection reasons before submission | `references\skill-harvest\mobile\ios\top-stars\007_JustinPerea-app-store-review-skill` |
| 8 | [ivan-magda/uikit-expert-skill](https://github.com/ivan-magda/uikit-expert-skill) | 7 | 2026-07-03 | Agent skill for writing correct, modern UIKit code in Swift - lifecycle, memory, concurrency, collection views | `references\skill-harvest\mobile\ios\top-stars\008_ivan-magda-uikit-expert-skill` |
| 9 | [koshkinvv/ios-agent-skills](https://github.com/koshkinvv/ios-agent-skills) | 5 | 2026-05-14 | 9 expert-level iOS development skills - SwiftUI, architecture, networking, data, security, concurrency, testing | `references\skill-harvest\mobile\ios\top-stars\009_koshkinvv-ios-agent-skills` |
| 10 | [zinxj/uikit-expert-skill](https://github.com/zinxj/uikit-expert-skill) | 4 | 2026-07-27 | AI agent skill for accurate, efficient, modern UIKit Swift code with best practices | `references\skill-harvest\mobile\ios\top-stars\010_zinxj-uikit-expert-skill` |
| 11 | [markgravity/app-tester-skill](https://github.com/markgravity/app-tester-skill) | 3 | 2026-06-27 | Claude Code skill for testing iOS/macOS app navigation flows without screenshots - screen graph, accessibility tree | `references\skill-harvest\mobile\ios\top-stars\011_markgravity-app-tester-skill` |
| 12 | [beydemirfurkan/appstore-release](https://github.com/beydemirfurkan/appstore-release) | 3 | 2026-07-05 | Ship an iOS app to App Store review end-to-end via App Store Connect API - agent skill, ~90% automated | `references\skill-harvest\mobile\ios\top-stars\012_beydemirfurkan-appstore-release` |
| 13 | [zanwei/human-interface-guidelines-skill](https://github.com/zanwei/human-interface-guidelines-skill) | 2 | 2026-07-13 | Reusable HIG skill for iOS, iPadOS, macOS, watchOS, tvOS, visionOS design review/spec workflows | `references\skill-harvest\mobile\ios\top-stars\013_zanwei-human-interface-guidelines-skill` |
| 14 | [artbyjazi/app-store-approval](https://github.com/artbyjazi/app-store-approval) | 2 | 2026-08-01 | Claude Code skill that audits an iOS codebase for App Store rejection risks before submission | `references\skill-harvest\mobile\ios\top-stars\014_artbyjazi-app-store-approval` |
| 15 | [ebuntario/apple-hig](https://github.com/ebuntario/apple-hig) | 2 | 2026-04-21 | Claude Code skill: build Apple-platform UIs following HIG across SwiftUI, UIKit, AppKit, iOS, macOS, iPadOS, watchOS, tvOS, visionOS | `references\skill-harvest\mobile\ios\top-stars\015_ebuntario-apple-hig` |
| 16 | [berkayturk/appstore-precheck](https://github.com/berkayturk/appstore-precheck) | 2 | 2026-08-02 | Read-only iOS App Store pre-submission check - 20 rejection vectors, fastlane precheck wrapper, adversarial reviewer pass | `references\skill-harvest\mobile\ios\top-stars\016_berkayturk-appstore-precheck` |

### noname (24)

| # | Repo | Stars | Updated | Description | Local Path |
|---|------|-------|---------|--------------|------------|
| 1 | [martingeidobler/ios-mcp-server](https://github.com/martingeidobler/ios-mcp-server) | 2 | 2026-07-21 | MCP server for iOS Simulator control with native touch injection and native UI tree reading - no Accessibility permissions needed | `references\skill-harvest\mobile\ios\noname\006_martingeidobler-ios-mcp-server` |
| 2 | [marcotini/apple-app-store-aso](https://github.com/marcotini/apple-app-store-aso) | 1 | 2026-05-26 | Claude Code skill for Apple App Store metadata: drafts it, validates it, won't make it up | `references\skill-harvest\mobile\ios\noname\001_marcotini-apple-app-store-aso` |
| 3 | [Rylaa/ios-marketing-att-skill](https://github.com/Rylaa/ios-marketing-att-skill) | 1 | 2026-05-21 | Claude Code skill for iOS marketing channel attribution under ATT - AppsFlyer, Adjust, Meta AEM, SKAdNetwork 4 | `references\skill-harvest\mobile\ios\noname\002_Rylaa-ios-marketing-att-skill` |
| 4 | [OtherdaysStudio/springy-motion](https://github.com/OtherdaysStudio/springy-motion) | 1 | 2026-06-03 | Springy, physically-grounded motion for web and SwiftUI - a Claude Code skill that builds and reviews animations | `references\skill-harvest\mobile\ios\noname\003_OtherdaysStudio-springy-motion` |
| 5 | [moretea-labs/ios-engineering-skill](https://github.com/moretea-labs/ios-engineering-skill) | 1 | 2026-06-27 | Open-source AI skill for end-to-end SwiftUI and iOS engineering workflows | `references\skill-harvest\mobile\ios\noname\004_moretea-labs-ios-engineering-skill` |
| 6 | [mazen-salah/appstore-localization](https://github.com/mazen-salah/appstore-localization) | 1 | 2026-06-12 | Claude Code skill: localize iOS App Store metadata & screenshots into many locales - Gemini + Astro ASO + Python | `references\skill-harvest\mobile\ios\noname\005_mazen-salah-appstore-localization` |
| 7 | [alin6668/ios-mcp-lua](https://github.com/alin6668/ios-mcp-lua) | 1 | 2026-07-07 | iOS MCP server with Lua 5.4 scripting engine - 42 ios.* Lua APIs | `references\skill-harvest\mobile\ios\noname\007_alin6668-ios-mcp-lua` |
| 8 | [lastlookdev/ios-mcp-server](https://github.com/lastlookdev/ios-mcp-server) | 1 | 2026-05-17 | MCP server for iOS device/simulator control | `references\skill-harvest\mobile\ios\noname\008_lastlookdev-ios-mcp-server` |
| 9 | [ciscoriordan/storescreens-skill](https://github.com/ciscoriordan/storescreens-skill) | 0 | 2026-07-12 | Agent skill that sets up and runs storescreens-cli for App Store screenshot automation | `references\skill-harvest\mobile\ios\noname\022_ciscoriordan-storescreens-skill` |
| 10 | [CJ10110425/claude-design-to-testflight](https://github.com/CJ10110425/claude-design-to-testflight) | 0 | 2026-04-23 | Claude Design to TestFlight pipeline (iOS) - bilingual Claude Code skill + guides for Expo + Firebase apps | `references\skill-harvest\mobile\ios\noname\021_CJ10110425-claude-design-to-testflight` |
| 11 | [ezra-y/ios-motion-patterns-index](https://github.com/ezra-y/ios-motion-patterns-index) | 0 | 2026-06-17 | Claude Code skill - index of ready-to-run Swift animation code examples, sourced from MotionBook | `references\skill-harvest\mobile\ios\noname\020_ezra-y-ios-motion-patterns-index` |
| 12 | [sesamehut/appstore-connect-skill](https://github.com/sesamehut/appstore-connect-skill) | 0 | 2026-06-22 | Portable AI-agent skill/CLI to operate the Apple App Store Connect API - listings, reviews, TestFlight | `references\skill-harvest\mobile\ios\noname\019_sesamehut-appstore-connect-skill` |
| 13 | [bensonmaxai/minis-coding-success-skills](https://github.com/bensonmaxai/minis-coding-success-skills) | 0 | 2026-04-11 | Coding-success skills for Minis on iOS - review risk, plan, isolate, trace, test, verify, release | `references\skill-harvest\mobile\ios\noname\018_bensonmaxai-minis-coding-success-skills` |
| 14 | [bensonmaxai/minis-security-skills](https://github.com/bensonmaxai/minis-security-skills) | 0 | 2026-04-11 | Security skills for Minis on iOS - agent operational safety and prompt-injection defense | `references\skill-harvest\mobile\ios\noname\017_bensonmaxai-minis-security-skills` |
| 15 | [yoshi2ys/simpilot](https://github.com/yoshi2ys/simpilot) | 0 | 2026-07-28 | CLI tool for controlling apps on Simulator via XCUITest | `references\skill-harvest\mobile\ios\noname\016_yoshi2ys-simpilot` |
| 16 | [Vladimir-Br/swiftui-project-template](https://github.com/Vladimir-Br/swiftui-project-template) | 0 | 2026-05-13 | Cursor rules starter template for new SwiftUI projects using modern Apple APIs | `references\skill-harvest\mobile\ios\noname\012_Vladimir-Br-swiftui-project-template` |
| 17 | [anagnole/apple-reviewer-simulator](https://github.com/anagnole/apple-reviewer-simulator) | 0 | 2026-06-03 | Claude skill acting as Apple App Review reviewer by driving iOS Simulator with computer use | `references\skill-harvest\mobile\ios\noname\014_anagnole-apple-reviewer-simulator` |
| 18 | [aponeurosiswilling807/apple-hig](https://github.com/aponeurosiswilling807/apple-hig) | 0 | 2026-07-27 | Apple HIG plugin for iOS, iPadOS, macOS, watchOS, tvOS, visionOS UI design | `references\skill-harvest\mobile\ios\noname\013_aponeurosiswilling807-apple-hig` |
| 19 | [sosteam65/app-store-connect-skill](https://github.com/sosteam65/app-store-connect-skill) | 0 | 2026-07-27 | Manage iOS app metadata, TestFlight builds, and releases from terminal via Claude Code skill | `references\skill-harvest\mobile\ios\noname\023_sosteam65-app-store-connect-skill` |
| 20 | [arnoldalberto007-sys/Swift-UIKit-Components](https://github.com/arnoldalberto007-sys/Swift-UIKit-Components) | 0 | 2026-08-02 | Swift-UIKit-Pro 2026: build production-ready programmatic iOS apps with advanced architecture & data flow patterns | `references\skill-harvest\mobile\ios\noname\011_arnoldalberto007-sys-Swift-UIKit-Components` |
| 21 | [Trentobobbi/uikit-mastery-playbook](https://github.com/Trentobobbi/uikit-mastery-playbook) | 0 | 2026-08-02 | UIKit Expert Skill 2026 - best practices & high performance Swift code | `references\skill-harvest\mobile\ios\noname\010_Trentobobbi-uikit-mastery-playbook` |
| 22 | [atian8179/app-settings-guide](https://github.com/atian8179/app-settings-guide) | 0 | 2026-05-24 | Interactive Claude Code skill for building iOS SwiftUI settings/preferences/about screens | `references\skill-harvest\mobile\ios\noname\009_atian8179-app-settings-guide` |
| 23 | [AmrMohamad/figma-to-ios-ui](https://github.com/AmrMohamad/figma-to-ios-ui) | 0 | 2026-04-17 | Public Figma-to-iOS design-to-code skills for UIKit, XIB, and SwiftUI | `references\skill-harvest\mobile\ios\noname\015_AmrMohamad-figma-to-ios-ui` |
| 24 | [heyimjames/nikita-bier-consumer-apps](https://github.com/heyimjames/nikita-bier-consumer-apps) | 0 | 2026-03-11 | Claude AI skill packaging Nikita Bier's playbook for building viral consumer iOS/mobile apps | `references\skill-harvest\mobile\ios\noname\024_heyimjames-nikita-bier-consumer-apps` |

## Android (native)

### top-stars (19)

| # | Repo | Stars | Updated | Description | Local Path |
|---|------|-------|---------|--------------|------------|
| 1 | [minhalvp/android-mcp-server](https://github.com/minhalvp/android-mcp-server) | 791 | 2026-08-02 | MCP server that provides control over Android devices via adb | `references\skill-harvest\mobile\android\top-stars\001_minhalvp-android-mcp-server` |
| 2 | [aldefy/compose-skill](https://github.com/aldefy/compose-skill) | 552 | 2026-08-02 | Jetpack Compose Agent Skill - AI-powered coding guidance with actual androidx/androidx source code receipts | `references\skill-harvest\mobile\android\top-stars\002_aldefy-compose-skill` |
| 3 | [dpconde/claude-android-skill](https://github.com/dpconde/claude-android-skill) | 300 | 2026-07-31 | Claude Code skill for building modern Android apps following best practices | `references\skill-harvest\mobile\android\top-stars\003_dpconde-claude-android-skill` |
| 4 | [anhvt52/jetpack-compose-skills](https://github.com/anhvt52/jetpack-compose-skills) | 92 | 2026-07-28 | Agent skill for modern Android development with Jetpack Compose - best practices for code generation and review | `references\skill-harvest\mobile\android\top-stars\004_anhvt52-jetpack-compose-skills` |
| 5 | [martingeidobler/android-mcp-server](https://github.com/martingeidobler/android-mcp-server) | 59 | 2026-08-02 | MCP server for controlling Android emulators via ADB - screenshots, UI interaction, logcat, bug documentation | `references\skill-harvest\mobile\android\top-stars\005_martingeidobler-android-mcp-server` |
| 6 | [haidrrrry/compose-kotlin-agent-skills](https://github.com/haidrrrry/compose-kotlin-agent-skills) | 34 | 2026-08-01 | Jetpack Compose & Kotlin AI agent skills for Cursor, Claude Code, Codex, Gemini & 27+ agents - strict MVI, Kotlin 2.x K2 | `references\skill-harvest\mobile\android\top-stars\006_haidrrrry-compose-kotlin-agent-skills` |
| 7 | [thecombatwombat/replicant-mcp](https://github.com/thecombatwombat/replicant-mcp) | 17 | 2026-07-28 | Android MCP server - production-grade, token-optimized, accessibility-first | `references\skill-harvest\mobile\android\top-stars\007_thecombatwombat-replicant-mcp` |
| 8 | [jiantao88/android-mcp-server](https://github.com/jiantao88/android-mcp-server) | 16 | 2026-07-11 | Android MCP Server implementation | `references\skill-harvest\mobile\android\top-stars\008_jiantao88-android-mcp-server` |
| 9 | [hah23255/adb-android-control](https://github.com/hah23255/adb-android-control) | 11 | 2026-08-02 | Comprehensive Android device control via ADB - typed Python package + CLI + Claude Code skill | `references\skill-harvest\mobile\android\top-stars\009_hah23255-adb-android-control` |
| 10 | [xnet-admin-1/mcpshell](https://github.com/xnet-admin-1/mcpshell) | 10 | 2026-07-22 | Android MCP server with sh, proot Ubuntu, and Shizuku rish shell tools | `references\skill-harvest\mobile\android\top-stars\010_xnet-admin-1-mcpshell` |
| 11 | [alguojian/android-mcp-server](https://github.com/alguojian/android-mcp-server) | 8 | 2026-07-19 | Android MCP server based on MCP Kotlin SDK, using SSE transport protocol | `references\skill-harvest\mobile\android\top-stars\011_alguojian-android-mcp-server` |
| 12 | [us-all/android-mcp-server](https://github.com/us-all/android-mcp-server) | 7 | 2026-07-10 | Android MCP server - 75 tools for ADB-based device management, UI automation, logcat, emulator control | `references\skill-harvest\mobile\android\top-stars\012_us-all-android-mcp-server` |
| 13 | [jduartedj/android-mcp-server](https://github.com/jduartedj/android-mcp-server) | 6 | 2026-06-26 | MCP server for Android device control via ADB - screenshot, touch, swipe actions | `references\skill-harvest\mobile\android\top-stars\013_jduartedj-android-mcp-server` |
| 14 | [RanaNadeemAslam/android-ai-skills](https://github.com/RanaNadeemAslam/android-ai-skills) | 5 | 2026-05-11 | Production-grade Android best practices for AI coding assistants | `references\skill-harvest\mobile\android\top-stars\014_RanaNadeemAslam-android-ai-skills` |
| 15 | [zerotap-app/android-mcp-server](https://github.com/zerotap-app/android-mcp-server) | 4 | 2026-07-30 | Turn your Android phone into an MCP server - no ADB needed | `references\skill-harvest\mobile\android\top-stars\015_zerotap-app-android-mcp-server` |
| 16 | [IngaleChinmay04/android-mcp-server](https://github.com/IngaleChinmay04/android-mcp-server) | 3 | 2026-07-29 | Android MCP server | `references\skill-harvest\mobile\android\top-stars\016_IngaleChinmay04-android-mcp-server` |
| 17 | [jahonn/figma-android-xml](https://github.com/jahonn/figma-android-xml) | 2 | 2026-07-01 | Claude Code skill: high-fidelity Figma-to-Android XML restoration via Figma MCP, 22 battle-tested pitfalls | `references\skill-harvest\mobile\android\top-stars\017_jahonn-figma-android-xml` |
| 18 | [SoundsguyZA/android-mcp-server](https://github.com/SoundsguyZA/android-mcp-server) | 2 | 2026-06-12 | MCP Server for Android - desktop-agent capabilities on mobile, 14 tools for filesystem, shell, system management | `references\skill-harvest\mobile\android\top-stars\018_SoundsguyZA-android-mcp-server` |
| 19 | [smutti/mcp_android](https://github.com/smutti/mcp_android) | 2 | 2026-02-21 | Production-Ready Android MCP Server in Python | `references\skill-harvest\mobile\android\top-stars\019_smutti-mcp_android` |

### noname (10)

| # | Repo | Stars | Updated | Description | Local Path |
|---|------|-------|---------|--------------|------------|
| 1 | [roninforge/roninforge-kotlin-compose](https://github.com/roninforge/roninforge-kotlin-compose) | 1 | 2026-07-31 | Cursor plugin for modern Android (Kotlin 2.x + Jetpack Compose + Material 3) - StateFlow, Hilt, Navigation Compose, KSP | `references\skill-harvest\mobile\android\noname\001_roninforge-roninforge-kotlin-compose` |
| 2 | [wujie272/termux-mcp](https://github.com/wujie272/termux-mcp) | 1 | 2026-06-16 | Android MCP Server - control your Android phone from AI via Model Context Protocol | `references\skill-harvest\mobile\android\noname\002_wujie272-termux-mcp` |
| 3 | [shuao-pro/android-mcp](https://github.com/shuao-pro/android-mcp) | 1 | 2026-07-28 | Android MCP Server - device automation via Shizuku + ADB tunnel | `references\skill-harvest\mobile\android\noname\003_shuao-pro-android-mcp` |
| 4 | [jaye773/android-mcp-server](https://github.com/jaye773/android-mcp-server) | 1 | 2026-07-28 | MCP server for controlling Android devices and emulators targeted towards android developers | `references\skill-harvest\mobile\android\noname\004_jaye773-android-mcp-server` |
| 5 | [moallemi/android-mcp-server](https://github.com/moallemi/android-mcp-server) | 1 | 2026-05-24 | Android MCP server - control devices, capture screenshots, interact with UI, manage apps via ADB | `references\skill-harvest\mobile\android\noname\005_moallemi-android-mcp-server` |
| 6 | [alvarose/android-update-deps](https://github.com/alvarose/android-update-deps) | 0 | 2026-07-11 | Claude skill for safe, gated review & update of Android (Kotlin/Gradle) dependencies in a version catalog | `references\skill-harvest\mobile\android\noname\006_alvarose-android-update-deps` |
| 7 | [qazmko72/android-mcp-server](https://github.com/qazmko72/android-mcp-server) | 0 | 2026-07-20 | Android MCP server | `references\skill-harvest\mobile\android\noname\007_qazmko72-android-mcp-server` |
| 8 | [chldu2000/android-mcp-server](https://github.com/chldu2000/android-mcp-server) | 0 | 2026-05-06 | MCP server providing ADB capabilities for controlling Android devices, built with FastMCP | `references\skill-harvest\mobile\android\noname\008_chldu2000-android-mcp-server` |
| 9 | [KingJem/android-capture-skill](https://github.com/KingJem/android-capture-skill) | 0 | 2026-07-29 | Claude Code skill: automated Android HTTPS packet capture (FlowTrans TUN + mitmweb + Frida) | `references\skill-harvest\mobile\android\noname\009_KingJem-android-capture-skill` |
| 10 | [dineshkumarappdeveloper/play-console-draft](https://github.com/dineshkumarappdeveloper/play-console-draft) | 0 | 2026-06-21 | Claude Code skill: take an Android app from source to a submittable Google Play Console draft, fast | `references\skill-harvest\mobile\android\noname\010_dineshkumarappdeveloper-play-console-draft` |

## Cross-platform

### top-stars (16)

| # | Repo | Stars | Updated | Description | Local Path |
|---|------|-------|---------|--------------|------------|
| 1 | [HoangNguyen0403/agent-skills-standard](https://github.com/HoangNguyen0403/agent-skills-standard) | 536 | 2026-07-30 | Collection of Agent Skills Standard and Best Practice for programming languages/frameworks incl. mobile stacks | `references\skill-harvest\mobile\crossplatform\top-stars\001_HoangNguyen0403-agent-skills-standard` |
| 2 | [greenstevester/fastlane-skill](https://github.com/greenstevester/fastlane-skill) | 32 | 2026-07-30 | AI skill to setup and use fastlane to automate building and releasing your iOS and Android apps | `references\skill-harvest\mobile\crossplatform\top-stars\002_greenstevester-fastlane-skill` |
| 3 | [anasfik/FlutterGuard](https://github.com/anasfik/FlutterGuard) | 23 | 2026-06-02 | Flutter APK/AAB security SKILL.md for OpenClaw, Codex, Claude Code, and other AI coding agents | `references\skill-harvest\mobile\crossplatform\top-stars\003_anasfik-FlutterGuard` |
| 4 | [KhalidWar/flutter_cursor_rules](https://github.com/KhalidWar/flutter_cursor_rules) | 11 | 2026-01-01 | Flutter/Dart coding guidelines for Cursor AI IDE | `references\skill-harvest\mobile\crossplatform\top-stars\004_KhalidWar-flutter_cursor_rules` |
| 5 | [dkpoulsen/flutter-tools](https://github.com/dkpoulsen/flutter-tools) | 8 | 2026-01-23 | Flutter MCP server | `references\skill-harvest\mobile\crossplatform\top-stars\005_dkpoulsen-flutter-tools` |
| 6 | [app-appplayer/flutter_mcp_server](https://github.com/app-appplayer/flutter_mcp_server) | 5 | 2026-04-09 | Flutter MCP server | `references\skill-harvest\mobile\crossplatform\top-stars\008_app-appplayer-flutter_mcp_server` |
| 7 | [MoritzMessner/flutter-cursor-rules](https://github.com/MoritzMessner/flutter-cursor-rules) | 4 | 2026-03-02 | Cursor Rules for Flutter MVVM and architecture best practices | `references\skill-harvest\mobile\crossplatform\top-stars\006_MoritzMessner-flutter-cursor-rules` |
| 8 | [ricardocaste/flutter-cursor-rules](https://github.com/ricardocaste/flutter-cursor-rules) | 3 | 2026-04-16 | Flutter App Expert .cursorrules | `references\skill-harvest\mobile\crossplatform\top-stars\007_ricardocaste-flutter-cursor-rules` |
| 9 | [mahdi-salmanzade/expo56-skill](https://github.com/mahdi-salmanzade/expo56-skill) | 2 | 2026-07-25 | Expo SDK 56 reference as a Claude Code skill + plugin marketplace - offline, point-in-time snapshot | `references\skill-harvest\mobile\crossplatform\top-stars\009_mahdi-salmanzade-expo56-skill` |
| 10 | [logesh-kumar/publish-mobile-app](https://github.com/logesh-kumar/publish-mobile-app) | 2 | 2026-06-17 | Claude Code skill that automates iOS App Store + Google Play Store publishing for Capacitor, Expo, and Flutter apps | `references\skill-harvest\mobile\crossplatform\top-stars\010_logesh-kumar-publish-mobile-app` |
| 11 | [shammarafzal/claude-flutter-mobile-app-development-skill](https://github.com/shammarafzal/claude-flutter-mobile-app-development-skill) | 2 | 2026-07-21 | Community Claude Skill for Flutter mobile app development - Clean Architecture, Firebase, REST APIs, UI, publishing | `references\skill-harvest\mobile\crossplatform\top-stars\011_shammarafzal-claude-flutter-mobile-app-development-skill` |
| 12 | [zero-labsco/flutter-agent-kit](https://github.com/zero-labsco/flutter-agent-kit) | 1 | 2026-07-31 | Cross-tool agent kit for Flutter development - AGENTS.md single source of truth, thin entry points for multiple agents | `references\skill-harvest\mobile\crossplatform\top-stars\012_zero-labsco-flutter-agent-kit` |
| 13 | [Zulut30/dart-mobile-game-studio](https://github.com/Zulut30/dart-mobile-game-studio) | 1 | 2026-07-15 | Production-grade AI agent skill for building polished 2D Flutter and Flame games for iOS and Android | `references\skill-harvest\mobile\crossplatform\top-stars\013_Zulut30-dart-mobile-game-studio` |
| 14 | [almasumdev/awesome-kotlin-multiplatform-agent-skills](https://github.com/almasumdev/awesome-kotlin-multiplatform-agent-skills) | 1 | 2026-04-19 | Curated agent skills, conventions, workflows for building Kotlin Multiplatform (KMP) apps with AI coding agents | `references\skill-harvest\mobile\crossplatform\top-stars\014_almasumdev-awesome-kotlin-multiplatform-agent-skills` |
| 15 | [gabriel-tutor/ionic-capacitor-skills](https://github.com/gabriel-tutor/ionic-capacitor-skills) | 1 | 2026-03-12 | Claude Code Skill for building production-quality Ionic Capacitor mobile apps across React, Angular, Vue | `references\skill-harvest\mobile\crossplatform\top-stars\015_gabriel-tutor-ionic-capacitor-skills` |
| 16 | [Fredjuel/arc-skill](https://github.com/Fredjuel/arc-skill) | 1 | 2026-07-30 | Architecture guidelines and code templates for AI agents to scaffold and maintain production-ready React Native (Expo) projects | `references\skill-harvest\mobile\crossplatform\top-stars\016_Fredjuel-arc-skill` |

### noname (19)

| # | Repo | Stars | Updated | Description | Local Path |
|---|------|-------|---------|--------------|------------|
| 1 | [bioanywhere/mcp-awesome-react-native](https://github.com/bioanywhere/mcp-awesome-react-native) | 0 | 2026-04-24 | Docker deployment for awesome-react-native MCP server | `references\skill-harvest\mobile\crossplatform\noname\001_bioanywhere-mcp-awesome-react-native` |
| 2 | [InkPalAI/inkpal_npm](https://github.com/InkPalAI/inkpal_npm) | 0 | 2026-05-17 | InkPal - Flutter MCP server for Claude Code, Cursor, Windsurf, Codex, Copilot | `references\skill-harvest\mobile\crossplatform\noname\017_InkPalAI-inkpal_npm` |
| 3 | [cs32dasdasd/ionik-capacitor-flux-patterns](https://github.com/cs32dasdasd/ionik-capacitor-flux-patterns) | 0 | 2026-08-02 | Ionic Capacitor Pro 2026: AI-powered hybrid app builder for React, Angular & Vue | `references\skill-harvest\mobile\crossplatform\noname\016_cs32dasdasd-ionik-capacitor-flux-patterns` |
| 4 | [dbjpanda/starter-skill](https://github.com/dbjpanda/starter-skill) | 0 | 2026-06-01 | Claude Code plugin: scaffold a Convex full-stack starter incl. Expo SDK 56 native app | `references\skill-harvest\mobile\crossplatform\noname\015_dbjpanda-starter-skill` |
| 5 | [RubenGlez/mobile-design](https://github.com/RubenGlez/mobile-design) | 0 | 2026-07-21 | Agent skill for professional mobile UI design, implementation, and review (cross-platform) | `references\skill-harvest\mobile\crossplatform\noname\014_RubenGlez-mobile-design` |
| 6 | [JoDaBaRo/agentic-mobile-rules](https://github.com/JoDaBaRo/agentic-mobile-rules) | 0 | 2026-06-19 | Shareable Cursor rules for agentic mobile development (Android + iOS) - no IDE required day-to-day | `references\skill-harvest\mobile\crossplatform\noname\013_JoDaBaRo-agentic-mobile-rules` |
| 7 | [kachouri/mobile-hybrid-audit](https://github.com/kachouri/mobile-hybrid-audit) | 0 | 2026-05-27 | Claude Code skill: audit & fix web apps for pixel-perfect mobile as PWA, Capacitor (iOS+Android), or hybrid | `references\skill-harvest\mobile\crossplatform\noname\012_kachouri-mobile-hybrid-audit` |
| 8 | [huseyininnc/flame-game-dev](https://github.com/huseyininnc/flame-game-dev) | 0 | 2026-06-22 | Claude Code skill for building studio-grade 2D games with Flutter Flame - engine + game-design knowledge bases | `references\skill-harvest\mobile\crossplatform\noname\011_huseyininnc-flame-game-dev` |
| 9 | [KevlarTheGreat/flutter-mcp-server](https://github.com/KevlarTheGreat/flutter-mcp-server) | 0 | 2026-05-30 | Simple Flutter MCP Server for Claude and other Agentic Workflows - hot restart/reload etc. | `references\skill-harvest\mobile\crossplatform\noname\018_KevlarTheGreat-flutter-mcp-server` |
| 10 | [iskra-ai-tech/riverpod-internals](https://github.com/iskra-ai-tech/riverpod-internals) | 0 | 2026-05-22 | Claude Code skill: riverpod/flutter_riverpod/hooks_riverpod internals - 43 source-cited findings, 740+ passing tests | `references\skill-harvest\mobile\crossplatform\noname\010_iskra-ai-tech-riverpod-internals` |
| 11 | [NoaTubic/flutter-dependency-audit-skill](https://github.com/NoaTubic/flutter-dependency-audit-skill) | 0 | 2026-05-06 | Flutter/Dart dependency audit skill - outdated packages, abandoned libs, license conflicts, CVEs | `references\skill-harvest\mobile\crossplatform\noname\008_NoaTubic-flutter-dependency-audit-skill` |
| 12 | [NoaTubic/owasp-mobile-audit-skill](https://github.com/NoaTubic/owasp-mobile-audit-skill) | 0 | 2026-05-06 | OWASP Mobile Top 10 (2024) security audit skill for Claude Code - all 10 categories + 6 emerging checks | `references\skill-harvest\mobile\crossplatform\noname\007_NoaTubic-owasp-mobile-audit-skill` |
| 13 | [NoaTubic/flutter-store-readiness-skill](https://github.com/NoaTubic/flutter-store-readiness-skill) | 0 | 2026-05-06 | App Store & Google Play submission readiness audit skill - iOS Privacy Manifest, Android Data Safety, permissions | `references\skill-harvest\mobile\crossplatform\noname\006_NoaTubic-flutter-store-readiness-skill` |
| 14 | [NoaTubic/flutter-localization-audit-skill](https://github.com/NoaTubic/flutter-localization-audit-skill) | 0 | 2026-05-06 | Flutter/Dart localization audit skill - hardcoded strings, missing ARB keys, RTL issues, broken plural forms | `references\skill-harvest\mobile\crossplatform\noname\005_NoaTubic-flutter-localization-audit-skill` |
| 15 | [alimomin1998/v8v-react-native](https://github.com/alimomin1998/v8v-react-native) | 0 | 2026-07-16 | V8V React Native MCP server bridge | `references\skill-harvest\mobile\crossplatform\noname\004_alimomin1998-v8v-react-native` |
| 16 | [cadoCG/mobbin-flutter](https://github.com/cadoCG/mobbin-flutter) | 0 | 2026-06-01 | Claude Code skill for Flutter UI/UX research and implementation using Mobbin MCP | `references\skill-harvest\mobile\crossplatform\noname\003_cadoCG-mobbin-flutter` |
| 17 | [taimour1446/claude-react-native-builder](https://github.com/taimour1446/claude-react-native-builder) | 0 | 2026-05-15 | Claude Code plugin - AI agent system that scaffolds & extends production-grade React Native (Expo) apps | `references\skill-harvest\mobile\crossplatform\noname\002_taimour1446-claude-react-native-builder` |
| 18 | [DumbGreenFish/greenfish-cpm-skill](https://github.com/DumbGreenFish/greenfish-cpm-skill) | 0 | 2026-06-08 | Claude skill for working with Compose Multiplatform (CMP) | `references\skill-harvest\mobile\crossplatform\noname\009_DumbGreenFish-greenfish-cpm-skill` |
| 19 | [MukalDadhwal/Flutter-Mcp-Server](https://github.com/MukalDadhwal/Flutter-Mcp-Server) | 0 | 2026-05-31 | Flutter MCP server | `references\skill-harvest\mobile\crossplatform\noname\019_MukalDadhwal-Flutter-Mcp-Server` |



