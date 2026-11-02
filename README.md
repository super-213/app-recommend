# 软件收藏

这是一个使用 Astro 构建的软件目录。软件资料保存在 Markdown 文件中；修改内容后重新构建，即可更新列表和详情页。

## 本地开发

```bash
npm install
npm run dev
```

按终端显示的地址打开网站。其他常用命令：

```bash
npm run build    # 构建静态网站，输出到 dist/
npm run preview  # 在本地预览已构建的网站
```

若受限环境禁止写入 Astro 的用户配置目录，可以在命令前加 `ASTRO_TELEMETRY_DISABLED=1`。运行 `node tests/build-check.mjs` 可使用临时数据检查分页与 Markdown 图片构建；脚本会清理临时内容并恢复正式构建。

## 软件文档目录

所有软件资料放在 `src/content/apps/` 下，每款软件使用一个独立目录：

```text
src/content/apps/
└── example-app/          # 软件短名，用于生成网址
    ├── index.md          # 软件资料和介绍
    └── images/           # 该软件使用的图片
        ├── icon.png
        └── screenshot.png
```

建议目录名使用小写英文字母、数字和连字符，并保证唯一。例如 `example-app` 对应详情页 `/apps/example-app/`。目录名是网址的一部分，修改或删除目录后，原网址会失效。

## Markdown 写法

在 `index.md` 中，开头两行 `---` 之间是 YAML 格式的软件信息，后面是详情页正文。例如：

```markdown
---
title: 示例软件
description: 一句话说明软件的用途。
origin: self
tags: [macOS, 效率工具]
icon: ./images/icon.png
download: https://example.com/download
installCommand: "brew install --cask example-app"
website: https://example.com
repository: https://github.com/example/example-app
---

## 软件介绍

这里介绍软件的用途和适用场景。

![软件主界面](./images/screenshot.png)

## 主要功能

- 功能一：说明它能做什么。
- 功能二：说明它如何帮助用户。

## 系统要求

在这里说明支持的平台和版本。
```

### 字段规范

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 软件名称，显示在卡片和详情页；搜索按名称匹配。 |
| `description` | 是 | 一句话简介，显示在卡片和详情页。 |
| `origin` | 是 | `self` 表示「自己制作」；`recommended` 表示「推荐」。两类软件混合展示。 |
| `tags` | 是 | 标签数组，例如 `[macOS, 效率工具]`。筛选项由所有软件的标签自动汇总，无需单独维护。没有标签时可写 `[]`。 |
| `icon` | 否 | 软件图标相对于 `index.md` 的路径，例如 `./images/icon.png`；省略时使用名称首字母作为占位图。 |
| `download` | 否 | 完整下载地址，显示为醒目的「下载软件」按钮。 |
| `installCommand` | 否 | 安装命令，例如 `brew install --cask example-app`；详情页显示命令和复制按钮，可与下载链接同时使用。填写命令本身，不要加前面的 `$` 提示符。 |
| `website` | 否 | 完整官网地址，显示为「访问官网」按钮。 |
| `repository` | 否 | 完整源码仓库地址，作为内容元数据保存；当前页面不会单独显示该字段。 |

可选字段没有内容时，直接删除整行，不要填写空字符串。链接使用包含 `https://` 的完整地址。YAML 中如果文字包含冒号、井号等特殊字符，可用双引号包起来，例如 `title: "软件名称：专业版"`。

标签按文本匹配，建议统一命名和大小写，例如始终使用 `macOS`，避免与 `MacOS` 形成两个标签。来源标识由 `origin` 控制，不需要写入 `tags`。

### 图片和正文

- 将图标、截图等放到该软件目录的 `images/` 中，使用相对于 `index.md` 的路径引用，例如 `![设置界面](./images/settings.png)`。
- 方括号中填写描述图片内容的文字，方便图片无法显示时阅读，也有助于无障碍访问。
- 正文支持 Markdown 标题、段落、列表、链接、代码和图片。详情页会先显示软件信息和按钮，再用分割线连接正文；正文建议从二级标题 `##` 开始。
- 图片尽量压缩到适合网页展示的尺寸，以减少访客流量和加载时间。不要在正文中加入不确定或未经核实的软件信息。

## 增删改软件

1. **新增**：在 `src/content/apps/` 下新建软件目录和 `images/`，创建 `index.md`，填写必填字段和介绍，按需放入图片及链接。
2. **修改**：编辑该软件的 `index.md` 或 `images/` 中的图片。调整标签后，网站筛选项会在下次构建时自动更新。
3. **删除**：删除该软件的整个目录；下次构建后，它会从列表和详情页消失，旧网址也会失效。
4. **检查**：运行 `npm run build`，再运行 `npm run preview` 检查列表、标签、详情、图片和链接。字段不符合格式时，构建会报告错误。
5. **发布**：确认无误后，将源码、Markdown、图片和 `package-lock.json` 提交并推送到 GitHub；连接仓库的 Cloudflare 项目重新构建后，变更才会显示在线上。
