# Claude Code MCP 服务配置详解

在现代 AI 辅助开发环境中，Model Context Protocol (MCP) 服务扮演着至关重要的角色。本文将深入解析一个完整的 Claude Code MCP 配置，帮助你打造强大的开发工作站。

## 什么是 MCP 服务？

Model Context Protocol (MCP) 是一个开放标准，允许 AI 模型与外部工具和服务进行交互。通过 MCP，Claude Code 可以访问各种专业服务，从而大大扩展其功能边界。

## 配置文件概览

本配置展示了一个完整的 Claude Code MCP 生态系统，包含 7 个核心服务。MCP 配置通常存储在全局配置文件中，各项目可以选择启用特定服务：

### 全局 MCP 配置结构
```json
{
  "mcpServers": {
    "context7": { /* 智能文档服务 */ },
    "browser-tools": { /* 浏览器自动化工具 */ },
    "fetch": { /* 网络内容获取 */ },
    "neo4j-memory": { /* 知识图谱存储 */ },
    "Figma": { /* 设计协作平台 */ },
    "github": { /* 代码托管服务 */ },
    "vercel": { /* 部署平台服务 */ }
  }
}
```

### 项目级配置
每个项目都有独立的 MCP 配置选项：
- `mcpServers`: 项目特定的服务配置
- `enabledMcpjsonServers`: 启用的全局服务列表
- `disabledMcpjsonServers`: 禁用的全局服务列表

## 服务详细配置

### 1. Context7 - 智能文档服务

```json
"context7": {
  "command": "npx",
  "args": [
    "-y",
    "@upstash/context7-mcp",
    "--api-key",
    "ctx7sk-8bbed7ee-5e00-4f0e-8e01-4529320e3a2b"
  ]
}
```

**功能特色**：
- 🔍 **实时文档检索**：获取最新的库文档和API参考
- 📚 **智能搜索**：精确定位所需的技术资料
- 💡 **代码示例**：提供丰富的实际应用案例

**使用场景**：
- 查询最新的 React、Vue、Next.js 文档
- 获取 TypeScript 类型定义
- 寻找最佳实践和代码示例

### 2. Browser Tools - 浏览器自动化工具

```json
"browser-tools": {
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y", 
    "@agentdeskai/browser-tools-mcp@1.2.0"
  ],
  "env": {}
}
```

**核心能力**：
- 🔍 **性能审计**：自动分析网页性能指标
- ♿ **可访问性测试**：检查 WCAG 合规性
- 🔎 **SEO 优化**：搜索引擎优化建议
- 📱 **响应式测试**：多设备兼容性验证

**实际应用**：
- 网站性能优化分析
- 移动端适配测试
- 用户体验改进建议

### 3. Fetch - 网络内容获取

```json
"fetch": {
  "args": ["mcp-server-fetch"],
  "command": "uvx"
}
```

**主要功能**：
- 🌐 **智能爬取**：获取任意网页内容
- 📄 **格式转换**：自动转换为 Markdown
- 🔗 **链接处理**：智能处理重定向和链接

**使用场景**：
- 竞品分析和市场研究
- 技术文档收集
- 内容整合和参考

### 4. Neo4j Memory - 知识图谱存储

```json
"neo4j-memory": {
  "command": "npx",
  "args": ["-y", "@knowall-ai/mcp-neo4j-agent-memory"],
  "env": {
    "NEO4J_URI": "bolt://localhost:7687",
    "NEO4J_USERNAME": "neo4j",
    "NEO4J_PASSWORD": "graphiti",
    "NEO4J_DATABASE": "neo4j"
  }
}
```

**核心特性**：
- 🧠 **智能记忆**：存储项目知识和决策历史
- 🔗 **关联分析**：建立概念之间的联系
- 📊 **知识图谱**：可视化项目架构和依赖关系

**价值体现**：
- 项目知识积累和传承
- 决策过程可追溯
- 团队协作知识共享

### 5. Figma - 设计协作平台

```json
"Figma": {
  "type": "http",
  "url": "http://127.0.0.1:3845/mcp"
}
```

**设计能力**：
- 🎨 **设计文件访问**：直接读取 Figma 设计稿
- 📐 **尺寸获取**：精确的组件和布局信息
- 🔄 **设计同步**：实时同步设计变更

**开发价值**：
- 设计到代码的无缝转换
- 像素级还原设计稿
- 设计师与开发者协作桥梁

### 6. GitHub - 代码托管与协作

```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "github_pat_***"
  }
}
```

**完整功能**：
- 📂 **仓库管理**：创建、克隆、分支操作
- 🔀 **PR 工作流**：自动化 Pull Request 处理
- 🐛 **Issue 跟踪**：问题管理和解决
- 🔍 **代码搜索**：全平台代码检索

### 7. Vercel - 现代化部署平台

```json
"vercel": {
  "type": "http",
  "url": "https://mcp.vercel.com",
  "headers": {}
}
```

**部署能力**：
- 🚀 **一键部署**：自动化部署流程
- 🌍 **全球 CDN**：边缘计算和加速
- 📊 **性能监控**：实时性能分析
- 🔧 **环境管理**：预览和生产环境

## 配置最佳实践

### 安全性配置
1. **API 密钥管理**：使用环境变量存储敏感信息
2. **权限最小化**：只授予必要的访问权限
3. **定期更新**：及时更新服务版本和密钥

### 性能优化
1. **连接池配置**：合理设置连接数量
2. **缓存策略**：启用适当的缓存机制
3. **超时设置**：配置合理的超时时间

### 快速配置指南

#### 1. 全局配置（推荐）
在用户目录的 `.claude.json` 中配置：
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "your-api-key"]
    },
    "browser-tools": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@agentdeskai/browser-tools-mcp@1.2.0"]
    },
    "neo4j-memory": {
      "command": "npx",
      "args": ["-y", "@knowall-ai/mcp-neo4j-agent-memory"],
      "env": {
        "NEO4J_URI": "bolt://localhost:7687",
        "NEO4J_USERNAME": "neo4j",
        "NEO4J_PASSWORD": "graphiti",
        "NEO4J_DATABASE": "neo4j"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-github-token"
      }
    },
    "vercel": {
      "type": "http",
      "url": "https://mcp.vercel.com"
    }
  }
}
```

#### 2. 项目级启用
在项目的 `.claude.json` 中选择性启用：
```json
{
  "projects": {
    "/path/to/your/project": {
      "enabledMcpjsonServers": [
        "context7",
        "github", 
        "neo4j-memory"
      ],
      "disabledMcpjsonServers": [
        "browser-tools"
      ]
    }
  }
}
```

#### 3. 环境依赖安装
```bash
# 安装运行时环境
npm install -g npx
pip install uvx

# 启动 Neo4j 数据库
docker run -p 7687:7687 -e NEO4J_AUTH=neo4j/graphiti neo4j:latest

# 验证安装
claude mcp list
```

## 工作流程集成

### 开发周期集成
1. **需求分析**：使用 Context7 获取技术文档
2. **设计实现**：通过 Figma 获取设计规范
3. **代码开发**：利用 GitHub 进行版本控制
4. **测试验证**：Browser Tools 进行质量检测
5. **部署发布**：Vercel 实现自动化部署
6. **知识积累**：Neo4j Memory 存储项目经验

### 团队协作优势
- **统一标准**：所有团队成员使用相同配置
- **知识共享**：通过 Neo4j Memory 分享项目知识
- **高效沟通**：设计与开发通过 Figma 直接对接

## 故障排除

### 常见问题
1. **连接超时**：检查网络和服务状态
2. **认证失败**：验证 API 密钥和权限
3. **版本兼容**：确保服务版本匹配

### 监控和维护
- 定期检查服务健康状态
- 监控 API 使用配额
- 备份重要的配置和数据

## 实用配置模板

### 基础开发配置
适用于大多数项目的最小配置：
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "ctx7sk-your-key"]
    }
  }
}
```

### 全栈开发配置
包含前后端开发所需的完整服务：
```json
{
  "mcpServers": {
    "github": { /* GitHub 服务配置 */ },
    "context7": { /* 文档服务配置 */ },
    "browser-tools": { /* 浏览器测试配置 */ },
    "vercel": { /* 部署服务配置 */ },
    "neo4j-memory": { /* 知识图谱配置 */ }
  }
}
```

### 团队协作配置
包含设计协作和项目管理工具：
```json
{
  "mcpServers": {
    "github": { /* 代码托管 */ },
    "Figma": { /* 设计协作 */ },
    "neo4j-memory": { /* 团队知识库 */ },
    "browser-tools": { /* QA 测试 */ }
  }
}
```

## 未来扩展方向

### 新兴服务集成
- **AI 代码助手**：GitHub Copilot MCP、CodeWhisperer
- **数据库服务**：Supabase、PlanetScale、Neon
- **云服务平台**：AWS MCP、Azure MCP、GCP MCP
- **协作工具**：Linear、Notion、Slack MCP

### 配置演进策略
1. **渐进式添加**：根据项目需求逐步集成新服务
2. **性能优化**：监控服务使用情况，优化配置
3. **安全更新**：定期更新 API 密钥和权限设置
4. **团队同步**：建立配置模板和最佳实践文档

## 总结

这套 MCP 配置方案提供了从基础到高级的完整解决方案，让你能够根据项目需求灵活配置 Claude Code 的功能扩展。

### 关键优势
- **模块化配置**：按需启用服务，避免资源浪费
- **全局复用**：一次配置，多项目受益
- **团队协作**：标准化工具链，提升协作效率
- **持续进化**：支持动态扩展和优化

### 快速上手步骤
1. **复制基础配置**到你的 `.claude.json`
2. **替换 API 密钥**为你的真实凭证
3. **启动必要服务**（如 Neo4j）
4. **验证配置**：运行 `claude mcp list`
5. **项目级调整**：根据需要启用/禁用特定服务

通过这套配置，Claude Code 将成为你最强大的开发伙伴，不仅提升编程效率，更能帮助你建立可持续的知识管理和团队协作体系。开始你的 AI 增强开发之旅吧！