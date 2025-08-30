# Claude Code 快速入门

Claude Code 是 Anthropic 开发的 AI 编程助手，通过命令行界面帮助您高效完成编程任务。本指南将带您快速上手 Claude Code。

## 开始之前

在安装和使用 Claude Code 之前，请确保您已准备：

- 终端或命令提示符
- 代码项目目录
- Claude.ai 或 Anthropic Console 账户

## 第一步：安装 Claude Code

### NPM 安装方式

适用于 Node.js 18+ 环境：

```sh
npm install -g @anthropic-ai/claude-code
```

### 原生安装方式

**macOS、Linux、WSL 系统：**

```bash
curl -fsSL claude.ai/install.sh | bash
```

**Windows PowerShell：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

## 第二步：登录您的账户

安装完成后，使用以下命令登录：

```bash
claude /login
```

您可以选择使用：
- **Claude.ai**（推荐）- 更便捷的网页界面
- **Anthropic Console** - 开发者控制台

## 第三步：启动第一次会话

导航到您的项目目录并启动 Claude Code：

```bash
cd /path/to/your/project
claude
```

启动后，Claude Code 将进入交互式模式，等待您的指令。

## 第四步：提出第一个问题

尝试询问一些项目相关的问题，让 Claude Code 了解您的代码：

- "这个项目是做什么的？"
- "这个项目使用了哪些技术栈？"
- "主要入口文件在哪里？"
- "项目的目录结构是怎样的？"

## 第五至八步：编程任务

Claude Code 可以帮助您完成各种编程任务：

### 代码修改和优化
- 修复代码中的 Bug
- 添加新功能
- 重构现有代码
- 优化性能

### Git 操作
- 自动生成提交消息
- 创建分支
- 合并代码

### 测试和文档
- 编写单元测试
- 生成 API 文档
- 创建使用说明

### 示例对话
```
用户: "修复这个函数中的类型错误"
Claude Code: 我来检查代码并修复类型错误...

用户: "为这个组件添加响应式设计"
Claude Code: 我将添加 CSS 媒体查询来实现响应式布局...
```

## 常用命令速查表

| 命令 | 功能 | 示例 |
|------|------|------|
| `claude` | 启动交互模式 | `claude` |
| `claude "任务"` | 执行单次任务 | `claude "修复构建错误"` |
| `claude -p "查询"` | 单次查询 | `claude -p "解释这个函数"` |
| `claude commit` | 创建 Git 提交 | `claude commit` |
| `/help` | 显示帮助信息 | `/help` |
| `/exit` | 退出程序 | `/exit` |

## 高效使用技巧

### 1. 明确具体的请求
❌ 不好："改进这个代码"  
✅ 更好："为这个函数添加错误处理并优化性能"

### 2. 使用分步骤指令
对于复杂任务，可以分解为多个小步骤：
- "首先分析现有代码结构"
- "然后添加新功能"
- "最后编写测试用例"

### 3. 让 Claude Code 先探索
在修改代码前，让 Claude Code 先了解项目结构：
- "分析这个项目的架构"
- "找出所有配置文件"

### 4. 使用快捷键
- `Tab` - 自动补全
- `↑` - 查看历史命令
- `Ctrl+C` - 中断当前操作

## 获取帮助

### 在 Claude Code 内
使用 `/help` 命令获取实时帮助和命令列表。

### 在线资源
- [Claude Code 官方文档](https://docs.anthropic.com/en/docs/claude-code)
- [Discord 社区](https://www.anthropic.com/discord)
- [GitHub 问题跟踪](https://github.com/anthropics/claude-code/issues)

## 下一步

完成快速入门后，您可以：

1. 阅读[最佳实践指南](/claude-code-best-practices)
2. 探索[高级使用技巧](/claude-code-advanced-tips)
3. 查看[与其他工具的对比](/claude-code-comparison)

开始您的 AI 辅助编程之旅吧！Claude Code 将成为您最得力的编程伙伴。