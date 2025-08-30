# Claude Code 斜杠命令

斜杠命令是 Claude Code 交互模式中的强大功能，允许你通过简单的命令控制 Claude 的行为和执行特定任务。本指南详细介绍了内置命令、自定义命令以及 MCP 命令的使用方法。

> 📖 **官方文档**: [Claude Code 斜杠命令](https://docs.anthropic.com/zh-CN/docs/claude-code/slash-commands) | [完整指南](https://docs.anthropic.com/zh-CN/docs/claude-code/overview)

## 内置斜杠命令

以下是 Claude Code 提供的所有内置斜杠命令：

| 命令 | 用途 |
| --- | --- |
| `/add-dir` | 添加额外的工作目录 |
| `/agents` | 管理用于专门任务的自定义AI子代理 |
| `/bug` | 报告错误（将对话发送给Anthropic） |
| `/clear` | 清除对话历史 |
| `/compact [instructions]` | 压缩对话，可选择性地提供重点指令 |
| `/config` | 查看/修改配置 |
| `/cost` | 显示令牌使用统计 |
| `/doctor` | 检查您的Claude Code安装的健康状况 |
| `/help` | 获取使用帮助 |
| `/init` | 使用CLAUDE.md指南初始化项目 |
| `/login` | 切换Anthropic账户 |
| `/logout` | 从您的Anthropic账户登出 |
| `/mcp` | 管理MCP服务器连接和OAuth身份验证 |
| `/memory` | 编辑CLAUDE.md内存文件 |
| `/model` | 选择或更改AI模型 |
| `/permissions` | 查看或更新权限设置 |
| `/pr_comments` | 查看拉取请求评论 |
| `/review` | 请求代码审查 |
| `/status` | 查看账户和系统状态 |
| `/terminal-setup` | 安装Shift+Enter键绑定用于换行（仅限iTerm2和VSCode） |
| `/vim` | 进入vim模式以在插入和命令模式之间切换 |

### 常用命令详解

#### `/help` - 帮助命令
查看所有可用命令的列表和简短描述。

#### `/model` - 模型选择
```bash
/model                    # 查看当前模型
/model opus              # 切换到 Opus 模型
/model sonnet            # 切换到 Sonnet 模型
```

#### `/config` - 配置管理
查看和修改 Claude Code 的配置设置，包括默认模型、权限设置等。

#### `/clear` - 清除历史
清除当前会话的对话历史，开始新的对话。

#### `/cost` - 成本跟踪
显示当前会话的令牌使用统计和成本信息。

## 自定义斜杠命令

自定义斜杠命令允许你将经常使用的提示定义为 Markdown 文件，实现工作流程自动化。

### 命令类型

#### 项目命令
存储在项目仓库中，与团队共享。在 `/help` 中显示为 "(project)"。

**位置**: `.claude/commands/`

**示例：创建 `/optimize` 命令**
```bash
# 创建命令文件
mkdir -p .claude/commands
echo "请优化以下代码的性能和可读性：\n\n\$ARGUMENTS" > .claude/commands/optimize.md
```

#### 个人命令
在所有项目中可用的个人命令。在 `/help` 中显示为 "(user)"。

**位置**: `~/.claude/commands/`

**示例：创建 `/security-review` 命令**
```bash
# 创建个人命令
mkdir -p ~/.claude/commands
cat > ~/.claude/commands/security-review.md << EOF
---
description: 进行安全代码审查
allowed-tools: Bash(grep:*), Bash(find:*)
---
请对以下代码进行全面的安全审查：

\$ARGUMENTS

重点检查：
- SQL 注入漏洞
- XSS 攻击向量
- 身份验证和授权问题
- 敏感数据泄露风险
EOF
```

### 命令功能

#### 命名空间
通过子目录组织命令，支持层次化管理：

```bash
.claude/commands/
├── frontend/
│   ├── component.md     # 创建 /component 命令，显示 "(project:frontend)"
│   └── style.md         # 创建 /style 命令
└── backend/
    ├── api.md          # 创建 /api 命令，显示 "(project:backend)"
    └── database.md     # 创建 /database 命令
```

#### 参数处理

**方式一：使用 `$ARGUMENTS` 获取所有参数**
```markdown
# 文件：.claude/commands/translate.md
请将以下内容翻译成英文：

$ARGUMENTS
```

使用示例：
```bash
/translate 这段代码需要优化
```

**方式二：使用位置参数 `$1`, `$2` 等**
```markdown
# 文件：.claude/commands/commit.md
---
argument-hint: <type> <message>
description: 创建规范的 Git 提交信息
---
git commit -m "$1: $2"

如果没有提供参数：
- 类型：${1:-feat}
- 消息：${2:-update code}
```

使用示例：
```bash
/commit fix 修复用户登录问题
/commit feat 添加新的搜索功能
```

#### Bash 命令执行
在命令中执行 bash 命令并包含输出：

```markdown
---
allowed-tools: Bash(git status:*), Bash(git diff:*)
---
# Git 状态报告

当前仓库状态：
!git status --short

最近的更改：
!git log --oneline -5
```

#### 文件引用
使用 `@` 前缀引用文件内容：

```markdown
# 分析以下文件的代码质量：

@src/utils/helpers.js
@src/components/UserForm.vue

请重点关注：
- 代码结构和组织
- 性能优化机会
- 潜在的 bug
```

#### 扩展思考模式
通过关键词触发 Claude 的深度思考：

```markdown
---
description: 架构设计审查
---
请深入思考以下架构设计方案：

$ARGUMENTS

<thinking>
需要从多个角度分析：
1. 可扩展性
2. 维护性
3. 性能影响
4. 安全性考虑
</thinking>
```

### 前言配置

命令文件支持 YAML 前言配置：

| 字段 | 用途 | 默认值 |
| --- | --- | --- |
| `allowed-tools` | 命令可使用的工具列表 | 继承对话设置 |
| `argument-hint` | 参数提示信息 | 无 |
| `description` | 命令简要描述 | 使用提示首行 |
| `model` | 指定模型 | 继承对话设置 |

**完整示例**：
```markdown
---
allowed-tools: Bash(npm run test:*), Bash(npm run lint:*)
argument-hint: [component-name] [--with-tests]
description: 创建新的 Vue 组件
model: claude-3-sonnet-20240229
---
# 创建 Vue 组件：$1

请创建一个名为 $1 的 Vue 组件。

${2:---with-tests}

如果包含 --with-tests 参数，同时创建对应的测试文件。

!npm run generate:component $1
```

## MCP 斜杠命令

MCP 服务器可以将提示公开为斜杠命令，实现与外部服务的深度集成。

### 命令格式
MCP 命令遵循命名模式：`/mcp__<服务器名>__<提示名>`

### 功能特性

#### 动态发现
MCP 命令在以下情况下自动可用：
- MCP 服务器已连接并处于活动状态
- 服务器通过 MCP 协议公开提示
- 连接期间成功检索提示

#### 参数支持
```bash
# GitHub MCP 示例命令
/mcp__github__create_issue "Bug: 登录页面无法访问" "用户反馈无法进入登录页面"
/mcp__github__list_repos "user:myusername"
```

#### 命名约定
- 服务器和提示名称被规范化
- 空格和特殊字符变为下划线
- 名称转为小写保持一致性

### 管理 MCP 连接
使用 `/mcp` 命令进行管理：

```bash
/mcp                     # 查看所有配置的 MCP 服务器
/mcp list               # 查看连接状态
/mcp auth github        # OAuth 身份验证
/mcp clear-auth github  # 清除身份验证令牌
```

### MCP 权限配置
配置 MCP 工具权限时注意**不支持通配符**：

```json
{
  "permissions": {
    "allow": [
      "mcp__github",                    // ✅ 正确：批准 github 服务器所有工具
      "mcp__github__get_issue",         // ✅ 正确：批准特定工具
      "mcp__context7__search_docs"      // ✅ 正确：批准文档搜索工具
    ],
    "deny": [
      "mcp__github__*"                  // ❌ 错误：不支持通配符
    ]
  }
}
```

## 实用示例

### 开发工作流程命令

#### 代码审查命令
```markdown
---
description: 全面的代码审查
allowed-tools: Bash(git diff:*), Bash(eslint:*)
---
# 代码审查检查清单

## 当前更改
!git diff --cached

## 静态分析
!npm run lint

请从以下角度审查代码：
1. **功能正确性**：逻辑是否正确
2. **代码质量**：是否符合最佳实践
3. **性能影响**：是否有性能问题
4. **安全性**：是否存在安全漏洞
5. **可维护性**：代码是否易于理解和修改
```

#### 部署检查命令
```markdown
---
description: 部署前检查
allowed-tools: Bash(npm run build:*), Bash(npm test:*)
---
# 部署前检查

## 运行测试
!npm test

## 构建检查
!npm run build

## 环境变量检查
@.env.example
@.env.production

请确认以下检查项：
- [ ] 所有测试通过
- [ ] 构建成功无错误
- [ ] 环境变量配置正确
- [ ] 数据库迁移已准备
- [ ] 静态资源已优化
```

### 团队协作命令

#### PR 模板命令
```markdown
---
description: 生成 PR 描述模板
argument-hint: <feature-description>
---
## 更改说明
$1

## 测试计划
- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试完成

## 部署注意事项
- [ ] 数据库更改
- [ ] 环境变量更新
- [ ] 依赖更新

## 截图/演示
（如适用）

## 相关问题
关闭 #issue-number
```

## 故障排除

### 常见问题

**自定义命令不显示？**
- 检查文件路径是否正确
- 确认文件扩展名为 `.md`
- 使用 `/help` 查看是否列出

**命令执行失败？**
- 检查 `allowed-tools` 权限设置
- 验证 bash 命令语法
- 查看错误消息提示

**MCP 命令无法使用？**
- 确认 MCP 服务器连接状态
- 使用 `/mcp` 检查服务状态
- 验证权限配置

## 相关文档

- [交互模式](./claude-code-interactive-mode) - 键盘快捷键和交互功能
- [权限管理](https://docs.anthropic.com/zh-CN/docs/claude-code/iam) - 权限配置完整指南
- [MCP 配置](./claude-code-mcp-config) - MCP 服务配置详解
- [设置配置](https://docs.anthropic.com/zh-CN/docs/claude-code/settings) - 个性化配置选项

通过掌握斜杠命令，你可以大幅提升 Claude Code 的使用效率，构建适合自己和团队的工作流程。