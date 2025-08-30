# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 VitePress 的 Claude Code 技术文档网站，提供 Claude Code AI 编程助手的全面使用指南。支持中英双语，采用现代响应式设计，优化了移动端体验。

## 开发命令

### 基础命令
所有命令需要在项目根目录下执行：

```bash
# 开发环境
npm run docs:dev        # 启动开发服务器 (默认端口 5173)，支持热重载

# 生产构建  
npm run docs:build      # 构建静态文档站点到 .vitepress/dist

# 预览构建
npm run docs:preview    # 预览构建后的站点
```

## 项目架构

### 核心文件结构
```
/
├── .vitepress/
│   ├── config.mts          # VitePress 主配置文件 (TypeScript)
│   ├── theme/
│   │   ├── index.ts        # 自定义主题配置
│   │   └── custom.css      # 移动端优化样式
│   └── dist/              # 构建输出目录
├── en/                    # 英文版本内容
│   ├── index.md          # 英文首页
│   └── *.md             # 英文文章
├── index.md              # 中文首页 (layout: home)
├── claude-code-*.md      # Claude Code 系列文章
├── package.json          # 项目配置和依赖
├── vercel.json          # Vercel 部署配置
└── .vercelignore        # Vercel 忽略文件
```

### 国际化配置
- **中文 (root)**: 默认语言，路径为 `/`
- **英文 (en)**: 路径为 `/en/`，独立的导航和侧边栏配置
- **语言切换**: 通过右上角语言选择器切换
- **本地化界面**: 按钮、标签、导航文本均已本地化

### 响应式设计
- **移动端优化**: 768px 和 480px 断点
- **自定义样式**: `.vitepress/theme/custom.css` 包含移动端专用样式
- **触摸优化**: 按钮尺寸、间距针对触摸设备优化
- **PWA 支持**: 配置了 viewport、theme-color 等移动端 meta 标签

### 内容组织
- **首页布局**: Hero 区域 + Features 展示
- **技术文章**: 4 篇 Claude Code 深度指南文章
- **导航结构**: 侧边栏按主题分组，支持快速访问
- **Front Matter**: 每个页面支持元数据配置

## 部署配置

### Vercel 部署
- **配置文件**: `vercel.json` 配置 SPA 路由重写
- **忽略文件**: `.vercelignore` 排除不必要的文件
- **构建命令**: `npm run docs:build`
- **输出目录**: `.vitepress/dist`

### 构建优化
1. TypeScript 配置文件提供类型安全
2. Vite 构建系统确保快速构建和热更新
3. 静态资源优化和代码分割
4. 移动端样式按需加载

## 开发规范

### Markdown 编写
- 使用 VitePress 增强语法（容器、代码组、数学公式等）
- Front Matter 配置页面标题、描述和其他元数据
- 代码块支持语法高亮和行号显示
- 支持 Vue 组件嵌入

### 样式开发
- 响应式优先：先适配移动端，再扩展到桌面端
- 断点使用：768px (平板)、480px (手机)
- CSS 变量：使用 VitePress 内置的主题变量
- 渐进增强：确保基础功能在所有设备正常工作

### 内容维护
- 双语内容同步更新
- 链接检查：确保内部链接和外部链接有效
- 图片优化：使用合适格式和尺寸
- SEO 优化：合理设置页面标题、描述和关键词

## 技术栈特点

- **VitePress 1.6.4**: 基于 Vite 的现代静态站点生成器
- **TypeScript**: 配置文件类型安全
- **响应式设计**: 移动端优先的设计理念
- **国际化**: 内置 i18n 支持，中英双语
- **PWA 就绪**: 移动端 Web App 体验
- **Vercel 部署**: 全球 CDN 加速和自动部署