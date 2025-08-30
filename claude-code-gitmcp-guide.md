# GitMCP：让AI与GitHub无缝协作的MCP服务器

GitMCP 是一个免费开源的 Model Context Protocol (MCP) 服务器，它能将任何 GitHub 项目转换为 AI 文档中心，让你的 AI 助手获得最新、准确的代码文档和示例，从此告别代码幻觉。

## 💡 什么是 GitMCP

GitMCP 解决了一个关键痛点：AI 助手经常对代码库产生幻觉，提供过时或错误的 API 用法。通过 GitMCP，AI 助手可以直接访问 GitHub 项目的最新文档和源码，确保建议的准确性和时效性。

### 核心优势

🚀 **零配置云服务** - 无需安装、注册或下载，直接使用
🧠 **消除AI幻觉** - 提供最新准确的文档和代码示例  
📚 **支持所有GitHub项目** - 公开仓库和 GitHub Pages 均可使用
💬 **内嵌聊天界面** - 直接在浏览器中与文档对话
🔒 **完全私密** - 不收集个人信息，不存储查询记录
⚡ **智能搜索** - 高效的文档检索，节省Token消耗

## 🛠️ 工作原理

GitMCP 基于 Model Context Protocol 标准，为 AI 助手提供以下核心工具：

### 1. 文档获取工具
- `fetch_<repo-name>_documentation` - 获取项目主要文档
- `search_<repo-name>_documentation` - 智能搜索文档内容
- `fetch_url_content` - 获取外部链接内容
- `search_<repo-name>_code` - 搜索仓库代码

### 2. 支持的文档类型（按优先级）
1. **llms.txt** - AI优化的项目文档
2. **项目文档** - AI优化版本的官方文档  
3. **README.md** - 项目根目录说明文件

## 🚀 快速上手

### 步骤1：选择服务类型

GitMCP 提供两种使用模式：

**特定仓库模式**（推荐）
- GitHub仓库：`gitmcp.io/{owner}/{repo}`
- GitHub Pages：`{owner}.gitmcp.io/{repo}`

**通用模式**（灵活性更高）
- 动态端点：`gitmcp.io/docs`

### 步骤2：配置你的AI工具

#### 🎯 Cursor 配置
更新配置文件 `~/.cursor/mcp.json`：
```json
{
  "mcpServers": {
    "gitmcp": {
      "url": "https://gitmcp.io/microsoft/typescript"
    }
  }
}
```

#### 🖥️ Claude Desktop 配置
在设置中编辑配置文件：
```json
{
  "mcpServers": {
    "gitmcp": {
      "command": "npx",
      "args": [
        "mcp-remote", 
        "https://gitmcp.io/microsoft/typescript"
      ]
    }
  }
}
```

#### 🌊 Windsurf 配置
更新配置文件 `~/.codeium/windsurf/mcp_config.json`：
```json
{
  "mcpServers": {
    "gitmcp": {
      "serverUrl": "https://gitmcp.io/microsoft/typescript"
    }
  }
}
```

#### 📝 VSCode 配置
创建或更新 `.vscode/mcp.json`：
```json
{
  "servers": {
    "gitmcp": {
      "type": "sse",
      "url": "https://gitmcp.io/microsoft/typescript"
    }
  }
}
```

#### 🎨 其他支持的工具
- **Cline**：配置文件位置 `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Highlight AI**：通过插件界面添加自定义SSE URL
- **Augment Code**：使用 `npx mcp-remote` 命令配置
- **Msty AI**：通过 JSON 配置导入工具

## 🌟 实际应用示例

### 示例1：Three.js 项目开发
使用 GitMCP 连接到 Three.js 仓库后，AI 助手能够：
- 提供最新的 Three.js API 用法
- 展示正确的场景创建代码
- 避免使用已弃用的方法

### 示例2：框架学习
```javascript
// 配置 GitMCP 连接到 React 仓库
"url": "https://gitmcp.io/facebook/react"

// 然后询问 AI：
"如何使用 React 19 的新特性 use() Hook？"
```

AI 助手将基于最新文档提供准确答案。

### 示例3：动态项目访问
```javascript
// 使用通用端点
"url": "https://gitmcp.io/docs"

// AI 会根据上下文自动选择相关项目
"我想学习 OpenAI Whisper 语音识别模型的工作原理"
```

## 📊 项目徽章

GitMCP 提供项目徽章，展示文档访问次数并提供快速访问入口：

```markdown
[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/OWNER/REPO)](https://gitmcp.io/OWNER/REPO)
```

### 徽章自定义选项
| 参数 | 描述 | 默认值 | 示例 |
|------|------|--------|------|
| `color` | 徽章颜色 | `aquamarine` | `?color=green` |
| `label` | 徽章标签 | `GitMCP` | `?label=Documentation` |

## 🔒 隐私与安全

GitMCP 高度重视用户隐私：

✅ **无需认证** - 不收集个人身份信息
✅ **不存储查询** - 所有请求都是实时处理
✅ **遵循robots.txt** - 尊重网站所有者的爬取规则
✅ **开源透明** - 支持自部署，代码完全开放
✅ **按需访问** - 仅在用户查询时访问公开内容

## 🏗️ 技术架构

### 核心技术栈
- **前端框架**: React Router 7
- **运行时**: Cloudflare Workers
- **API框架**: Hono
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **AI集成**: 多种AI SDK支持

### 部署架构
- **CDN**: Cloudflare 全球网络
- **无服务器**: 边缘计算降低延迟
- **高可用**: 分布式架构确保稳定性

## 🎯 最佳实践

### 1. 选择合适的模式
- **固定项目开发**：使用特定仓库模式提高安全性
- **多项目研究**：使用通用模式提升灵活性

### 2. 优化查询效率
- 使用具体的搜索关键词
- 结合项目名称和功能描述
- 避免过于宽泛的问题

### 3. 集成工作流程
- 在项目 README 中添加 GitMCP 徽章
- 配置团队统一的 MCP 设置
- 建立基于最新文档的开发规范

## 🚦 常见问题

**Q: GitMCP 收费吗？**
A: 完全免费，无任何使用限制。

**Q: 支持私有仓库吗？**
A: 目前仅支持公开的 GitHub 仓库和 Pages。

**Q: 如何确保文档是最新的？**
A: GitMCP 实时访问 GitHub，确保获取的都是最新内容。

**Q: 可以自部署吗？**
A: 支持，项目开源且提供完整的部署文档。

## 🤝 贡献与支持

GitMCP 是一个活跃的开源项目，欢迎社区贡献：

- 🐛 [报告问题](https://github.com/idosal/git-mcp/issues)
- 💡 [提出建议](https://github.com/idosal/git-mcp/discussions)  
- 🔧 [参与开发](https://github.com/idosal/git-mcp/blob/main/.github/CONTRIBUTING.md)
- ⭐ [Star项目](https://github.com/idosal/git-mcp)

### 本地开发环境
```bash
# 克隆仓库
git clone https://github.com/idosal/git-mcp.git
cd git-mcp

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 📈 未来规划

GitMCP 持续改进中，计划功能包括：
- 支持更多文档格式
- 增强AI对话体验
- 提供更多集成选项
- 支持私有仓库访问
- 添加缓存机制提升性能

## 🏆 总结

GitMCP 正在改变开发者与 AI 工具协作的方式。通过提供准确、实时的文档访问，它让 AI 助手成为真正可靠的编程伙伴。

无论你是资深开发者还是编程新手，GitMCP 都能帮助你：
- 📖 获取最新的API文档和使用示例
- 🔍 快速理解复杂的代码库结构
- 💡 发现最佳实践和设计模式
- 🚀 提升开发效率和代码质量

立即体验 GitMCP，让你的 AI 助手变得更加智能和可靠！

---

**项目信息**
- 开源协议：Apache 2.0
- 官方网站：https://gitmcp.io/
- GitHub仓库：https://github.com/idosal/git-mcp
- 作者：[@idosal](https://twitter.com/idosal1) & [@liadyosef](https://twitter.com/liadyosef)

*本文档基于 GitMCP v1.0.0 编写，更新于 2025年8月*