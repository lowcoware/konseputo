# Skill Harvest Index

AI-agent design/frontend skill repos harvested from GitHub via `gh search repos` (gh CLI, account lowcoware). Two buckets: **top-stars** (highest-starred, genuinely design/frontend-relevant) and **noname** (low-star, recently pushed/updated — approximating "obscure but active").

Harvested: 2026-08-03 (session date per environment).


**Totals: top-stars = 40 / target 50 · noname = 68 / target ~100.**


## Why the counts fall short of the 50/100 targets

Ran 60+ distinct `gh search repos` queries (topic:claude-skill, keyword combos with design/frontend/tailwind/css/component/landing/dashboard/animation/figma/vue/react/flutter/swiftui/etc., plus mining 8 curated "awesome-claude-skills"/"awesome-agent-skills"/"awesome-design-skills" README lists for additional links) across both `--sort stars` and `--sort updated`. After deduping ~340 unique repos and filtering to genuine visual-design/frontend relevance (excluding SEO, marketing-copy, PPT-only, fortune-telling, resume/job-hunt, video-prompt, and other off-topic "skill" repos that matched keywords incidentally):

- **top-stars** genuinely relevant candidates topped out at 40. Above that star count, remaining hits were either duplicates already counted, generic "awesome-claude-skills" curation lists with no design focus, or off-topic skill collections (SEO/marketing/legal/finance) that happened to rank high.
- **noname** genuinely relevant candidates (stars < 50, pushed within ~90-120 days) topped out at 68 after removing: (a) a large spam/fork cluster of near-identical `shadcn-skills-design-starter` template forks (15+ near-zero-content clones by different accounts, kept only 2 representative ones), (b) a cluster of auto-generated "rNN-<source>-awesome-*-skills-<niche>" repos that are bulk-derived slices of other awesome-lists (not genuine skills), (c) Flutter "practice"/"clone" portfolio repos that aren't agent-skill format at all, and (d) repos with descriptions using "design" in a non-visual sense (financial analysis, GTM cadence, tender documents, etc.).
- One noname candidate (`053_onelastkisssssss-figma-to-code-agent`) cloned as a genuinely empty GitHub repo (0 commits) and was dropped.
- No hard GitHub API rate-limit was hit (search API stayed within the 30/min budget throughout via short sleeps between calls; core API had 4991/5000 remaining at last check). The shortfall is a relevance/quality ceiling, not a rate-limit ceiling.

## top-stars (ranked by stargazers)

| # | Repo | Stars | Description | Local path |
|---|------|-------|-------------|------------|
| 001 | [anthropics/skills](https://github.com/anthropics/skills) | 165807 | Official Anthropic skills repo — harvest web-artifacts-builder, canvas-design, brand-guidelines subdirs | `top-stars/001_anthropics-skills` |
| 002 | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 112694 | UI/UX design patterns and best practices skill | `top-stars/002_nextlevelbuilder-ui-ux-pro-max-skill` |
| 003 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 70415 | High-agency frontend skill for design taste, tunable motion/density | `top-stars/003_Leonxlnx-taste-skill` |
| 004 | [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 26769 | Animation-rich HTML presentation generator | `top-stars/004_zarazhangrui-frontend-slides` |
| 005 | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 22337 | HTML-native design skill, prototypes/slides/animation | `top-stars/005_alchaincyf-huashu-design` |
| 006 | [nexu-io/html-anything](https://github.com/nexu-io/html-anything) | 8047 | Agentic HTML editor, 75 skills across surfaces | `top-stars/006_nexu-io-html-anything` |
| 007 | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | 7893 | Agent skills for Stitch MCP (UI generation) | `top-stars/007_google-labs-code-stitch-skills` |
| 008 | [Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill) | 7050 | draw.io diagram generation from natural language | `top-stars/008_Agents365-ai-drawio-skill` |
| 009 | [Cocoon-AI/architecture-diagram-generator](https://github.com/Cocoon-AI/architecture-diagram-generator) | 6779 | Dark-themed HTML/SVG architecture diagrams | `top-stars/009_Cocoon-AI-architecture-diagram-generator` |
| 010 | [AvdLee/SwiftUI-Agent-Skill](https://github.com/AvdLee/SwiftUI-Agent-Skill) | 3357 | SwiftUI best practices agent skill | `top-stars/010_AvdLee-SwiftUI-Agent-Skill` |
| 011 | [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) | 2140 | Registry of 67 design system SKILL.md/DESIGN.md files | `top-stars/011_bergside-awesome-design-skills` |
| 012 | [nolangz/pixel2motion](https://github.com/nolangz/pixel2motion) | 1803 | Raster logo to SVG animation skill | `top-stars/012_nolangz-pixel2motion` |
| 013 | [dominikmartn/hue](https://github.com/dominikmartn/hue) | 779 | Brand-to-design-system skill | `top-stars/013_dominikmartn-hue` |
| 014 | [ZhangHanDong/makepad-skills](https://github.com/ZhangHanDong/makepad-skills) | 745 | Makepad UI dev skills for Rust apps | `top-stars/014_ZhangHanDong-makepad-skills` |
| 015 | [xiaopu-ai/web-design](https://github.com/xiaopu-ai/web-design) | 603 | Web page design skill, spec-first | `top-stars/015_xiaopu-ai-web-design` |
| 016 | [angular/skills](https://github.com/angular/skills) | 593 | Angular component/architecture skill | `top-stars/016_angular-skills` |
| 017 | [aldefy/compose-skill](https://github.com/aldefy/compose-skill) | 552 | Jetpack Compose Agent Skill | `top-stars/017_aldefy-compose-skill` |
| 018 | [danilo-znamerovszkij/draw-your-font](https://github.com/danilo-znamerovszkij/draw-your-font) | 535 | Handwriting photo to font generator | `top-stars/018_danilo-znamerovszkij-draw-your-font` |
| 019 | [rampstackco/claude-skills](https://github.com/rampstackco/claude-skills) | 510 | Full website lifecycle skills incl. design | `top-stars/019_rampstackco-claude-skills` |
| 020 | [ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills) | 476 | 300+ HIG/Material/WCAG design rules | `top-stars/020_ehmo-platform-design-skills` |
| 021 | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | 378 | Anti-AI-slop design skill for Claude/Cursor | `top-stars/021_superdesigndev-superdesign-skill` |
| 022 | [zexuanw958-svg/travel-plan-viz](https://github.com/zexuanw958-svg/travel-plan-viz) | 307 | Single-file HTML travel itinerary visualizer | `top-stars/022_zexuanw958-svg-travel-plan-viz` |
| 023 | [dpconde/claude-android-skill](https://github.com/dpconde/claude-android-skill) | 300 | Modern Android app building best practices | `top-stars/023_dpconde-claude-android-skill` |
| 024 | [chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill) | 217 | D3.js visualization skill | `top-stars/024_chrisvoncsefalvay-claude-d3js-skill` |
| 025 | [JayZeeDesign/awesome-claude-skills](https://github.com/JayZeeDesign/awesome-claude-skills) | 170 | Curated Claude skills list | `top-stars/025_JayZeeDesign-awesome-claude-skills` |
| 026 | [Wholiver/swiftui-design-skill](https://github.com/Wholiver/swiftui-design-skill) | 163 | SwiftUI front-end design skill, anti-AI-slop | `top-stars/026_Wholiver-swiftui-design-skill` |
| 027 | [resend/resend-skills](https://github.com/resend/resend-skills) | 159 | React Email component + email design skills | `top-stars/027_resend-resend-skills` |
| 028 | [uxKero/anydesign](https://github.com/uxKero/anydesign) | 149 | Image/URL/Figma to design.md + component inventory | `top-stars/028_uxKero-anydesign` |
| 029 | [csthink/dashmotion](https://github.com/csthink/dashmotion) | 149 | Animated technical diagrams, self-contained HTML/SVG | `top-stars/029_csthink-dashmotion` |
| 030 | [axiaoge2/Apple-Hig-Designer](https://github.com/axiaoge2/Apple-Hig-Designer) | 137 | Apple HIG interface design skill | `top-stars/030_axiaoge2-Apple-Hig-Designer` |
| 031 | [wentong2022-arch/flowforge-skill](https://github.com/wentong2022-arch/flowforge-skill) | 133 | draw.io diagram generation skill | `top-stars/031_wentong2022-arch-flowforge-skill` |
| 032 | [raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor) | 99 | Apple HIG reference + cross-framework UI audit | `top-stars/032_raintree-technology-hig-doctor` |
| 033 | [anhvt52/jetpack-compose-skills](https://github.com/anhvt52/jetpack-compose-skills) | 92 | Jetpack Compose modern Android dev skill | `top-stars/033_anhvt52-jetpack-compose-skills` |
| 034 | [bamzc/claude-skills-frontend](https://github.com/bamzc/claude-skills-frontend) | 72 | General frontend dev Claude Skills collection | `top-stars/034_bamzc-claude-skills-frontend` |
| 035 | [dembrandt/dembrandt-skills](https://github.com/dembrandt/dembrandt-skills) | 33 | UX and design-system skills: hierarchy, typography, a11y | `top-stars/035_dembrandt-dembrandt-skills` |
| 036 | [ilikescience/design-tokens-skill](https://github.com/ilikescience/design-tokens-skill) | 14 | Claude skill for DTCG design tokens format | `top-stars/036_ilikescience-design-tokens-skill` |
| 037 | [efremidze/swift-patterns-skill](https://github.com/efremidze/swift-patterns-skill) | 9 | Modern Swift/SwiftUI best practices skill | `top-stars/037_efremidze-swift-patterns-skill` |
| 038 | [antdv-next/skills](https://github.com/antdv-next/skills) | 9 | Antdv Next Vue3 component library skills | `top-stars/038_antdv-next-skills` |
| 039 | [Wcc723/claude-skill-design-gallery](https://github.com/Wcc723/claude-skill-design-gallery) | 6 | Claude skill design gallery | `top-stars/039_Wcc723-claude-skill-design-gallery` |
| 040 | [alexanderop/claude-skill-vue-development](https://github.com/alexanderop/claude-skill-vue-development) | 27 | Vue.js dev skill with TypeScript, testing-first | `top-stars/040_alexanderop-claude-skill-vue-development` |

## noname (recently active, low star count)

| # | Repo | Stars | Last pushed | Description | Local path |
|---|------|-------|-------------|--------------|------------|
| 001 | [agenticluke/claude-skill-frontend-slides-plus](https://github.com/agenticluke/claude-skill-frontend-slides-plus) | 0 | 2026-08-02 | Improved fork of affaan-m/ECC: frontend-slides skill for Claude Code. Credit to @affaan-m. | `noname/001_agenticluke-claude-skill-frontend-slides-plus` |
| 002 | [agenticluke/claude-skill-frontend-patterns-plus](https://github.com/agenticluke/claude-skill-frontend-patterns-plus) | 0 | 2026-08-02 | Improved fork of affaan-m/ECC: frontend-patterns skill for Claude Code. Credit to @affaan-m. | `noname/002_agenticluke-claude-skill-frontend-patterns-plus` |
| 003 | [FranCiccio81/figma-mcp-skills](https://github.com/FranCiccio81/figma-mcp-skills) | 0 | 2026-08-02 |  | `noname/003_FranCiccio81-figma-mcp-skills` |
| 004 | [lk0991/design-tokens-skill](https://github.com/lk0991/design-tokens-skill) | 0 | 2026-08-02 |  | `noname/004_lk0991-design-tokens-skill` |
| 005 | [genapohub/ux-design-guide](https://github.com/genapohub/ux-design-guide) | 0 | 2026-08-01 | AI Agent Skill：UI/UX设计师方案产出指南，自动识别 5 类设计场景，按清单产出交互设计/设计系统/组件规范/无障碍方案等完整交付物。兼容 WorkBuddy / Codex / Trae / Cursor。 | `noname/005_genapohub-ux-design-guide` |
| 006 | [Nairon-AI/nairon-design](https://github.com/Nairon-AI/nairon-design) | 3 | 2026-07-31 | Design Engineering Resources (Component Libraries, SKILLS and more) - Build Software with Taste | `noname/006_Nairon-AI-nairon-design` |
| 007 | [JamesFehon-DTA/claude-civictheme-skills](https://github.com/JamesFehon-DTA/claude-civictheme-skills) | 0 | 2026-07-31 | A modular repository of Claude skills designed for deterministic CivicTheme component development and sub-theme maintenance. | `noname/007_JamesFehon-DTA-claude-civictheme-skills` |
| 008 | [amu-beta/work](https://github.com/amu-beta/work) | 0 | 2026-07-31 | Photo-to-poster design skill 选择 Public | `noname/008_amu-beta-work` |
| 009 | [muthuishere/agent-skill-log-ui](https://github.com/muthuishere/agent-skill-log-ui) | 0 | 2026-07-29 | Skill analytics dashboard (agent-skill-log) | `noname/009_muthuishere-agent-skill-log-ui` |
| 010 | [dwk-123/alfrex-design](https://github.com/dwk-123/alfrex-design) | 0 | 2026-07-29 | Alfrex USA design system and shareable shadcn skills | `noname/010_dwk-123-alfrex-design` |
| 011 | [Lilia-Luo/poster-design-skill](https://github.com/Lilia-Luo/poster-design-skill) | 2 | 2026-07-29 | A visual-first poster design skill with hybrid publication workflows for Codex and Claude Code. | `noname/011_Lilia-Luo-poster-design-skill` |
| 012 | [DanNoblettPS/OK-Alone-Claude-Skill-Design](https://github.com/DanNoblettPS/OK-Alone-Claude-Skill-Design) | 0 | 2026-07-24 |  | `noname/012_DanNoblettPS-OK-Alone-Claude-Skill-Design` |
| 013 | [raju-bd/Oracle-apex-ut-UI.skill](https://github.com/raju-bd/Oracle-apex-ut-UI.skill) | 0 | 2026-07-22 | Design-token skill for Oracle APEX Universal Theme 42 (Vita) — 300+ CSS tokens, 45 component types, and a new Theme Style, built for AI-assisted UI. | `noname/013_raju-bd-Oracle-apex-ut-UI.skill` |
| 014 | [Zedan2552000/skill-ui_10_foot_design](https://github.com/Zedan2552000/skill-ui_10_foot_design) | 0 | 2026-07-18 | Antigravity 2.0 AI Agent Skill: ui_10_foot_design | `noname/014_Zedan2552000-skill-ui_10_foot_design` |
| 015 | [pangsaxo-ops/shadcn-skills-design-starter](https://github.com/pangsaxo-ops/shadcn-skills-design-starter) | 0 | 2026-07-18 |  | `noname/015_pangsaxo-ops-shadcn-skills-design-starter` |
| 016 | [duangsamonpd-ball/shadcn-skills-design-starter-ball](https://github.com/duangsamonpd-ball/shadcn-skills-design-starter-ball) | 0 | 2026-07-15 |  | `noname/016_duangsamonpd-ball-shadcn-skills-design-starter-ball` |
| 018 | [mrtimberme-bot/claude-library](https://github.com/mrtimberme-bot/claude-library) | 0 | 2026-07-05 | Persoonlijke Claude component library — skills, agents, memory, tools & meer | `noname/018_mrtimberme-bot-claude-library` |
| 019 | [abisong/ai-edge-storybook](https://github.com/abisong/ai-edge-storybook) | 0 | 2026-07-05 | Storybook Agent Skill for Google AI Edge Gallery | `noname/019_abisong-ai-edge-storybook` |
| 020 | [Volleyball01/adaptive-html-artifact-skill](https://github.com/Volleyball01/adaptive-html-artifact-skill) | 0 | 2026-07-04 | A meta-skill for adaptive HTML-based artifacts, presentations, guides, dashboards, generators, and portfolio showcases. | `noname/020_Volleyball01-adaptive-html-artifact-skill` |
| 022 | [henryhb1105-arch/openclaw-html-artifact-skills](https://github.com/henryhb1105-arch/openclaw-html-artifact-skills) | 0 | 2026-06-26 | Sanitized OpenClaw skills for HTML typesetting and HTML-to-PDF export | `noname/022_henryhb1105-arch-openclaw-html-artifact-skills` |
| 023 | [jkampara/DMS-Design-Tokens-Skill](https://github.com/jkampara/DMS-Design-Tokens-Skill) | 0 | 2026-06-25 | This repo holds information on how to use DMS Design token skill and gallery of usecases | `noname/023_jkampara-DMS-Design-Tokens-Skill` |
| 024 | [bureaulabs/figma-token-bridge](https://github.com/bureaulabs/figma-token-bridge) | 0 | 2026-06-18 | A Figma MCP skill that reconciles design tokens between your codebase and Figma variables  | `noname/024_bureaulabs-figma-token-bridge` |
| 026 | [peterfei/ai-agent-frontend-dev](https://github.com/peterfei/ai-agent-frontend-dev) | 0 | 2026-06-12 | 前端开发 Agent Skill — UI 实现、组件构建、交互设计、性能优化 | `noname/026_peterfei-ai-agent-frontend-dev` |
| 027 | [maokaki0511/stroke-svg-animation-skill](https://github.com/maokaki0511/stroke-svg-animation-skill) | 0 | 2026-06-11 |  | `noname/027_maokaki0511-stroke-svg-animation-skill` |
| 028 | [InDreamer/claude-html-artifacts-skill](https://github.com/InDreamer/claude-html-artifacts-skill) | 0 | 2026-06-11 | Claude HTML artifacts skill | `noname/028_InDreamer-claude-html-artifacts-skill` |
| 029 | [tizsabrine/claude-skills-design](https://github.com/tizsabrine/claude-skills-design) | 0 | 2026-06-09 | Claude skills for product designers  | `noname/029_tizsabrine-claude-skills-design` |
| 030 | [DumbGreenFish/greenfish-cpm-skill](https://github.com/DumbGreenFish/greenfish-cpm-skill) | 0 | 2026-06-08 | A Claude skill designed for working with Compose Multiplatform, based on my own experience using the Claude Code and CMP combination. | `noname/030_DumbGreenFish-greenfish-cpm-skill` |
| 031 | [InDreamer/html-artifacts-skill](https://github.com/InDreamer/html-artifacts-skill) | 0 | 2026-06-07 |  | `noname/031_InDreamer-html-artifacts-skill` |
| 032 | [RhiaLu/ClaudeSkill_Design](https://github.com/RhiaLu/ClaudeSkill_Design) | 0 | 2026-06-07 |  | `noname/032_RhiaLu-ClaudeSkill_Design` |
| 033 | [petpetpeter/agent-skills-ui](https://github.com/petpetpeter/agent-skills-ui) | 1 | 2026-06-03 |  | `noname/033_petpetpeter-agent-skills-ui` |
| 034 | [yanjianzhang/html-artifact-skill](https://github.com/yanjianzhang/html-artifact-skill) | 1 | 2026-05-30 | Cursor skill for self-contained HTML artifacts | `noname/034_yanjianzhang-html-artifact-skill` |
| 035 | [erick-ol/claude-skill-tailwind-to-css](https://github.com/erick-ol/claude-skill-tailwind-to-css) | 2 | 2026-05-27 | A Claude Code skill that converts Tailwind CSS utility classes in React or HTML components into CSS Modules | `noname/035_erick-ol-claude-skill-tailwind-to-css` |
| 036 | [CodewithNayan/figma-to-code-agent](https://github.com/CodewithNayan/figma-to-code-agent) | 0 | 2026-05-26 |  | `noname/036_CodewithNayan-figma-to-code-agent` |
| 037 | [isnardokun/opencode-dashboard-skills](https://github.com/isnardokun/opencode-dashboard-skills) | 0 | 2026-05-21 | Professional dashboard design skills for AI coding agents — SKILL.md + DESIGN.md + examples | `noname/037_isnardokun-opencode-dashboard-skills` |
| 038 | [hulu204/creating-html-artifacts-skill](https://github.com/hulu204/creating-html-artifacts-skill) | 0 | 2026-05-20 | A general-purpose agent skill that combines Markdown source with reviewable HTML artifacts to reduce human-in-the-loop friction in AI-assisted decision-making | `noname/038_hulu204-creating-html-artifacts-skill` |
| 039 | [Karanjot786/agent-skills-UI](https://github.com/Karanjot786/agent-skills-UI) | 1 | 2026-05-17 |  | `noname/039_Karanjot786-agent-skills-UI` |
| 040 | [cat0825/html-artifact-skill](https://github.com/cat0825/html-artifact-skill) | 3 | 2026-05-14 | A Craft Agent skill that generates beautiful HTML artifacts with magazine-grade design — serif headings, sans-serif body, monospace metadata, 5 color themes, WebGL fluid backgrounds, Lucide icons, and Motion One animations. | `noname/040_cat0825-html-artifact-skill` |
| 041 | [Mel0day/html-artifact-skill](https://github.com/Mel0day/html-artifact-skill) | 4 | 2026-05-13 | Reading-first self-contained HTML artifact skill for complex Human-Agent output | `noname/041_Mel0day-html-artifact-skill` |
| 042 | [RodriguesCosta/html-artifact-skill](https://github.com/RodriguesCosta/html-artifact-skill) | 1 | 2026-05-13 | Claude Code skill that creates rich single-file HTML artifacts through a short discovery conversation. Opens output in a Maestri portal. | `noname/042_RodriguesCosta-html-artifact-skill` |
| 043 | [SrWhiskers/css-animations-skill-claude](https://github.com/SrWhiskers/css-animations-skill-claude) | 1 | 2026-05-11 | Claude Code skill for lightweight CSS animations — keyframes, transitions, spinners, skeletons, hover effects, and microinteractions without JavaScript dependencies | `noname/043_SrWhiskers-css-animations-skill-claude` |
| 044 | [minsu42/claude-skill-design-md](https://github.com/minsu42/claude-skill-design-md) | 1 | 2026-05-11 | Claude Code skill that auto-generates DESIGN.md from screenshots following the google-labs-code/design.md spec | `noname/044_minsu42-claude-skill-design-md` |
| 045 | [luuu-uuu/figma-cursor-skill](https://github.com/luuu-uuu/figma-cursor-skill) | 0 | 2026-05-09 | figma mcp skill | `noname/045_luuu-uuu-figma-cursor-skill` |
| 046 | [moesuito/claude-skill-design-md](https://github.com/moesuito/claude-skill-design-md) | 2 | 2026-05-06 | Claude Code skill: turn any visual identity into a paired DESIGN.md + design-showcase.html. Built on the awesome-design-md format. | `noname/046_moesuito-claude-skill-design-md` |
| 047 | [docusphere/claude-skill-motion-graphics](https://github.com/docusphere/claude-skill-motion-graphics) | 1 | 2026-07-23 | Claude Code skill for producing AI-generated motion graphics videos from a beat sheet. Style locking, Higgsfield CLI generation, Remotion assembly. | `noname/047_docusphere-claude-skill-motion-graphics` |
| 048 | [yuheng-888/codex-skill-design-md](https://github.com/yuheng-888/codex-skill-design-md) | 0 | 2026-07-08 |  | `noname/048_yuheng-888-codex-skill-design-md` |
| 049 | [woutersf/claude-skill-mockup-project](https://github.com/woutersf/claude-skill-mockup-project) | 0 | 2026-06-24 | claude-skill-mockup-project | `noname/049_woutersf-claude-skill-mockup-project` |
| 050 | [chentao326/codex-skill-design-md](https://github.com/chentao326/codex-skill-design-md) | 0 | 2026-05-27 | Codex skill: 71 个知名品牌 DESIGN.md 设计系统参考（Airbnb、Apple、Stripe、Figma 等） | `noname/050_chentao326-codex-skill-design-md` |
| 051 | [suli062777-oss/figma-rebuild](https://github.com/suli062777-oss/figma-rebuild) | 0 | 2026-05-23 | figma, codex-skill, design-systems, ui-design, image-to-figma, design-reconstruction | `noname/051_suli062777-oss-figma-rebuild` |
| 052 | [HarshK99/claude-skills-mockup](https://github.com/HarshK99/claude-skills-mockup) | 0 | 2026-05-03 |  | `noname/052_HarshK99-claude-skills-mockup` |
| 053 | [onelastkisssssss/figma-to-code-agent](https://github.com/onelastkisssssss/figma-to-code-agent) | 0 | 2026-05-02 | AI Figma to React agent | *(skipped — empty repo, see note above)* |
| 054 | [guilhermefriol/claude-skills-design](https://github.com/guilhermefriol/claude-skills-design) | 0 | 2026-05-02 | Skills de design e UX para Claude Code: design-gf (auditoria visual via Playwright) + reframe-gf (seleção de biblioteca UI). Mobile-first, stack-agnostic. | `noname/054_guilhermefriol-claude-skills-design` |
| 055 | [ribhuchawla/devrev-skill-ui](https://github.com/ribhuchawla/devrev-skill-ui) | 0 | 2026-04-27 | DevRev agent skill: ui. Part of ribhuchawla/devrev-public-skills. | `noname/055_ribhuchawla-devrev-skill-ui` |
| 056 | [ericxyz86/claude-skill-design-md](https://github.com/ericxyz86/claude-skill-design-md) | 2 | 2026-04-25 | Claude Code skill that drafts and lints DESIGN.md files using the @google/design.md spec. | `noname/056_ericxyz86-claude-skill-design-md` |
| 057 | [Naimehossein77/claude-flutter-ui-skills](https://github.com/Naimehossein77/claude-flutter-ui-skills) | 2 | 2026-04-20 | Pixel-perfect Flutter UI, smooth animations, GoRouter navigation, and enforced state management rules. Prepared by DevCenter | `noname/057_Naimehossein77-claude-flutter-ui-skills` |
| 058 | [Harrisonford-ss/claude-skill-frontend-slides](https://github.com/Harrisonford-ss/claude-skill-frontend-slides) | 0 | 2026-04-20 | Claude Code Skill · 电影级 HTML PPT 生成器（含 cinematic 模式实战案例） | `noname/058_Harrisonford-ss-claude-skill-frontend-slides` |
| 059 | [mikeandyer/claude-skills-frontend-logic-share](https://github.com/mikeandyer/claude-skills-frontend-logic-share) | 1 | 2026-04-18 | Selected Claude skills for frontend, logic, and clarification workflows | `noname/059_mikeandyer-claude-skills-frontend-logic-share` |
| 060 | [franciscobeccaria/claude-skill-design-system](https://github.com/franciscobeccaria/claude-skill-design-system) | 1 | 2026-04-14 | Claude Code skill — generates DESIGN.md + living component library page | `noname/060_franciscobeccaria-claude-skill-design-system` |
| 061 | [zzy1099207684/web-skills-for-codex-claude_code](https://github.com/zzy1099207684/web-skills-for-codex-claude_code) | 1 | 2026-04-09 | web-skills-for-codex-claude_code, A small set of Web-focused Codex skills designed to complement oh-my-codex workflows. It provides web-ralplan for Web test planning and web-ralph for browser-verified execution. | `noname/061_zzy1099207684-web-skills-for-codex-claude_code` |
| 062 | [fruskate-clawdia/flutter-ui-skill](https://github.com/fruskate-clawdia/flutter-ui-skill) | 1 | 2026-04-04 | Flutter UI Design skill for Claude Code — Material 3, animations, typography, colors | `noname/062_fruskate-clawdia-flutter-ui-skill` |
| 063 | [Mediainvita/claude-skill-design-critic](https://github.com/Mediainvita/claude-skill-design-critic) | 0 | 2026-04-01 | Adversarial UX-Reviewer Skill fuer Claude Code - Automatische visuelle Design-Reviews via Playwright mit Self-Improvement Loop | `noname/063_Mediainvita-claude-skill-design-critic` |
| 064 | [zuocharles/vibe-coded-website-review](https://github.com/zuocharles/vibe-coded-website-review) | 0 | 2026-03-29 | Claude Skill: Design review checklist for avoiding common vibe-coded website mistakes (from YC Design Review) | `noname/064_zuocharles-vibe-coded-website-review` |
| 065 | [jelaludo/claude-skill-typography](https://github.com/jelaludo/claude-skill-typography) | 0 | 2026-03-27 | Claude Code skill — research-grounded typography for web, PDF, email. Latin + Japanese. Generative + review modes. | `noname/065_jelaludo-claude-skill-typography` |
| 066 | [ElleShin/-Buzzvil-ads-center-prototypekit](https://github.com/ElleShin/-Buzzvil-ads-center-prototypekit) | 0 | 2026-03-24 | Buzzvil Ads Center UI prototyping kit with Claude Skill — design tokens, component patterns, and layout references for consistent code generation. | `noname/066_ElleShin--Buzzvil-ads-center-prototypekit` |
| 067 | [lewiscutey/figma-to-code-agent](https://github.com/lewiscutey/figma-to-code-agent) | 1 | 2026-03-17 | Convert Figma designs to production-ready React/Vue components. Supports CSS Modules, Tailwind, and plain CSS. | `noname/067_lewiscutey-figma-to-code-agent` |
| 068 | [CuriousAquarius/claude-skill-frontend-design](https://github.com/CuriousAquarius/claude-skill-frontend-design) | 0 | 2026-03-14 |  | `noname/068_CuriousAquarius-claude-skill-frontend-design` |
| 069 | [msylvester/ClaudeSkill-Design-Doc](https://github.com/msylvester/ClaudeSkill-Design-Doc) | 0 | 2026-03-20 | This repo provides the claude skill to update the design doc for a repo  | `noname/069_msylvester-ClaudeSkill-Design-Doc` |
| 070 | [AhmedHamadto/my-skills](https://github.com/AhmedHamadto/my-skills) | 1 | 2026-02-21 | Custom AI agent skills — ui-craftsman (Framer Motion web pages) and build (universal prompt enhancer) | `noname/070_AhmedHamadto-my-skills` |
| 071 | [triptease/claude-skill-design-system](https://github.com/triptease/claude-skill-design-system) | 2 | 2026-01-20 | Claude Code skill for building customer-facing web applications using the Triptease Design System | `noname/071_triptease-claude-skill-design-system` |
| 072 | [chetusangolgi/figma-to-code-agent](https://github.com/chetusangolgi/figma-to-code-agent) | 0 | 2026-03-15 |  | `noname/072_chetusangolgi-figma-to-code-agent` |

## Curated "awesome" lists mined for candidates (not harvested as skills themselves, used only for discovery)

- ComposioHQ/awesome-claude-skills
- VoltAgent/awesome-agent-skills
- travisvn/awesome-claude-skills
- karanb192/awesome-claude-skills
- heilcheng/awesome-agent-skills
- futantan/agent-skills.md
- bergside/awesome-design-skills (this one WAS harvested — see top-stars #011, it is itself a registry of 67 design skills bundled in the repo)
- VoltAgent/awesome-design-md (DESIGN.md protocol spec repo, not a skill list — not harvested)

## Notable skipped / excluded repos (irrelevant to design/frontend despite matching search keywords)

- Most of the top 100 highest-starred `topic:claude-skill` repos overall (e.g. affaan-m/ECC, thedotmack/claude-mem, coreyhaines31/marketingskills, mukul975/Anthropic-Cybersecurity-Skills, AgriciDaniel/claude-seo, K-Dense-AI/scientific-agent-skills, zhaoxuya520/reverse-skill) — memory/context tooling, SEO, marketing copy, cybersecurity, academic research, game-dev, etc. — not design/frontend.
- `bazi-ziwei-skill`, fortune-telling/astrology skills — off scope even though some generate HTML posters.
- PPT/slide-deck generators not focused on frontend code (e.g. general "make me a PPT" skills) — kept only the ones explicitly about HTML/CSS/animation-driven slide generation (zarazhangrui/frontend-slides).
- ~15 near-duplicate `shadcn-skills-design-starter` template forks — collapsed to 2 representative entries (`015_pangsaxo-ops...`, `016_duangsamonpd-ball...`) since the rest are unmaintained one-shot forks of the same starter with no distinguishing commits.
- `rNN-<source>-awesome-*-skills-<niche>` repos (e.g. `r09-travisvn-awesome-claude-skills-ecommerce`, `r16-voltagent-awesome-agent-skills-devops`) — these are bulk auto-derived niche slices of other awesome-lists (SEO/e-commerce/devops focus), not genuinely curated or design-specific.
- Flutter "practice" / "clone" portfolio repos matching "Flutter UI skills" in description (e.g. student practice apps, UI clones) — not agent-skill format, just human learning projects.

## Rate limits / search notes

- GitHub search API (`gh search repos`) has a 30 req/min budget; paced all queries with ~1s sleeps between calls, no throttling encountered.
- Core REST API (`gh api repos/...` for stats/READMEs) had ample headroom (5000/hr, ~10 used per batch).
- Two transient network errors on individual `gh api`/`gh search` calls (`dial tcp ... connectex`) — both were re-run successfully on retry, no data lost.

## Method notes

- Content fetched via `git clone --depth 1` per repo, then `.git` stripped, then non-essential dirs (`node_modules`, `.github`) excluded from copy. No full-history clones.
- `anthropics/skills` (top-stars #001) is a large multi-skill monorepo; pruned down to only the design/frontend-relevant subdirs (`algorithmic-art`, `brand-guidelines`, `canvas-design`, `frontend-design`, `theme-factory`, `web-artifacts-builder`) — the doc/pdf/pptx/xlsx/mcp-builder/etc. skills in that repo were removed as out of scope.
- `bergside/awesome-design-skills` (top-stars #011) is kept whole — it is itself a registry of 67 design-system SKILL.md/DESIGN.md skill folders, all in scope.
