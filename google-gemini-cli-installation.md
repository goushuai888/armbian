# Google Gemini CLI 安装与配置指南

> 将 Google Gemini 的强大 AI 能力直接带到你的终端，轻量级访问大语言模型的最直接路径。

## 🌟 项目概述

Google Gemini CLI 是一个开源的 AI 代理工具，将 Gemini 的强大功能直接集成到你的终端环境中。它为开发者提供了从命令行直接访问 Gemini 模型的最便捷方式。

### 核心特性

- **🎯 免费额度**：个人 Google 账户每分钟 60 次请求，每天 1000 次请求
- **🧠 强大的 Gemini 2.5 Pro**：支持 100 万 token 上下文窗口
- **🔧 内置工具**：Google 搜索接地、文件操作、Shell 命令、Web 获取
- **🔌 可扩展性**：支持 MCP（模型上下文协议）自定义集成
- **💻 终端优先**：专为命令行开发者设计
- **🛡️ 开源**：Apache 2.0 许可证

## 📋 系统要求

在开始安装前，确保你的系统满足以下要求：

- **Node.js**：版本 20 或更高
- **操作系统**：macOS、Linux 或 Windows
- **网络连接**：用于模型访问和认证

## 📦 安装方法

### 方法 1：npx 即时运行（推荐）

无需安装，直接运行使用：

```bash
# 使用 npx 直接运行（无需安装）
npx https://github.com/google-gemini/gemini-cli
```

**优势**：
- 无需全局安装
- 始终使用最新版本
- 快速体验工具功能

### 方法 2：npm 全局安装

```bash
# 全局安装 Gemini CLI
npm install -g @google/gemini-cli

# 安装完成后直接运行
gemini
```

### 方法 3：Homebrew 安装（macOS/Linux）

```bash
# 使用 Homebrew 安装
brew install gemini-cli

# 运行工具
gemini
```

## 🔄 版本管理策略

Gemini CLI 提供三种发布版本：

### 稳定版本（latest）

```bash
npm install -g @google/gemini-cli@latest
```

- **发布时间**：每周二 UTC 20:00
- **稳定性**：经过完整测试和验证
- **适用场景**：生产环境使用

### 预览版本（preview）

```bash
npm install -g @google/gemini-cli@preview
```

- **发布时间**：每周二 UTC 23:59
- **特点**：新功能抢先体验，可能存在问题
- **适用场景**：测试新功能，提供反馈

### 每夜构建版本（nightly）

```bash
npm install -g @google/gemini-cli@nightly
```

- **发布时间**：每天 UTC 00:00
- **特点**：包含最新的主分支更改
- **适用场景**：开发者测试，高风险环境

## 🔐 身份验证配置

### 方法 1：OAuth 登录（推荐）

**适用场景**：个人开发者和 Gemini Code Assist 许可证用户

**优势**：
- **免费额度**：60 请求/分钟，1000 请求/天
- **Gemini 2.5 Pro**：100 万 token 上下文窗口
- **无 API 密钥管理**：只需 Google 账户登录
- **自动更新**：始终访问最新模型

#### 基础配置

```bash
# 启动 Gemini CLI，选择 OAuth 认证
gemini
```

#### 企业用户配置

如果你使用组织的付费 Code Assist 许可证：

```bash
# 设置 Google Cloud 项目
export GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_NAME"
gemini
```

### 方法 2：Gemini API 密钥

**适用场景**：需要特定模型控制或付费服务访问的开发者

**优势**：
- **免费额度**：100 请求/天，使用 Gemini 2.5 Pro
- **模型选择**：可选择特定的 Gemini 模型
- **按使用计费**：根据需要升级获得更高限额

#### 配置步骤

```bash
# 1. 从 https://aistudio.google.com/apikey 获取 API 密钥
# 2. 设置环境变量
export GEMINI_API_KEY="YOUR_API_KEY"

# 3. 启动工具
gemini
```

### 方法 3：Vertex AI

**适用场景**：企业团队和生产工作负载

**优势**：
- **企业功能**：高级安全性和合规性
- **可扩展性**：更高的速率限制和计费账户
- **集成性**：与现有 Google Cloud 基础架构协同

#### 配置步骤

```bash
# 1. 从 Google Cloud Console 获取 API 密钥
# 2. 设置环境变量
export GOOGLE_API_KEY="YOUR_API_KEY"
export GOOGLE_GENAI_USE_VERTEXAI=true

# 3. 启动工具
gemini
```

## 🚀 快速开始

### 基础使用

#### 在当前目录启动

```bash
gemini
```

#### 包含多个目录

```bash
gemini --include-directories ../lib,../docs
```

#### 指定特定模型

```bash
gemini -m gemini-2.5-flash
```

#### 非交互模式（适用于脚本）

```bash
gemini -p "解释这个代码库的架构"
```

### 实用示例

#### 创建新项目

```bash
cd new-project/
gemini
> 为我写一个 Discord 机器人，使用 FAQ.md 文件回答问题
```

#### 分析现有代码

```bash
git clone https://github.com/google-gemini/gemini-cli
cd gemini-cli
gemini
> 给我一个昨天所有更改的总结
```

## ⚙️ 高级配置

### 环境变量配置

```bash
# 基础配置
export GEMINI_API_KEY="your-api-key"
export GOOGLE_CLOUD_PROJECT="your-project-id"

# 代理配置
export HTTP_PROXY="http://proxy.example.com:8080"
export HTTPS_PROXY="https://proxy.example.com:8080"

# 调试配置
export GEMINI_DEBUG=true
export GEMINI_LOG_LEVEL=debug
```

### 项目特定配置

在项目根目录创建 `GEMINI.md` 文件：

```markdown
# 项目上下文配置

## 项目描述
这是一个 Vue.js 项目，使用 TypeScript 和 Quasar 框架。

## 开发规范
- 使用 pnpm 作为包管理器
- 代码必须通过 TypeScript 类型检查
- 遵循 ESLint 和 Prettier 规范

## 常用命令
- `pnpm dev`：启动开发服务器
- `pnpm build`：构建生产版本
- `pnpm lint`：代码检查
```

## 🔧 核心功能

### 代码理解与生成

- **代码库查询**：查询和编辑大型代码库
- **应用生成**：从 PDF、图像或草图生成新应用
- **调试支持**：使用自然语言调试问题

### 自动化与集成

- **任务自动化**：查询拉取请求或处理复杂的 rebase
- **MCP 服务器**：连接新功能，包括媒体生成
- **脚本运行**：非交互式脚本工作流自动化

### 高级能力

- **Google 搜索接地**：内置实时信息搜索
- **对话检查点**：保存和恢复复杂会话
- **自定义上下文**：GEMINI.md 文件定制行为

## 📚 常用命令参考

### 交互式命令

```bash
# 启动聊天模式
/chat

# 帮助信息
/help

# 查看 MCP 服务器
/mcp

# 保存检查点
/checkpoint save session-name

# 加载检查点
/checkpoint load session-name

# 退出程序
/exit
```

### 文件操作

```bash
# 查看文件
/file read package.json

# 编辑文件
/file edit src/main.ts

# 创建文件
/file create new-component.vue
```

### Shell 集成

```bash
# 运行 shell 命令
/shell ls -la

# 查看 git 状态
/shell git status

# 安装依赖
/shell npm install
```

## 🐛 常见问题排除

### Node.js 版本问题

```bash
# 检查 Node.js 版本
node --version

# 如果版本过低，使用 nvm 升级
nvm install 20
nvm use 20
```

### 权限问题

```bash
# macOS/Linux 权限修复
sudo chown -R $(whoami) ~/.npm

# Windows 以管理员身份运行 PowerShell
# 然后执行安装命令
```

### 代理环境配置

```bash
# 配置 npm 代理
npm config set proxy http://proxy.example.com:8080
npm config set https-proxy https://proxy.example.com:8080

# 配置系统环境变量
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=https://proxy.example.com:8080
```

### 认证失败

```bash
# 清除认证缓存
rm -rf ~/.config/gemini-cli

# 重新启动认证流程
gemini --reset-auth
```

## 🌟 最佳实践

### 项目初始化

```bash
# 1. 进入项目目录
cd your-project

# 2. 创建 GEMINI.md 上下文文件
touch GEMINI.md

# 3. 启动 Gemini CLI
gemini

# 4. 首次使用时描述项目
> 这是一个基于 Vue.js 的前端项目，请帮我分析项目结构
```

### 开发工作流

```bash
# 1. 代码审查
> 帮我审查最近的提交，指出潜在问题

# 2. 功能开发
> 基于现有架构，帮我实现用户认证功能

# 3. 调试协助
> 这个错误是什么意思：TypeError: Cannot read property 'id' of undefined

# 4. 文档生成
> 为这个 API 函数生成详细的文档注释
```

### 性能优化

```bash
# 使用特定模型以节省 token
gemini -m gemini-2.5-flash

# 限制上下文范围
gemini --include-directories src,docs

# 使用检查点避免重复上下文
/checkpoint save current-session
```

## 🔗 相关资源

- **官方文档**：[https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
- **API 密钥获取**：[https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
- **Google Cloud Console**：[https://console.cloud.google.com/](https://console.cloud.google.com/)
- **MCP 协议**：[Model Context Protocol](https://modelcontextprotocol.io/)

## 🎯 总结

Google Gemini CLI 是一个功能强大的终端 AI 工具，为开发者提供了：

1. **多种安装方式**：npx、npm、Homebrew 灵活选择
2. **灵活的认证**：OAuth、API 密钥、Vertex AI 多重选择
3. **丰富的功能**：代码理解、自动化、实时搜索
4. **可扩展性**：MCP 协议支持自定义工具
5. **企业就绪**：安全性和合规性保障

通过本指南的详细步骤，你应该能够顺利安装和配置 Gemini CLI，开始在终端中享受 AI 辅助开发的强大体验。

---

*最后更新：2025-01-06*