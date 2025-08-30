import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 全局配置
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: "Claude Code 中文指南",
      description: "Claude Code AI 编程助手全面指南",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'Claude Code 指南', link: '/claude-code-intro' }
        ],

        sidebar: [
          {
            text: 'Claude Code 系列文章',
            items: [
              { text: '快速入门', link: '/claude-code-quickstart' },
              { text: '全面介绍', link: '/claude-code-intro' },
              { text: '最佳实践指南', link: '/claude-code-best-practices' },
              { text: '与其他工具对比', link: '/claude-code-comparison' },
              { text: '高级使用技巧', link: '/claude-code-advanced-tips' },
              { text: 'MCP 服务配置', link: '/claude-code-mcp-config' }
            ]
          }
        ],

        socialLinks: [],

        // 中文界面文本
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "Claude Code Guide",
      description: "Comprehensive guide for Claude Code AI programming assistant",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Claude Code Guide', link: '/en/claude-code-intro' }
        ],

        sidebar: [
          {
            text: 'Claude Code Articles',
            items: [
              { text: 'Quickstart', link: '/en/claude-code-quickstart' },
              { text: 'Introduction', link: '/en/claude-code-intro' },
              { text: 'Best Practices', link: '/en/claude-code-best-practices' },
              { text: 'Tool Comparison', link: '/en/claude-code-comparison' },
              { text: 'Advanced Tips', link: '/en/claude-code-advanced-tips' },
              { text: 'MCP Services Config', link: '/en/claude-code-mcp-config' }
            ]
          }
        ],

        socialLinks: []
      }
    }
  }
})
