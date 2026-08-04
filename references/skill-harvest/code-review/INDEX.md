# Code-Review Agent-Skill Harvest — Index

Harvested 50 top-starred repos and 100 low-star/recently-active repos focused on code review / diff review / PR review agent-skill material (Claude Skills SKILL.md, Cursor rules, generic agent prompt/instruction repos, MCP-based review tools).

Search method: `gh search repos` across ~26 keyword/topic queries (topic:claude-skill, SKILL.md code review, agent skill pr review, cursor rules code review, diff review agent, security review agent skill, codex review skill, gitlab code review agent, etc.), merged/deduped (539 unique repos seen), keyword-scored for review relevance (271 relevant), then split by stars.

## Part 1 — top-stars/ (most-starred, relevance-filtered)

| # | Repo | Stars | Updated (pushed) | Description | Local path | Bucket |
|---|------|-------|-------------------|--------------|------------|--------|
| 001 | [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 17874 | 2026-08-02 | Open-source & free — Battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible. | `top-stars/001_alibaba-open-code-review` | top-stars |
| 002 | [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | 12338 | 2026-08-01 | 🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier. | `top-stars/002_The-PR-Agent-pr-agent` | top-stars |
| 003 | [reviewdog/reviewdog](https://github.com/reviewdog/reviewdog) | 9493 | 2026-07-31 | 🐶 Automated code review tool integrated with any code analysis tools regardless of programming language | `top-stars/003_reviewdog-reviewdog` | top-stars |
| 004 | [lintsinghua/DeepAudit](https://github.com/lintsinghua/DeepAudit) | 6757 | 2026-08-01 | DeepAudit：人人拥有的 AI 黑客战队，让漏洞挖掘触手可及。国内首个开源的代码漏洞挖掘多智能体系统。小白一键部署运行，自主协作审计 + 自动化沙箱 PoC 验证。支持 Ollama 私有部署 ，一键生成报告。支持中转站。​让安全不再昂贵，让审计不再复杂。 | `top-stars/004_lintsinghua-DeepAudit` | top-stars |
| 005 | [danger/danger](https://github.com/danger/danger) | 5686 | 2026-07-29 | 🚫 Stop saying "you forgot to …" in code review (in Ruby) | `top-stars/005_danger-danger` | top-stars |
| 006 | [danger/danger-js](https://github.com/danger/danger-js) | 5497 | 2026-07-27 | ⚠️ Stop saying "you forgot to …" in code review | `top-stars/006_danger-danger-js` | top-stars |
| 007 | [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | 2805 | 2026-05-08 | claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development. | `top-stars/007_SnailSploit-Claude-Red` | top-stars |
| 008 | [mattzcarey/shippie](https://github.com/mattzcarey/shippie) | 2468 | 2026-08-02 | extendable code review and QA agent 🚢 | `top-stars/008_mattzcarey-shippie` | top-stars |
| 009 | [crev-dev/cargo-crev](https://github.com/crev-dev/cargo-crev) | 2325 | 2026-07-21 | A cryptographically verifiable code review system for the cargo (Rust) package manager. | `top-stars/009_crev-dev-cargo-crev` | top-stars |
| 010 | [agavra/tuicr](https://github.com/agavra/tuicr) | 2296 | 2026-08-02 | a code review TUI with vim keybindings | `top-stars/010_agavra-tuicr` | top-stars |
| 011 | [sourcery-ai/sourcery](https://github.com/sourcery-ai/sourcery) | 1848 | 2026-07-31 | Instant AI code reviews | `top-stars/011_sourcery-ai-sourcery` | top-stars |
| 012 | [reviewboard/reviewboard](https://github.com/reviewboard/reviewboard) | 1724 | 2026-07-31 | An extensible and friendly code review tool for projects and companies of all sizes. | `top-stars/012_reviewboard-reviewboard` | top-stars |
| 013 | [ryanmcdermott/code-review-tips](https://github.com/ryanmcdermott/code-review-tips) | 1527 | 2023-02-27 | :microscope: Common problems to look for in a code review | `top-stars/013_ryanmcdermott-code-review-tips` | top-stars |
| 014 | [HexmosTech/git-lrc](https://github.com/HexmosTech/git-lrc) | 1441 | 2026-08-02 | Free, Micro AI Code Reviews That Run on Git Commit | `top-stars/014_HexmosTech-git-lrc` | top-stars |
| 015 | [code-review-checklists/java-concurrency](https://github.com/code-review-checklists/java-concurrency) | 1363 | 2020-11-07 | Checklist for code reviews | `top-stars/015_code-review-checklists-java-concurrency` | top-stars |
| 016 | [AmirShayegh/codex-claude-bridge](https://github.com/AmirShayegh/codex-claude-bridge) | 23 | 2026-07-09 | Automated code review powered by OpenAI Codex. CLI + Claude Code MCP integration. | `top-stars/016_AmirShayegh-codex-claude-bridge` | top-stars |
| 017 | [kodustech/kodus-ai](https://github.com/kodustech/kodus-ai) | 1286 | 2026-08-02 | AI Code Review with Full Control Over Model Choice and Costs. | `top-stars/017_kodustech-kodus-ai` | top-stars |
| 018 | [hyhmrright/brooks-lint](https://github.com/hyhmrright/brooks-lint) | 1280 | 2026-08-01 | AI code reviews grounded in 12 classic engineering books — decay risk diagnostics with book citations, severity labels, and 6 analysis modes including full-sweep auto-fix | `top-stars/018_hyhmrright-brooks-lint` | top-stars |
| 019 | [mgreiler/code-review-checklist](https://github.com/mgreiler/code-review-checklist) | 1073 | 2026-07-29 | This code review checklist helps you be a more effective and efficient code reviewer. | `top-stars/019_mgreiler-code-review-checklist` | top-stars |
| 020 | [villesau/ai-codereviewer](https://github.com/villesau/ai-codereviewer) | 1035 | 2024-08-19 | AI Code Reviewer: Enhance your GitHub workflow with AI-powered code review! Get intelligent feedback and suggestions on pull requests using OpenAI's GPT-4 API, improving code quality and saving developers time. | `top-stars/020_villesau-ai-codereviewer` | top-stars |
| 021 | [google/mantis](https://github.com/google/mantis) | 698 | 2026-07-25 | A modular, stack-agnostic toolkit of security review skills for AI coding agents to autonomously find, reproduce, and patch vulnerabilities. | `top-stars/021_google-mantis` | top-stars |
| 022 | [erikthedeveloper/code-review-emoji-guide](https://github.com/erikthedeveloper/code-review-emoji-guide) | 551 | 2022-04-18 | An emoji legend to help convey intention and added meaning in code review comments. | `top-stars/022_erikthedeveloper-code-review-emoji-guide` | top-stars |
| 023 | [Nikita-Filonov/ai-review](https://github.com/Nikita-Filonov/ai-review) | 538 | 2026-07-15 | 🚀 AI-powered code review tool for GitHub, GitLab, Bitbucket Cloud, Bitbucket Server, Azure DevOps and Gitea — built with LLMs like OpenAI, Claude, Gemini, Ollama, Bedrock, OpenRouter and Azure OpenAI | `top-stars/023_Nikita-Filonov-ai-review` | top-stars |
| 024 | [Nayjest/Gito](https://github.com/Nayjest/Gito) | 390 | 2026-08-02 | An AI-powered GitHub code review tool that uses LLMs to detect high-confidence, high-impact issues—such as security vulnerabilities, bugs, and maintainability concerns. | `top-stars/024_Nayjest-Gito` | top-stars |
| 025 | [athola/claude-night-market](https://github.com/athola/claude-night-market) | 324 | 2026-08-02 | 23 Claude Code plugins: TDD enforcement hooks, git/PR workflows, spec-driven development, code review, project lifecycle, fix-from-error, maintenance automation, context optimization, research, and multi-LLM delegation. 186 skills, 128 commands, 54 agents. | `top-stars/025_athola-claude-night-market` | top-stars |
| 026 | [miracodeai/mira](https://github.com/miracodeai/mira) | 222 | 2026-07-31 | Self-hosted AI code reviewer with indexed PR reviews, walkthroughs, vulnerability scanning, dependency graphs, custom rules, and a learning loop. | `top-stars/026_miracodeai-mira` | top-stars |
| 027 | [codedog-ai/codedog](https://github.com/codedog-ai/codedog) | 192 | 2026-04-26 | Code review assistant powered by LLM | `top-stars/027_codedog-ai-codedog` | top-stars |
| 028 | [win4r/agent-skills-code-review-router](https://github.com/win4r/agent-skills-code-review-router) | 125 | 2026-01-17 | _(no description)_ | `top-stars/028_win4r-agent-skills-code-review-router` | top-stars |
| 029 | [w1ckedxt/cynical-sally](https://github.com/w1ckedxt/cynical-sally) | 92 | 2026-07-04 | Brutally honest senior-engineer code reviews for Claude Code, Cursor & Windsurf -  and your terminal. Scores, evidence-backed issues, usable fixes. | `top-stars/029_w1ckedxt-cynical-sally` | top-stars |
| 030 | [csy-csy123/pr-review-agent-council](https://github.com/csy-csy123/pr-review-agent-council) | 84 | 2026-05-24 | 学习 learn-claude-code 后的 PR Review Agent 实践项目：构建 Debate Council 多 Agent 审查、Tool Calling、结构化报告与 AI Judge 评估。 | `top-stars/030_csy-csy123-pr-review-agent-council` | top-stars |
| 031 | [electricsheephq/evaos-code-review-bot-neondiff](https://github.com/electricsheephq/evaos-code-review-bot-neondiff) | 71 | 2026-07-30 | Stop giving away your code. NeonDIFF is your local-first AI PR reviewer for teams that want professional quality code reviews and issue enrichment without handing every diff to a hosted review SaaS. | `top-stars/031_electricsheephq-evaos-code-review-bot-neondiff` | top-stars |
| 032 | [devarshishimpi/codra](https://github.com/devarshishimpi/codra) | 61 | 2026-08-02 | Self-hosted AI code review for GitHub pull requests, built on Cloudflare Workers. | `top-stars/032_devarshishimpi-codra` | top-stars |
| 033 | [simion/reviewd](https://github.com/simion/reviewd) | 58 | 2026-06-16 | Local AI pull request reviewer — review GitHub and BitBucket PRs right from your terminal, powered by the Claude Code, Gemini, and Codex CLIs. | `top-stars/033_simion-reviewd` | top-stars |
| 034 | [naver/notify-pr-review](https://github.com/naver/notify-pr-review) | 53 | 2025-07-11 | PR 리뷰 요청을 받으면 Slack으로 알리는 Github Actions | `top-stars/034_naver-notify-pr-review` | top-stars |
| 035 | [hyxnj666-creator/ai-review-pipeline](https://github.com/hyxnj666-creator/ai-review-pipeline) | 52 | 2026-04-29 | AI code review pipeline — review, auto-fix, test generation & HTML report in one command. Zero dependencies, 6 AI providers (OpenAI/DeepSeek/Claude/Gemini/Qwen/Ollama), npx ready. | `top-stars/035_hyxnj666-creator-ai-review-pipeline` | top-stars |
| 036 | [aryanbrite/openrabbit](https://github.com/aryanbrite/openrabbit) | 51 | 2026-07-09 | Free, AI PR reviewer that runs entirely in GitHub Actions. No hosting required. | `top-stars/036_aryanbrite-openrabbit` | top-stars |
| 037 | [turingmindai/turingmind-code-review](https://github.com/turingmindai/turingmind-code-review) | 49 | 2026-01-09 | Claude Code Review Skill | `top-stars/037_turingmindai-turingmind-code-review` | top-stars |
| 038 | [xieziyu/duetlens](https://github.com/xieziyu/duetlens) | 44 | 2026-07-31 | Conversational code review on macOS: review a PR or local branch together with a codex agent, and ask about any line instead of just reading its findings. | `top-stars/038_xieziyu-duetlens` | top-stars |
| 039 | [tarmojussila/zai-code-review](https://github.com/tarmojussila/zai-code-review) | 42 | 2026-04-16 | Z.ai Code Review for GitHub Actions | `top-stars/039_tarmojussila-zai-code-review` | top-stars |
| 040 | [todd866/codex-adversary](https://github.com/todd866/codex-adversary) | 40 | 2026-07-10 | Recruit Codex (GPT) as an automatic adversarial reviewer inside Claude Code — diversity of thought, Claude has lead. | `top-stars/040_todd866-codex-adversary` | top-stars |
| 041 | [anthroos/claude-code-review-skill](https://github.com/anthroos/claude-code-review-skill) | 38 | 2026-02-27 | Free AI-powered code review skill for Claude Code CLI — alternative to CodeRabbit | `top-stars/041_anthroos-claude-code-review-skill` | top-stars |
| 042 | [bluebear-io/baloo-bear](https://github.com/bluebear-io/baloo-bear) | 34 | 2026-08-02 | AI-powered code review agent for GitHub pull requests. Self-hosted GitHub App using PI. | `top-stars/042_bluebear-io-baloo-bear` | top-stars |
| 043 | [Thinkode/thinkreview-browser-extension](https://github.com/Thinkode/thinkreview-browser-extension) | 33 | 2026-08-02 | AI-powered code reviews & Copilot for GitLab , Github, Azure DevOps & Bitbucket. Zero setup. Powered by Frontier LLms & Ollama. | `top-stars/043_Thinkode-thinkreview-browser-extension` | top-stars |
| 044 | [BusyBee3333/sol-governed-codex](https://github.com/BusyBee3333/sol-governed-codex) | 33 | 2026-08-01 | Open-source Codex plugin for Sol-governed multi-agent coding, bounded AI code review, model routing, and LLM cost optimization | `top-stars/044_BusyBee3333-sol-governed-codex` | top-stars |
| 045 | [religa/multi_mcp](https://github.com/religa/multi_mcp) | 32 | 2026-07-27 | Multi-Model chat, code review and analysis MCP Server for Claude Code | `top-stars/045_religa-multi_mcp` | top-stars |
| 046 | [start-fish/riskradar-tracemap-ai](https://github.com/start-fish/riskradar-tracemap-ai) | 29 | 2026-06-23 | AI code review quality gates for PRs, coverage gap detection, and requirements traceability skills | `top-stars/046_start-fish-riskradar-tracemap-ai` | top-stars |
| 047 | [huangang/codesentry](https://github.com/huangang/codesentry) | 27 | 2026-05-06 | AI-powered Code Review Platform for GitHub and GitLab. | `top-stars/047_huangang-codesentry` | top-stars |
| 048 | [SomeStay07/code-review-agent](https://github.com/SomeStay07/code-review-agent) | 27 | 2026-02-12 | Code review agent for Claude Code. One .md file — 14 review categories, 4 severity levels, auto-fix, OWASP security checks. Zero dependencies. | `top-stars/048_SomeStay07-code-review-agent` | top-stars |
| 049 | [Review-scope/ReviewScope](https://github.com/Review-scope/ReviewScope) | 25 | 2026-04-02 | ReviewScope is an open-source AI PR reviewer for GitHub that goes beyond the diff. Uses AST-based analysis and issue validation to deliver low-noise, actionable code reviews. Bring your own API key. | `top-stars/049_Review-scope-ReviewScope` | top-stars |
| 050 | [omidbakhshi/merge-mind](https://github.com/omidbakhshi/merge-mind) | 25 | 2025-11-15 | AI-powered code review assistant for gitlab - intelligent suggestions and automated analysis. | `top-stars/050_omidbakhshi-merge-mind` | top-stars |

## Part 2 — noname/ (low-star, recently active)

Filter: stargazersCount < 50 (median well under 20, many at 0-2), pushedAt within ~90 days of 2026-08-03 (i.e. after 2026-05-05), sorted newest-pushed first.

| # | Repo | Stars | Updated (pushed) | Description | Local path | Bucket |
|---|------|-------|-------------------|--------------|------------|--------|
| 001 | [SahilShahare/code-review-agent](https://github.com/SahilShahare/code-review-agent) | 0 | 2026-08-03 | A code review agent that will run through terminal commands and provide recommendations on improvement and flag any fatal breaking change. | `noname/001_SahilShahare-code-review-agent` | noname |
| 002 | [vpeetla-ai/aegis-pr-review](https://github.com/vpeetla-ai/aegis-pr-review) | 1 | 2026-08-03 | Org PR code-review agent — deterministic scanners + multi-pass LLM (advisory v1) | `noname/002_vpeetla-ai-aegis-pr-review` | noname |
| 003 | [nirmal77-nir/RAD-Claude-Agent-Toolkit](https://github.com/nirmal77-nir/RAD-Claude-Agent-Toolkit) | 1 | 2026-08-02 | Best Free AI Code Review Agents 2026 – 190+ Skills & Plugins for Claude | `noname/003_nirmal77-nir-RAD-Claude-Agent-Toolkit` | noname |
| 004 | [kuju63/code-review-agents](https://github.com/kuju63/code-review-agents) | 0 | 2026-08-02 | Code Review Agent for web application using Local LLM runtime(Ollama, LM Studio, etc.,) | `noname/004_kuju63-code-review-agents` | noname |
| 005 | [unyieldingclaw-dev/ai-code-review-agent](https://github.com/unyieldingclaw-dev/ai-code-review-agent) | 1 | 2026-08-02 | Multi-agent AI code reviewer powered by Ollama. Runs 15 specialized agents (security, performance, correctness, design, dependencies, and more) against your git diff and posts findings to PRs via GitHub Actions. | `noname/005_unyieldingclaw-dev-ai-code-review-agent` | noname |
| 006 | [rmehra123/ai-pr-reviewer](https://github.com/rmehra123/ai-pr-reviewer) | 0 | 2026-08-02 | _(no description)_ | `noname/006_rmehra123-ai-pr-reviewer` | noname |
| 007 | [monum-hashmi/code-review-agent](https://github.com/monum-hashmi/code-review-agent) | 0 | 2026-08-02 | _(no description)_ | `noname/007_monum-hashmi-code-review-agent` | noname |
| 008 | [Solace985/context-aware-code-review-agent](https://github.com/Solace985/context-aware-code-review-agent) | 0 | 2026-08-02 | A context-aware code review agent that maximizes domain specific accuracy as well as code accuracy and operational security that can be used for screening of any updates or PR's before being pushed into production to reduce human cognitive load as well as post-deployment issues. | `noname/008_Solace985-context-aware-code-review-agent` | noname |
| 009 | [junit/pre-commit-review](https://github.com/junit/pre-commit-review) | 6 | 2026-08-02 | An AI Agent skill for automated pre-commit code review and local quality gating before you commit. | `noname/009_junit-pre-commit-review` | noname |
| 010 | [prathamdby/pr-agent](https://github.com/prathamdby/pr-agent) | 15 | 2026-08-02 | 🚀 A self-hosted AI PR reviewer. | `noname/010_prathamdby-pr-agent` | noname |
| 011 | [a2sys-platform/code-review-agent](https://github.com/a2sys-platform/code-review-agent) | 0 | 2026-08-02 | 사내 코드 리뷰 에이전트 | `noname/011_a2sys-platform-code-review-agent` | noname |
| 012 | [NaiduRavada07676/-Code-Review-Agent](https://github.com/NaiduRavada07676/-Code-Review-Agent) | 0 | 2026-08-02 | _(no description)_ | `noname/012_NaiduRavada07676--Code-Review-Agent` | noname |
| 013 | [Zhanpeng-Gui/Smart-Code-Review-Agent](https://github.com/Zhanpeng-Gui/Smart-Code-Review-Agent) | 1 | 2026-08-02 | _(no description)_ | `noname/013_Zhanpeng-Gui-Smart-Code-Review-Agent` | noname |
| 014 | [Divyansh044/ai-code-review-agent](https://github.com/Divyansh044/ai-code-review-agent) | 0 | 2026-08-02 | _(no description)_ | `noname/014_Divyansh044-ai-code-review-agent` | noname |
| 015 | [CrashBytes/ai-code-review-agent](https://github.com/CrashBytes/ai-code-review-agent) | 0 | 2026-08-02 | Production-ready AI code review automation using Claude API and GitHub Actions | `noname/015_CrashBytes-ai-code-review-agent` | noname |
| 016 | [lalala1314521/code-review-agent](https://github.com/lalala1314521/code-review-agent) | 0 | 2026-08-02 | LLM + 规则引擎双引擎协同的代码审查系统:规则硬扫描 + LLM 语义判断,幻觉否决,多 Provider 可插拔(DeepSeek/通义/OpenAI),GitLab/GitHub 双平台 webhook,SSE 实时进度,Vue3 管理台 | `noname/016_lalala1314521-code-review-agent` | noname |
| 017 | [ivan-sincek/secure-code-review-agent-skills](https://github.com/ivan-sincek/secure-code-review-agent-skills) | 0 | 2026-08-02 | Easy-to-use, high-quality secure code review agent skills. In progress... | `noname/017_ivan-sincek-secure-code-review-agent-skills` | noname |
| 018 | [clouatre-labs/aptu](https://github.com/clouatre-labs/aptu) | 5 | 2026-08-02 | AI-powered GitHub automation: issue triage, PR review, PR labeling, and security scanning -- CLI and GitHub Action | `noname/018_clouatre-labs-aptu` | noname |
| 019 | [Rhimkhan/code-review-agent](https://github.com/Rhimkhan/code-review-agent) | 0 | 2026-08-02 | _(no description)_ | `noname/019_Rhimkhan-code-review-agent` | noname |
| 020 | [cgartlab/argus](https://github.com/cgartlab/argus) | 0 | 2026-08-02 | Code review agent for designer. | `noname/020_cgartlab-argus` | noname |
| 021 | [Gopal1252/ai-pr-reviewer](https://github.com/Gopal1252/ai-pr-reviewer) | 0 | 2026-08-02 | a simple pr reviewer to post inline comments on pull requests | `noname/021_Gopal1252-ai-pr-reviewer` | noname |
| 022 | [imbgar/peaR](https://github.com/imbgar/peaR) | 3 | 2026-08-02 | Terminal-native PR review control center. PRs as tabs, real terminals, resumable AI review sessions. | `noname/022_imbgar-peaR` | noname |
| 023 | [Harshitpandey21/AI-code-reviewer-agent](https://github.com/Harshitpandey21/AI-code-reviewer-agent) | 0 | 2026-08-02 | _(no description)_ | `noname/023_Harshitpandey21-AI-code-reviewer-agent` | noname |
| 024 | [nhatvu148/pr-review-core](https://github.com/nhatvu148/pr-review-core) | 4 | 2026-08-02 | Reusable Rust engine (crate) for a self-hosted advisory AI PR reviewer — reviews GitHub, GitLab & Bitbucket PRs via OpenRouter (Claude). Line-anchored inline comments, tree-sitter structural context, OSV.dev dependency CVE scans, and /ask + /describe commands. Powers the pr-review-bot service. | `noname/024_nhatvu148-pr-review-core` | noname |
| 025 | [dhananjay-wagh/ai-pr-reviewer](https://github.com/dhananjay-wagh/ai-pr-reviewer) | 0 | 2026-08-02 | A FastAPI webhook service that automatically reviews GitHub Pull Requests using Groq LLM and posts inline code comments. | `noname/025_dhananjay-wagh-ai-pr-reviewer` | noname |
| 026 | [Harsha-636/ai-pr-reviewer](https://github.com/Harsha-636/ai-pr-reviewer) | 0 | 2026-08-02 | _(no description)_ | `noname/026_Harsha-636-ai-pr-reviewer` | noname |
| 027 | [766jbcodes/claude-toolkit](https://github.com/766jbcodes/claude-toolkit) | 0 | 2026-08-02 | Reusable Claude Code agents, commands, and skills. LLM Council, influencer personas, code review agents, and more. | `noname/027_766jbcodes-claude-toolkit` | noname |
| 028 | [fenetdiriba/ml-code-review-agent1](https://github.com/fenetdiriba/ml-code-review-agent1) | 0 | 2026-08-02 | _(no description)_ | `noname/028_fenetdiriba-ml-code-review-agent1` | noname |
| 029 | [we-are-singular/singular-code-review-agent](https://github.com/we-are-singular/singular-code-review-agent) | 0 | 2026-08-02 | Self-hosted automated pull-request reviewer as a container image for GitHub Action | `noname/029_we-are-singular-singular-code-review-agent` | noname |
| 030 | [juinhong/code-review-agent](https://github.com/juinhong/code-review-agent) | 0 | 2026-08-02 | _(no description)_ | `noname/030_juinhong-code-review-agent` | noname |
| 031 | [shreyaragireddy/ai-code-reviewer-agent](https://github.com/shreyaragireddy/ai-code-reviewer-agent) | 0 | 2026-08-01 | _(no description)_ | `noname/031_shreyaragireddy-ai-code-reviewer-agent` | noname |
| 032 | [cinatra-ai/code-reviewer-agent](https://github.com/cinatra-ai/code-reviewer-agent) | 0 | 2026-08-01 | @cinatra-ai/code-reviewer-agent — a Cinatra agent extension | `noname/032_cinatra-ai-code-reviewer-agent` | noname |
| 033 | [plexusone/agent-code-review](https://github.com/plexusone/agent-code-review) | 0 | 2026-08-01 | AI-powered code review agent for GitHub Pull Requests. | `noname/033_plexusone-agent-code-review` | noname |
| 034 | [steinarts/ai-pr-reviewer](https://github.com/steinarts/ai-pr-reviewer) | 0 | 2026-08-01 | AI-powered pull request reviewer with multi-stage validation. | `noname/034_steinarts-ai-pr-reviewer` | noname |
| 035 | [GezerGoktug/code-review-agent](https://github.com/GezerGoktug/code-review-agent) | 0 | 2026-08-01 | _(no description)_ | `noname/035_GezerGoktug-code-review-agent` | noname |
| 036 | [FaizanKhalid-Coder/n8n-ai-code-review-agent](https://github.com/FaizanKhalid-Coder/n8n-ai-code-review-agent) | 0 | 2026-08-01 | An AI-powered Code Review Agent that integrates VS Code, n8n, and Google Gemini to automatically analyze code quality, detect bugs, identify security issues, and generate improved code in real time. | `noname/036_FaizanKhalid-Coder-n8n-ai-code-review-agent` | noname |
| 037 | [naomytcheums-dotcom/review-agent](https://github.com/naomytcheums-dotcom/review-agent) | 0 | 2026-08-01 | AI code review agent for GitLab merge requests. Reviews changed files, gives an accept/reject verdict with a score, and posts inline comments on the exact line — triggered by a comment on the MR or tested manually in the dashboard. FastAPI + React. | `noname/037_naomytcheums-dotcom-review-agent` | noname |
| 038 | [abdullahk970/AI-Code-Review-Agent](https://github.com/abdullahk970/AI-Code-Review-Agent) | 0 | 2026-08-01 | _(no description)_ | `noname/038_abdullahk970-AI-Code-Review-Agent` | noname |
| 039 | [cassioalmeron/CodeReviewAgent](https://github.com/cassioalmeron/CodeReviewAgent) | 0 | 2026-08-01 | LLM-powered code review agent in .NET. The agent is the excuse; the harness is the point: versioned prompts, grounded findings, golden-set and LLM-as-judge evaluation | `noname/039_cassioalmeron-CodeReviewAgent` | noname |
| 040 | [pkesavangg/pr-review-skills](https://github.com/pkesavangg/pr-review-skills) | 0 | 2026-08-01 | Team-shared PR reviewer: SwiftUI + Compose + security/privacy | `noname/040_pkesavangg-pr-review-skills` | noname |
| 041 | [kumarpriyanshu1022006-droid/Autonomous-code-review-agent-combining-static-analysis-with-LLM-reasoning](https://github.com/kumarpriyanshu1022006-droid/Autonomous-code-review-agent-combining-static-analysis-with-LLM-reasoning) | 0 | 2026-08-01 | An AI-powered autonomous code review agent that combines static analysis with LLM reasoning to detect bugs, security vulnerabilities, and code quality issues. It provides context-aware explanations, intelligent fix suggestions, and automated review feedback, helping developers build secure, efficient, and maintainable software. | `noname/041_kumarpriyanshu1022006-droid-Autonomous-code-review-agent-combining-static-analysis-with-LLM-reasoning` | noname |
| 042 | [ketan27j/ai-pr-reviewer](https://github.com/ketan27j/ai-pr-reviewer) | 0 | 2026-08-01 | AI PR Reviewer | `noname/042_ketan27j-ai-pr-reviewer` | noname |
| 043 | [vaishnavi4068/code-review-agent](https://github.com/vaishnavi4068/code-review-agent) | 0 | 2026-08-01 | _(no description)_ | `noname/043_vaishnavi4068-code-review-agent` | noname |
| 044 | [PhilipLudington/Assay](https://github.com/PhilipLudington/Assay) | 0 | 2026-08-01 | Measures how good a code-review agent actually is — a TypeScript corpus of seeded defects, and a Python harness that scores per-reviewer precision and recall with confidence intervals. | `noname/044_PhilipLudington-Assay` | noname |
| 045 | [Rust-soham/semantic-pr-review-skill](https://github.com/Rust-soham/semantic-pr-review-skill) | 0 | 2026-08-01 | _(no description)_ | `noname/045_Rust-soham-semantic-pr-review-skill` | noname |
| 046 | [muhammadrauf786/AI-PR-Reviewer-GitHub](https://github.com/muhammadrauf786/AI-PR-Reviewer-GitHub) | 0 | 2026-08-01 | _(no description)_ | `noname/046_muhammadrauf786-AI-PR-Reviewer-GitHub` | noname |
| 047 | [kunal12203/graperoot-review](https://github.com/kunal12203/graperoot-review) | 1 | 2026-08-01 | Graph-proven AI PR reviewer — beats CodeRabbit & CodeAnt | `noname/047_kunal12203-graperoot-review` | noname |
| 048 | [annanthpjose96/code-review-agent](https://github.com/annanthpjose96/code-review-agent) | 0 | 2026-08-01 | "AI code review agent with tool use, RAG, and a real precision/recall eval harness" | `noname/048_annanthpjose96-code-review-agent` | noname |
| 049 | [cjdava/code-review-agent-platform](https://github.com/cjdava/code-review-agent-platform) | 0 | 2026-07-31 | _(no description)_ | `noname/049_cjdava-code-review-agent-platform` | noname |
| 050 | [warpdotdev-demos/factory-agents-template](https://github.com/warpdotdev-demos/factory-agents-template) | 0 | 2026-07-31 | Template for an agentic software factory on Warp's Oz platform: foreman + triage/spec/implementation/code-review agents driving Slack/Jira requests to merged GitHub PRs | `noname/050_warpdotdev-demos-factory-agents-template` | noname |
| 051 | [dam-agents/code-guardian](https://github.com/dam-agents/code-guardian) | 1 | 2026-07-31 | PR code review agent for any GitHub repository. | `noname/051_dam-agents-code-guardian` | noname |
| 052 | [030603-ccf/code-review-agent](https://github.com/030603-ccf/code-review-agent) | 1 | 2026-07-31 | _(no description)_ | `noname/052_030603-ccf-code-review-agent` | noname |
| 053 | [claudialphonse78/ai-tools](https://github.com/claudialphonse78/ai-tools) | 0 | 2026-07-31 | AI-powered code review agents and skills for Cursor and Claude Code: pre-commit checks, Jira context, PatternFly standards, and more. | `noname/053_claudialphonse78-ai-tools` | noname |
| 054 | [SamyakWagde/CODE-REVIEW-AGENTS-](https://github.com/SamyakWagde/CODE-REVIEW-AGENTS-) | 0 | 2026-07-31 | _(no description)_ | `noname/054_SamyakWagde-CODE-REVIEW-AGENTS-` | noname |
| 055 | [Karthik-Malapati/ai-code-review-agent](https://github.com/Karthik-Malapati/ai-code-review-agent) | 0 | 2026-07-31 | _(no description)_ | `noname/055_Karthik-Malapati-ai-code-review-agent` | noname |
| 056 | [Bardiyashavandi/code_review_agent](https://github.com/Bardiyashavandi/code_review_agent) | 0 | 2026-07-31 | AI-powered code review agent that fetches a GitHub repo, runs Semgrep static analysis, and uses Gemini + Google ADK 2.0 to generate a prioritized, fix-it-now review. Built for the Kaggle AI Agents Capstone. | `noname/056_Bardiyashavandi-code_review_agent` | noname |
| 057 | [TOMOSIA-VIETNAM/open-pr](https://github.com/TOMOSIA-VIETNAM/open-pr) | 18 | 2026-07-31 | Claude Code plugin for intelligent GitHub Pull Request reviews that continuously learns your project's conventions and team feedback. | `noname/057_TOMOSIA-VIETNAM-open-pr` | noname |
| 058 | [mrSamDev/code-review-agent](https://github.com/mrSamDev/code-review-agent) | 0 | 2026-07-31 | AI code review guardian via webhooks - Bitbucket, GitHub, and beyond | `noname/058_mrSamDev-code-review-agent` | noname |
| 059 | [OtecSergij/ai-pr-reviewer](https://github.com/OtecSergij/ai-pr-reviewer) | 3 | 2026-07-31 | AI agent that reviews GitHub pull requests via multi-step tool calling | `noname/059_OtecSergij-ai-pr-reviewer` | noname |
| 060 | [rozariopersonal/gitlab-code-review-agent](https://github.com/rozariopersonal/gitlab-code-review-agent) | 0 | 2026-07-31 | _(no description)_ | `noname/060_rozariopersonal-gitlab-code-review-agent` | noname |
| 061 | [sibinms/argus](https://github.com/sibinms/argus) | 3 | 2026-07-31 | An open source AI PR reviewer built from many narrow lenses and one careful curator | `noname/061_sibinms-argus` | noname |
| 062 | [fevxie/code-review-agent](https://github.com/fevxie/code-review-agent) | 0 | 2026-07-31 | _(no description)_ | `noname/062_fevxie-code-review-agent` | noname |
| 063 | [GerritForge/ai-review-agent-provider](https://github.com/GerritForge/ai-review-agent-provider) | 3 | 2026-07-30 | Implementation of the Gerrit's AI Code Review Agent API with a generic provider interface | `noname/063_GerritForge-ai-review-agent-provider` | noname |
| 064 | [learnwithnim/ai-pr-reviewer](https://github.com/learnwithnim/ai-pr-reviewer) | 0 | 2026-07-30 | Web application that accepts a GitHub PR diff (or pasted code diff) and returns an AI-generated review. | `noname/064_learnwithnim-ai-pr-reviewer` | noname |
| 065 | [AnitSarkar123/AI_PR_REVIEWER](https://github.com/AnitSarkar123/AI_PR_REVIEWER) | 5 | 2026-07-30 | _(no description)_ | `noname/065_AnitSarkar123-AI_PR_REVIEWER` | noname |
| 066 | [sharonyao1127/ai-product-reviewer](https://github.com/sharonyao1127/ai-product-reviewer) | 0 | 2026-07-30 | Production-grade agent skill for deep, verify-first AI product reviews | `noname/066_sharonyao1127-ai-product-reviewer` | noname |
| 067 | [athm793/buggie-skill](https://github.com/athm793/buggie-skill) | 7 | 2026-07-30 | Buggie v3.2 — a Claude Code review skill that runs as a crew: parallel specialist agents hunt, adversarial skeptics try to refute every finding, and a data-probe phase measures what the stored rows say actually happened. Safe by default; fixes are opt-in and mutation-verified. | `noname/067_athm793-buggie-skill` | noname |
| 068 | [zumrywahid/ai-pr-reviewer](https://github.com/zumrywahid/ai-pr-reviewer) | 0 | 2026-07-30 | Multi-agent AI code review as a GitHub Action - three specialist agents (correctness, security, test coverage) review each PR in parallel, an adversarial verifier kills weak findings, and only the  survivors get posted. Built with Google ADK. | `noname/068_zumrywahid-ai-pr-reviewer` | noname |
| 069 | [pgup-ai/jbot-review-action](https://github.com/pgup-ai/jbot-review-action) | 0 | 2026-07-30 | Open-source AI code review in your own GitHub Actions — bring an OpenCode gateway key or a CLI subscription (Codex, Claude, Cursor, Devin, Cline, Kilo, Command Code). $0/seat. | `noname/069_pgup-ai-jbot-review-action` | noname |
| 070 | [emilyadavis303/rampaging-raccoons](https://github.com/emilyadavis303/rampaging-raccoons) | 2 | 2026-07-30 | Multi-perspective PR review skill for Claude Code — dispatches 6 raccoon agents in parallel, merges findings, posts one GitHub review with inline comments | `noname/070_emilyadavis303-rampaging-raccoons` | noname |
| 071 | [jasmeet2000/ai-pr-reviewer](https://github.com/jasmeet2000/ai-pr-reviewer) | 0 | 2026-07-29 | Agentic AI code review assistant that analyzes GitHub PRs for bugs, security issues, and missing tests — with a LangGraph-based tool-calling agent, Streamlit UI, FastAPI backend, and CLI/GitHub Action integration. | `noname/071_jasmeet2000-ai-pr-reviewer` | noname |
| 072 | [michaelruelas/pr-reviewer](https://github.com/michaelruelas/pr-reviewer) | 0 | 2026-07-29 | Multi-lens PR review skill using 5 specialized sub-agents: code quality, design patterns, error handling, readability, SOLID. | `noname/072_michaelruelas-pr-reviewer` | noname |
| 073 | [naina-jaiswal-code/ai-pr-reviewer](https://github.com/naina-jaiswal-code/ai-pr-reviewer) | 0 | 2026-07-29 | _(no description)_ | `noname/073_naina-jaiswal-code-ai-pr-reviewer` | noname |
| 074 | [avesh-h/ai-pr-reviewer-agent](https://github.com/avesh-h/ai-pr-reviewer-agent) | 0 | 2026-07-29 | AI agent PR reviewer | `noname/074_avesh-h-ai-pr-reviewer-agent` | noname |
| 075 | [SamuelAlev/control-center](https://github.com/SamuelAlev/control-center) | 2 | 2026-07-29 | Multi-agent development cockpit: isolated worktrees, PR review, GitHub/Linear, all native. | `noname/075_SamuelAlev-control-center` | noname |
| 076 | [SatvikAnand10/ai-pr-reviewer](https://github.com/SatvikAnand10/ai-pr-reviewer) | 0 | 2026-07-29 | AI-powered PR reviewer that automatically analyzes GitHub pull requests using LLMs, posts structured feedback as comments, and tracks code quality metrics via a live dashboard. | `noname/076_SatvikAnand10-ai-pr-reviewer` | noname |
| 077 | [AndreaBonn/ai-pr-reviewer](https://github.com/AndreaBonn/ai-pr-reviewer) | 3 | 2026-07-28 | Automated PR reviews powered by AI. Plug into any GitHub repo in minutes. Supports Groq, Gemini, Anthropic, and OpenAI with multi-provider fallback and key rotation. Get actionable, context-aware code feedback on every pull request without slowing down your team. Zero dependencies beyond requests. | `noname/077_AndreaBonn-ai-pr-reviewer` | noname |
| 078 | [two-seven-iitd/ai-pr-reviewer](https://github.com/two-seven-iitd/ai-pr-reviewer) | 0 | 2026-07-28 | GitHub Action that automatically reviews pull requests using LLMs. Finds bugs, security vulnerabilities, and performance issues. | `noname/078_two-seven-iitd-ai-pr-reviewer` | noname |
| 079 | [SumitB1412/ai-pr-reviewer](https://github.com/SumitB1412/ai-pr-reviewer) | 0 | 2026-07-28 | _(no description)_ | `noname/079_SumitB1412-ai-pr-reviewer` | noname |
| 080 | [eggai-tech/qualops](https://github.com/eggai-tech/qualops) | 2 | 2026-07-28 | AI-powered code review for PRs - automated reviews, GitHub checks annotations, agentic cross-file analysis with Claude Agent SDK | `noname/080_eggai-tech-qualops` | noname |
| 081 | [mesa-dot-dev/saguaro](https://github.com/mesa-dot-dev/saguaro) | 22 | 2026-07-27 | Local AI code review for coding agents. Rules enforced inside Claude Code, Codex, and Cursor. Free, open-source, fully local. | `noname/081_mesa-dot-dev-saguaro` | noname |
| 082 | [ADHIRAJ00000/AI-PR-Reviewer](https://github.com/ADHIRAJ00000/AI-PR-Reviewer) | 0 | 2026-07-27 | Autonomous multi-agent PR reviewer built with LangGraph & FastAPI. Specialized tool-calling agents analyze diffs, flag security issues, and suggest tests — with guardrails, Langfuse tracing, and an LLM-as-judge eval harness. | `noname/082_ADHIRAJ00000-AI-PR-Reviewer` | noname |
| 083 | [Shraddha-075/ai-pr-Reviewer](https://github.com/Shraddha-075/ai-pr-Reviewer) | 0 | 2026-07-27 | _(no description)_ | `noname/083_Shraddha-075-ai-pr-Reviewer` | noname |
| 084 | [Uday1017/ai-pr-reviewer-agent](https://github.com/Uday1017/ai-pr-reviewer-agent) | 0 | 2026-07-27 | _(no description)_ | `noname/084_Uday1017-ai-pr-reviewer-agent` | noname |
| 085 | [saikrishnareddy1731/ai-pr-reviewer](https://github.com/saikrishnareddy1731/ai-pr-reviewer) | 0 | 2026-07-26 | _(no description)_ | `noname/085_saikrishnareddy1731-ai-pr-reviewer` | noname |
| 086 | [Rizvij/ai-pr-reviewer](https://github.com/Rizvij/ai-pr-reviewer) | 0 | 2026-07-26 | _(no description)_ | `noname/086_Rizvij-ai-pr-reviewer` | noname |
| 087 | [phanikumar1712/ai-pr-reviewer](https://github.com/phanikumar1712/ai-pr-reviewer) | 0 | 2026-07-26 | _(no description)_ | `noname/087_phanikumar1712-ai-pr-reviewer` | noname |
| 088 | [gajrajparihar/ai_pr_reviewer](https://github.com/gajrajparihar/ai_pr_reviewer) | 0 | 2026-07-26 | AI Based Auto PR Reviewer | `noname/088_gajrajparihar-ai_pr_reviewer` | noname |
| 089 | [DarkArtyom/ai-pr-reviewer](https://github.com/DarkArtyom/ai-pr-reviewer) | 0 | 2026-07-26 | _(no description)_ | `noname/089_DarkArtyom-ai-pr-reviewer` | noname |
| 090 | [NivL1/ai-pr-reviewer](https://github.com/NivL1/ai-pr-reviewer) | 0 | 2026-07-26 | NestJS service + GitHub Action that runs LLM-powered code review on pull requests | `noname/090_NivL1-ai-pr-reviewer` | noname |
| 091 | [AZOGOAT/reviewer-two](https://github.com/AZOGOAT/reviewer-two) | 1 | 2026-07-25 | AI PR reviewer that posts real GitHub reviews. Request it like a human reviewer. | `noname/091_AZOGOAT-reviewer-two` | noname |
| 092 | [vivek34561/AI-PR-Reviewer](https://github.com/vivek34561/AI-PR-Reviewer) | 0 | 2026-07-25 | _(no description)_ | `noname/092_vivek34561-AI-PR-Reviewer` | noname |
| 093 | [shinpr/pr-review-skill](https://github.com/shinpr/pr-review-skill) | 1 | 2026-07-25 | Review GitHub PRs with repository-specific quality criteria, isolated Claude and Codex reviewers, and structured findings that converge into actionable feedback. | `noname/093_shinpr-pr-review-skill` | noname |
| 094 | [xieziyu/better-review](https://github.com/xieziyu/better-review) | 9 | 2026-07-25 | Local-first PR review helper — drives claude or codex agents under a browser UI, ships findings to GitHub via gh. | `noname/094_xieziyu-better-review` | noname |
| 095 | [costajohnt/pr-review-lenses](https://github.com/costajohnt/pr-review-lenses) | 0 | 2026-07-25 | PR/diff review agents for GitHub Copilot CLI and opencode, ported from Anthropic's pr-review-toolkit | `noname/095_costajohnt-pr-review-lenses` | noname |
| 096 | [Ayushaggarwal1277/ai_pr_reviewer](https://github.com/Ayushaggarwal1277/ai_pr_reviewer) | 0 | 2026-07-24 | _(no description)_ | `noname/096_Ayushaggarwal1277-ai_pr_reviewer` | noname |
| 097 | [PushkarBhoge/AI-Project-Reviewer](https://github.com/PushkarBhoge/AI-Project-Reviewer) | 0 | 2026-07-24 | _(no description)_ | `noname/097_PushkarBhoge-AI-Project-Reviewer` | noname |
| 098 | [KalaGhoda11/ai-pr-reviewer](https://github.com/KalaGhoda11/ai-pr-reviewer) | 0 | 2026-07-24 | _(no description)_ | `noname/098_KalaGhoda11-ai-pr-reviewer` | noname |
| 099 | [battalaakshitha881-star/ai-pr-reviewer](https://github.com/battalaakshitha881-star/ai-pr-reviewer) | 1 | 2026-07-24 | _(no description)_ | `noname/099_battalaakshitha881-star-ai-pr-reviewer` | noname |
| 100 | [jbreite/review-pr-by-evidence](https://github.com/jbreite/review-pr-by-evidence) | 0 | 2026-07-24 | A PR-review skill inspired by Theo’s evidence-first approach to reviewing code. | `noname/100_jbreite-review-pr-by-evidence` | noname |

## Notes


### Counts
- top-stars/: 50/50 target repos present.
- noname/: 100/100 target repos present.

### Download method
Each repo was shallow-cloned (`git clone --depth 1`), then `.git/`, `node_modules/`, `dist/`, `build/`,
`.venv/`, `venv/`, `target/`, `vendor/`, `__pycache__/`, `.next/`, and `coverage/` were stripped. This is
lean-ish but not minimal — some repos are the AI code-review *product* itself (full app source, e.g.
`kodustech/kodus-ai`, `reviewboard/reviewboard`, `HexmosTech/git-lrc`) rather than a single SKILL.md, so
their folders are tens of MB. Single-file/skill-only repos (most of the `noname/` codex-review-skill,
pr-review-skill, claude-code-review-skill entries) are a few KB to a few hundred KB.

### Swaps / exceptions made during download
- **top-stars #016**: `qdhenry/Claude-Command-Suite` (1323 stars) could not be cloned on this Windows
  filesystem — it contains a file `.claude/commands/svelte/svelte:a11y.md` with a literal colon, which
  Windows NTFS forbids in filenames. Replaced with the next relevant candidate,
  `AmirShayegh/codex-claude-bridge` (23 stars, Claude Code MCP-based automated code review via OpenAI Codex).
- **noname #080**: `eggai-tech/qualops` contains a huge embedded eval-fixture tree
  (`evals/datasets/crb/crb-keycloak-*/...`) with paths exceeding Windows' ~260-char path limit. The
  `evals/` subtree was excluded (sparse checkout + manual strip); the actual skill/tool source
  (README, action.yml, docs/, package.json, qualops-config.schema.json, etc.) is intact.
- A handful of other clones (e.g. `sourcery-ai/sourcery`, `HexmosTech/git-lrc`,
  `code-review-checklists/java-concurrency`, `athola/claude-night-market`, `religa/multi_mcp`,
  `win4r/agent-skills-code-review-router`, `omidbakhshi/merge-mind`, and several `noname/` entries)
  hit transient `git clone` network timeouts on the first pass and succeeded on retry with a longer
  timeout — no content was lost, just needed a second attempt.

### Skipped as irrelevant (excluded from candidate pool)
General "awesome list" / meta-catalog repos were used only as *mining sources*, not harvested as
targets, per the task's own framing ("mine awesome-lists ... for review entries"): `ComposioHQ/awesome-claude-skills`,
`travisvn/awesome-claude-skills`, `VoltAgent/awesome-agent-skills`, `joho/awesome-code-review`,
`kodustech/awesome-ai-code-review`, `sandipan1/awesome-claude-skills`, `Smaiil/awesome-claude-agents`,
`delwerhossain/best-claude-skills`, `tangweigang-jpg/doramagic-awesome-claude-skills-pack`, `dhk/skill-map`,
`davepoon/buildwithclaude`. Also excluded as off-topic despite matching a broad "skill" search: general
agent-skill libraries with no code-review focus (`kepano/obsidian-skills`, `blader/humanizer`,
`K-Dense-AI/scientific-agent-skills`, `OthmanAdi/planning-with-files`, `alirezarezvani/claude-skills`,
`nidhinjs/prompt-master`, `tt-a1i/archify`, `bit4woo/python_sec` (old, non-agent security notes),
`calesthio/OpenMontage`, `Alisa0808/vox-director`, `MetcalfSolutions/Satori`,
`ishwarjha/claude-marketing-research-skill`, `gagaein/lazy-skill-drop`, `tomershahar/executive-influence-coach`,
`internet-court/internet-court-skill`, `tirth8205/code-review-graph` (code-intel graph, not review),
`stark-ai-de/agent-skills`, `mvanhorn/last30days-skill`, `devlensio/devlensOSS` (visualizer, not review)).

### Rate limits / issues
No hard GitHub API/search rate-limit errors were hit (`gh search repos` capped at 50 results/query as
requested, ~26 queries run). A handful of `git clone` calls hit transient network timeouts (connection
resets to github.com), all resolved on retry — see the swaps section above. `jq` is not installed in this
shell environment; all JSON processing was done with Python instead.

### Honesty on target vs. actual
Both buckets hit their numeric targets exactly (50 and 100). Candidate pool quality varies: the tail of
the `noname/` bucket (many 0-star `*/ai-pr-reviewer`, `*/code-review-agent` repos, several clearly
tutorial/bootcamp forks of the same template) is weaker signal than the head — flagged here rather than
silently presented as uniformly high-quality. If a stricter "genuinely novel, multi-commit, non-template"
bar were applied, the noname count would likely drop to roughly 40-60 genuinely distinct projects; the
rest are still legitimate GitHub repos matching the search criteria (recently pushed, low-star, code-review
agent skill), just structurally similar to each other (many are `ai-pr-reviewer` GitHub Action forks/clones
from a shared tutorial lineage).
