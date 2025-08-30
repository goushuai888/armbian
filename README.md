# Claude Code 技术文档网站

[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black?logo=vercel)](https://vercel.com)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646cff?logo=vite)](https://vitepress.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#-许可证)

> 🚀 基于 VitePress 的 Claude Code AI 编程助手完整指南，提供中英双语支持和响应式设计

## 📖 项目简介

这是一个专为 Claude Code 用户打造的技术文档网站，提供从入门到进阶的全面使用指南。网站采用现代化的响应式设计，完美适配移动端设备，支持中英双语切换。

### ✨ 主要特色

- 🧠 **智能理解** - 深度理解代码逻辑和业务意图
- 🛠️ **全栈支持** - 覆盖前端、后端、DevOps 等全栈开发
- 🚀 **效率提升** - 自动化代码审查、Bug 修复、重构优化
- 🔧 **高度可扩展** - 支持 MCP 协议扩展和自定义工作流
- 👥 **团队协作** - 内置团队配置管理和知识共享
- 🛡️ **安全可靠** - 企业级安全保护和权限控制

## 🌍 在线预览

- **中文版**: [主站点](https://armbian.vercel.app)
- **English**: [English Version](https://armbian.vercel.app/en)

## 📱 响应式设计

网站针对不同设备进行了精心优化：

- **桌面端 (≥768px)**: 完整视觉效果，丰富交互动画
- **平板端 (<768px)**: 简化背景，优化卡片布局
- **移动端 (<480px)**: 极简模式，纯白背景，专注内容

## 📚 内容结构

### 核心指南文章

1. **[Claude Code 入门指南](./claude-code-intro.md)** - 快速上手和基础概念
2. **[最佳实践](./claude-code-best-practices.md)** - 高效使用技巧和规范
3. **[功能对比分析](./claude-code-comparison.md)** - 与传统工具的对比优势
4. **[进阶使用技巧](./claude-code-advanced-tips.md)** - 高级功能和定制配置

### 双语支持

- **中文版本**: 根目录下的所有 `.md` 文件
- **英文版本**: `en/` 目录下对应的英文翻译

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm (推荐)
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
npm run docs:dev

# 访问 http://localhost:5173
```

### 构建部署

```bash
# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 🛠️ 技术栈

- **[VitePress](https://vitepress.dev)** - 现代静态站点生成器
- **[Vue 3](https://vuejs.org)** - 渐进式 JavaScript 框架
- **[TypeScript](https://www.typescriptlang.org)** - 类型安全的配置
- **[Vercel](https://vercel.com)** - 全球 CDN 部署平台

## 📂 项目结构

```
├── .vitepress/
│   ├── config.mts          # VitePress 配置文件
│   ├── theme/              # 自定义主题
│   │   ├── index.ts        # 主题入口
│   │   └── custom.css      # 自定义样式
│   └── dist/               # 构建输出
├── en/                     # 英文版本内容
│   ├── index.md           # 英文首页
│   └── *.md              # 英文文章
├── claude-code-*.md       # 中文技术文章
├── index.md               # 中文首页
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 🎨 自定义配置

### 主题配置

网站支持以下自定义配置：

- **响应式断点**: 768px (平板) 和 480px (手机)
- **主题色彩**: 基于 VitePress 默认主题优化
- **移动端优化**: 触摸友好的交互设计

### 内容配置

- **国际化**: 通过 VitePress i18n 支持中英双语
- **导航结构**: 在 `config.mts` 中配置侧边栏和导航
- **元数据**: 每个页面支持 Front Matter 配置

## 🚀 部署

### Vercel 部署 (推荐)

1. Fork 此仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 部署设置会自动从 `vercel.json` 读取
4. 自动部署到全球 CDN

### 手动部署

```bash
# 构建项目
npm run docs:build

# 上传 .vitepress/dist 目录到您的服务器
```

### GitHub Actions

项目包含自动部署配置 (`.github/workflows/deploy.yml`)，支持推送时自动构建和部署。

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. Fork 此仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 贡献类型

- 📝 文档改进和错误修正
- 🌐 多语言翻译
- 🎨 界面和用户体验优化
- ⚡ 性能优化
- 🐛 Bug 修复

## 📄 许可证

本项目采用 MIT License 许可证。

## 📞 联系方式

- **Issue**: [GitHub Issues](https://github.com/goushuai888/armbian/issues)
- **Discussion**: [GitHub Discussions](https://github.com/goushuai888/armbian/discussions)

## 🙏 致谢

感谢以下项目和工具的支持：

- [VitePress](https://vitepress.dev) - 现代文档生成器
- [Vue.js](https://vuejs.org) - 渐进式框架
- [Vercel](https://vercel.com) - 部署平台
- [Claude AI](https://claude.ai) - AI 编程助手

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给它一个 Star！**

Made with ❤️ by Claude Code Community

</div>