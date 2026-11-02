---
title: 看板娘
description: 把萌萌的看板娘抱回家
origin: self
tags: [macOS, agent]
icon: ./images/icon.png
download: https://github.com/super-213/AI-girlfriend/releases/latest
website: https://github.com/super-213/AI-girlfriend
repository: https://github.com/super-213/AI-girlfriend
---

## 关于看板娘

一个住在 Mac 桌面上、会陪伴用户，也能替用户动手做事的 AI 伙伴。你可以直接让它打开应用、查找电脑中的文件和执行受控操作；也可以把文件拖到角色身上，再用自然语言要求它分析数据、整理内容或完成其他处理。任务进行时，角色会通过动作和状态反馈展示当前进度；空闲时则保留桌宠的互动与情绪陪伴。

## 产品定位

> **会陪你，也会替你动手的 Mac 桌面伙伴。**

看板娘面向日常使用 Mac 处理文件、数据和应用操作的用户。用户不需要编写代码，也不需要理解 Shell、AppleScript、工具调用或 Agent 工作流，只需用自然语言说明想做什么。

产品的价值层级如下：

- **Agent 能力是核心功能价值**：真正帮助用户查找资料、处理文件、分析数据和操作电脑。
- **角色陪伴是产品形态与情绪价值**：在工作过程中保持存在感，并用动作表达任务状态。
- **自然语言是主要操作方式**：复杂能力应隐藏在简单指令之后，遵循“能力要高级，操作要普通”。
- **桌面常驻是主要入口**：用户无需切换到专门的开发工具或自动化平台即可发起任务。

看板娘不是以编程为主要场景的 Coding Agent，也不只是更换了角色外观的聊天机器人。Skills、命令、触发器和自动化等高级能力为日常任务服务，不应要求普通用户先理解或配置这些技术概念。

## 核心使用场景

1. **打开应用**：例如“帮我打开 Numbers”“打开 Safari”。
2. **查找本机文件**：例如“找一下我上周下载的销售报表”，并在候选结果中打开或定位文件。
3. **拖放后分析和处理**：把文件或目录拖到角色身上，再要求它总结、分类、转换、整理或生成结果。
4. **处理数据与文档**：读取表格、PDF、Word、图片等内容，分析数据并生成 XLSX、DOCX、PPTX 或 PDF。
5. **操作电脑完成任务**：优先使用稳定的结构化工具；没有专用工具时，通过 macOS Shortcuts、AppleScript、辅助功能以及后续的视觉 Computer Use 能力完成跨应用操作。

Computer Use 的长期目标是形成“观察当前界面 → 判断下一步 → 执行点击、输入、滚动或拖动 → 再次观察并验证结果”的闭环。涉及发送、删除、覆盖、安装或其他高风险操作时，必须先向用户展示清晰、易懂的确认信息。

### 主要特性

- 🎭 **多状态角色**：内置角色 + 自定义角色（最多 3 个），支持 GIF/APNG/PNG/JPEG、状态回退和多素材轮换
- 🧭 **状态驱动桌宠**：支持 idle、thinking、talking、working、waitingForConfirmation、success、error、sleeping 等 13 种状态
- 🖱️ **桌面级交互**：透明区域整窗穿透、Alpha 命中拖拽、位置恢复、动态窗口尺寸和屏幕边界约束
- 🤖 **AI 对话**：支持智谱清言、OpenAI-Compatible、Ollama（流式输出）
- 📎 **拖放文件任务**：把文件或目录拖到角色上，再输入分析、整理或处理指令
- 💬 **完整附件对话**：对话窗口支持文件选择、拖放、附件历史与图片多模态理解
- 🖥️ **桌面行动**：结构化打开应用、Spotlight 搜索、打开文件与 Finder 定位
- 🗂️ **原生结果卡片**：文件搜索结果可多选、打开、Finder 定位或再次加入输入
- 📄 **结构化文档**：读取和生成 XLSX、DOCX、PPTX 与 PDF（PPTX 写出使用 Keynote）
- 🧩 **macOS 应用自动化**：通过 Shortcuts、AppleScript 和辅助功能执行经确认的跨应用操作
- ↩️ **计划、差异与撤销**：变更前展示操作计划/文本差异，并可撤销最近的文件操作
- 🔐 **低打扰安全界面**：云端文件提示、目录授权状态和对话内工具日志可在偏好设置中独立开关，完整审计始终保留在设置页
- 🪟 **悬浮对话窗**：`Ctrl + T` 呼出独立无边框聊天窗口
- 🧠 **技能注入**：支持 Codex Agent Skill 标准目录（`SKILL.md` + 可选 `scripts/` 等资源），并兼容旧版单 `.md` 技能
- 📚 **外置 RAG 知识库**：可绑定多个任意目录，文档、分块和向量索引保存在所选目录内，支持 Agent 写入和带来源的知识问答
- 🛰️ **Codex 任务感知**：只读监听 Codex CLI / Desktop 本地 rollout，不干扰桌宠日常状态；任务完成后立即在输出框展示最终回复
- ⏱️ **自动化流程**：在偏好设置中创建常用提示词，按一次、15 分钟、小时、天、周、月、年等频率自动发送给模型
- 🧾 **命令执行管道**：模型可生成命令，客户端二次确认并执行安全命令
- 🧩 **结构化控制 API**：通过 `PetControlService` 提供 sendMessage、switchCharacter、runAutomation、updateSettings、importSkill 等稳定 Swift API
- 📝 **审计日志**：控制服务记录动作来源、请求 ID、执行状态和错误信息，便于追踪外部 Agent 行为
- 🎵 **音乐请求**：用户可配置 MP3 自定义工具，由 Agent 决定何时调用；其他音乐任务可由已导入的 Skill 指导
- 💾 **数据持久化**：普通配置使用 `@AppStorage + UserDefaults`，API Key 使用 macOS Keychain
- 🧰 **快捷入口**：右键快捷菜单、双击完整对话、Dock + 菜单栏入口
- ⏰ **自动交互**：随机间隔（270-330 秒）自动播放动作和消息

---

## 核心功能

### 1. 宠物交互
- 左键短按播放互动素材，拖动超过 4pt 时移动窗口且不触发点击
- 右键打开快捷菜单，双击打开完整对话
- 悬停显示输入框，AI 回复在限高气泡中流式展示
- 主气泡与完整对话窗口均可停止生成
- 透明像素和窗口空白区域不阻挡后方应用

### 2. 偏好设置
- **风格**：按桌宠绑定系统提示词、临时输入框提示语和随机主动消息，切换桌宠时自动切换
- **模型设置**：Provider、Model、API URL、API Key
- **布局**：休息阈值、气泡时长、命令确认方式和原布局参数
- **技能**：导入或生成 `agent.md`，新建/导入标准目录 Skill，并兼容旧版单 `.md` 技能
- **知识库**：添加、启停或移除外置知识库目录；移除引用不会删除目录内的 `.kanban-rag/index.json`
- **自动化**：新增、编辑、启停和删除自动化流程，设置名称、提示词和运行频率
- **角色绑定**：切换角色，导入 GIF/APNG/PNG/JPEG，并为每个业务状态配置多份素材与预览
- **关于**：应用信息与当前角色显示

### 3. 自动化流程
- 在偏好设置 → 自动化中创建常用提示词流程
- 支持仅运行一次、每15分钟、每小时、每天、每N天（2-7 天）、每周、每月、每年
- 可快速启用/停用或删除流程；空提示词不会进入调度
- 到期后自动把提示词发送给模型，并复用主宠物输出框显示结果
- 已运行的一次性流程会自动停用，重复流程会更新下次运行时间

### 4. 对话窗口
- `Ctrl + T` 打开悬浮对话窗口
- 支持多轮上下文，支持“新建对话”
- 使用原生 `tool_calls` 驱动 Agent 循环，而不是解析模型生成的命令文本
- 工具执行结果以 `tool message` 回灌模型，高风险操作需要用户确认
- 每轮注入当前本地日期、时间和时区

### 5. 通用 Agent Runtime

主窗口对话、设置页提示词自动化和 Ctrl+T 完整对话均由通用 Agent Runtime 编排，当前内置工具包括：

- `get_current_datetime`：读取本机日期、时间、星期和时区
- `list_knowledge_bases` / `search_knowledge_base`：列出并使用语义向量 + 关键词混合方式检索已启用的外置知识库
- `add_to_knowledge_base`：经用户确认后，将文本或 PDF、Office、RTF、图片 OCR 等本机文档分块并索引到指定知识库
- `list_directory` / `read_file`：目录和文本文件读取
- `read_document` / `get_file_info`：读取 PDF、Word、图片 OCR 等文档内容及元数据
- `search_files` / `open_file` / `reveal_in_finder`：Spotlight 搜索、打开文件和 Finder 定位
- `open_application`：按应用名称或 bundle identifier 启动 macOS 应用
- `write_text_file` / `copy_file` / `move_file`：经用户确认后写入、复制或移动文件
- `write_document`：结构化生成 PDF、DOCX、XLSX 或 PPTX
- `list_shortcuts` / `run_shortcut`：查看并运行 macOS 快捷指令
- `run_applescript` / `control_application`：经确认执行 AppleScript 或辅助功能操作
- `observe_desktop` / `perform_ui_action`：观察屏幕与 Accessibility 元素，维持跨观察的稳定窗口/元素身份和 AX 增量变化，理解表格、树、列表、滚动区域、WebView、焦点、选中、禁用与弹窗状态；AX 稀疏时自动用 OCR 补足，动作后再按预期状态自动验证
- 完整桌面动作：鼠标移动、悬停、按住/释放、精确拖拽、分段惯性滚动、特殊键/组合键、剪贴板文本与文件粘贴、菜单层级、打开/保存/目录面板和 Finder 跨应用文件拖放
- 自动恢复：验证失败时重新激活应用、执行强制 AX+OCR 观察并恢复按住的鼠标状态；仅对可证明幂等的设值、移动、悬停和释放动作自动重放一次
- `present_action_plan` / `undo_last_file_operation`：变更计划审批与最近文件操作撤销
- `run_command`：按用户配置的命令权限策略执行非交互式 Shell 命令
- `list_pet_characters` / `switch_pet_character`：桌宠角色查询与切换
- `list_automations` / `run_automation`：自动化查询与执行
- `list_configured_actions` / `run_configured_action`：查询并运行用户配置的动作模块
- `get_codex_task_status`：查询当前运行中的 Codex 任务、状态、工作目录和正在调用的工具

`AgentTool` 协议与 `AgentToolRegistry` 支持继续注册结构化工具。Runtime 支持多工具调用、结果回灌、未知工具/参数错误反馈、取消和人在回路确认。`APIManager` 读取当前模型配置并创建 AgentSDK Provider；Qwen/OpenAI-compatible、智谱和 Ollama 的请求构建与流式解析由 `AgentSDK/Sources/KanbanAgentSDK/Providers` 负责。

长会话接近上下文预算时，Runtime 会自动压缩较早轮次：保留稳定的系统提示和最近的完整用户轮次，将较早对话、工具调用与结果整理为结构化摘要。用户也可以通过 `/compact_context` 工具主动触发压缩；主动压缩不受自动阈值限制，会保留当前最新完整轮次并摘要更早内容。对使用业务空间专属域名的 OpenAI-Compatible/Qwen 配置，Runtime 会尝试查询模型元数据，并在估算上下文达到模型窗口的 85% 时触发；查询失败或未返回窗口大小时回退到 100,000 Token。压缩以完整轮次为边界，不会拆开 `tool_call`/`tool` 消息；摘要失败时保留原始历史并继续用户请求。界面仍保存完整可见对话，只有发给模型的 Agent 历史会被压缩，压缩请求也不会计入正常对话的缓存命中率。
- 与主窗口共用 `APIManager` 配置（同一套模型参数）

### 6. 命令执行（受控）
- 模型通过原生 `run_command` 工具请求执行命令，不解析回复文本中的命令标记
- 可在设置中选择宠物附近确认卡片或系统确认弹窗
- “命令权限”提供四种策略：任何命令都询问、仅风险命令询问、任何命令都允许、黑名单模式
- 风险模式仅自动放行明确的只读命令；写文件、联网、安装、进程与系统操作会请求确认
- 黑名单模式按不区分大小写的文本规则拒绝命令，其余命令直接执行
- 命令结果以结构化 `tool message` 回注给模型
- 本地自用版本不启用 App Sandbox，因此 Shell 子进程可以访问 Homebrew 等外部可执行文件

### 7. 音乐请求
- 用户配置的 MP3 动作作为自定义工具提供给 Agent，由 Agent 通过 `run_configured_action` 调用
- 不再按“我想听 / 播放 / 来一首”等关键词直接打开 Apple Music 搜索；可使用已导入的 Skill 指导 Agent 操作音乐 App

### 8. 机器可调用控制服务
- `PetControlService` 是应用内部唯一的稳定控制面
- 支持结构化请求/响应、错误码、请求来源、请求 ID 和 actor 标识
- 当前已覆盖消息发送、角色切换、自动化查询/更新/运行、设置更新和 skill 导入
- UI、未来的 AppIntents/Shortcuts、URL Scheme、localhost HTTP/WebSocket、MCP 都应作为适配层调用该服务

这么做的原因是避免外部大模型或 Agent 依赖 UI 文本、按钮层级、提示词格式或 shell 字符串来“猜”应用行为。稳定 Swift API 能让 OpenClaw 等外部控制方拿到明确的输入输出、错误码和审计记录，也能把权限确认、危险动作拦截和状态判断集中在一个地方维护。
