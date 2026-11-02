---
title: Port Viewer
description: 一眼看懂端口被谁占用，以及应用正在进行什么网络活动。
origin: self
tags: [macOS, 开发工具, 网络工具]
icon: ./images/icon.png
download: https://github.com/super-213/port-viewer/releases/latest
website: https://github.com/super-213/port-viewer
repository: https://github.com/super-213/port-viewer
---

## 关于 Port Viewer

Port Viewer 是一款使用 SwiftUI 构建的 macOS 原生端口查看工具。它把 macOS 原生 API 返回的进程、端口和连接信息转换成更容易理解的中文结论，让不熟悉命令行的用户也能快速找到端口占用者，并在明确了解影响后结束对应进程。

所有数据处理都在本机完成，不需要账号，也不会上传进程、连接或扫描结果；主动扫描只会连接用户指定的目标。

## 功能亮点

- **易懂的网络状态**：将 `LISTEN`、`ESTABLISHED` 等技术状态转换为“等待连接”“连接已建立”等中文说明。
- **可视化连接流程**：紧凑表格中直接展示访问来源、端口、进程和连接目标的迷你拓扑；顶部标签切换活动类型，右侧详情展示完整连接关系与技术信息。
- **快速搜索与筛选**：按进程名、PID 或端口搜索，支持范围、访问来源、进程归属、协议、IP 版本和 TCP 状态筛选。
- **TCP 与 UDP 一并查看**：展示监听端口、已建立连接、连接变化和其他网络活动，同时保留完整技术字段。
- **主动 TCP 端口扫描**：测试另一台设备的指定端口，或扫描 IPv4 CIDR 网段；支持常用端口、1–1024、单主机全部端口和自定义端口段。
- **菜单栏快捷入口**：无需打开主窗口即可查看概况、搜索记录、刷新数据或定位到详情。
- **自动刷新**：前台和后台可使用不同刷新间隔，也可暂停或手动刷新。
- **谨慎释放端口**：操作前重新确认进程仍在占用目标端口；优先发送 `SIGTERM`，必要时才提示使用 `SIGKILL`，操作后再次查询验证结果。
- **系统级使用体验**：支持浅色/深色外观、键盘快捷键和 VoiceOver 友好的文字说明。

## 系统要求

- macOS 15.0 或更高版本
- Xcode 16 或更高版本（持续集成使用 Xcode 16.4）
- 系统自带的 `/usr/sbin/lsof`

项目不依赖第三方 Swift Package。
