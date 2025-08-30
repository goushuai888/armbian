# Claude Code Slash Commands

Slash commands are powerful features in Claude Code's interactive mode that allow you to control Claude's behavior and execute specific tasks through simple commands. This guide provides detailed information on built-in commands, custom commands, and MCP commands usage.

> 📖 **Official Documentation**: [Claude Code Slash Commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands) | [Complete Guide](https://docs.anthropic.com/en/docs/claude-code/overview)

## Built-in Slash Commands

Here are all the built-in slash commands provided by Claude Code:

| Command | Purpose |
| --- | --- |
| `/add-dir` | Add additional working directories |
| `/agents` | Manage custom AI sub-agents for specialized tasks |
| `/bug` | Report bugs (send conversation to Anthropic) |
| `/clear` | Clear conversation history |
| `/compact [instructions]` | Compress conversation, optionally with focus instructions |
| `/config` | View/modify configuration |
| `/cost` | Display token usage statistics |
| `/doctor` | Check the health of your Claude Code installation |
| `/help` | Get usage help |
| `/init` | Initialize project with CLAUDE.md guide |
| `/login` | Switch Anthropic account |
| `/logout` | Log out from your Anthropic account |
| `/mcp` | Manage MCP server connections and OAuth authentication |
| `/memory` | Edit CLAUDE.md memory file |
| `/model` | Select or change AI model |
| `/permissions` | View or update permission settings |
| `/pr_comments` | View pull request comments |
| `/review` | Request code review |
| `/status` | View account and system status |
| `/terminal-setup` | Install Shift+Enter key binding for line breaks (iTerm2 and VSCode only) |
| `/vim` | Enter vim mode to switch between insert and command modes |

### Common Commands Explained

#### `/help` - Help Command
View a list and brief descriptions of all available commands.

#### `/model` - Model Selection
```bash
/model                    # View current model
/model opus              # Switch to Opus model
/model sonnet            # Switch to Sonnet model
```

#### `/config` - Configuration Management
View and modify Claude Code's configuration settings, including default model, permission settings, etc.

#### `/clear` - Clear History
Clear current session's conversation history and start a new conversation.

#### `/cost` - Cost Tracking
Display token usage statistics and cost information for the current session.

## Custom Slash Commands

Custom slash commands allow you to define frequently used prompts as Markdown files to automate workflows.

### Command Types

#### Project Commands
Stored in the project repository and shared with the team. Displayed as "(project)" in `/help`.

**Location**: `.claude/commands/`

**Example: Creating `/optimize` command**
```bash
# Create command file
mkdir -p .claude/commands
echo "Please optimize the following code for performance and readability:\n\n\$ARGUMENTS" > .claude/commands/optimize.md
```

#### Personal Commands
Personal commands available in all projects. Displayed as "(user)" in `/help`.

**Location**: `~/.claude/commands/`

**Example: Creating `/security-review` command**
```bash
# Create personal command
mkdir -p ~/.claude/commands
cat > ~/.claude/commands/security-review.md << EOF
---
description: Perform security code review
allowed-tools: Bash(grep:*), Bash(find:*)
---
Please perform a comprehensive security review of the following code:

\$ARGUMENTS

Focus on:
- SQL injection vulnerabilities
- XSS attack vectors
- Authentication and authorization issues
- Sensitive data leak risks
EOF
```

### Command Features

#### Namespaces
Organize commands through subdirectories, supporting hierarchical management:

```bash
.claude/commands/
├── frontend/
│   ├── component.md     # Creates /component command, displays "(project:frontend)"
│   └── style.md         # Creates /style command
└── backend/
    ├── api.md          # Creates /api command, displays "(project:backend)"
    └── database.md     # Creates /database command
```

#### Argument Handling

**Method 1: Use `$ARGUMENTS` to get all arguments**
```markdown
# File: .claude/commands/translate.md
Please translate the following content to English:

$ARGUMENTS
```

Usage example:
```bash
/translate This code needs optimization
```

**Method 2: Use positional arguments `$1`, `$2`, etc.**
```markdown
# File: .claude/commands/commit.md
---
argument-hint: <type> <message>
description: Create standardized Git commit message
---
git commit -m "$1: $2"

If no arguments provided:
- Type: ${1:-feat}
- Message: ${2:-update code}
```

Usage example:
```bash
/commit fix Fix user login issue
/commit feat Add new search functionality
```

#### Bash Command Execution
Execute bash commands in commands and include output:

```markdown
---
allowed-tools: Bash(git status:*), Bash(git diff:*)
---
# Git Status Report

Current repository status:
!git status --short

Recent changes:
!git log --oneline -5
```

#### File References
Use `@` prefix to reference file contents:

```markdown
# Analyze code quality of the following files:

@src/utils/helpers.js
@src/components/UserForm.vue

Please focus on:
- Code structure and organization
- Performance optimization opportunities
- Potential bugs
```

#### Extended Thinking Mode
Trigger Claude's deep thinking through keywords:

```markdown
---
description: Architecture design review
---
Please think deeply about the following architecture design:

$ARGUMENTS

<thinking>
Need to analyze from multiple angles:
1. Scalability
2. Maintainability
3. Performance impact
4. Security considerations
</thinking>
```

### Front Matter Configuration

Command files support YAML front matter configuration:

| Field | Purpose | Default |
| --- | --- | --- |
| `allowed-tools` | List of tools the command can use | Inherit conversation settings |
| `argument-hint` | Argument hint information | None |
| `description` | Brief command description | Use first line of prompt |
| `model` | Specify model | Inherit conversation settings |

**Complete Example**:
```markdown
---
allowed-tools: Bash(npm run test:*), Bash(npm run lint:*)
argument-hint: [component-name] [--with-tests]
description: Create new Vue component
model: claude-3-sonnet-20240229
---
# Create Vue Component: $1

Please create a Vue component named $1.

${2:---with-tests}

If --with-tests argument is included, also create corresponding test file.

!npm run generate:component $1
```

## MCP Slash Commands

MCP servers can expose prompts as slash commands, enabling deep integration with external services.

### Command Format
MCP commands follow the naming pattern: `/mcp__<server-name>__<prompt-name>`

### Features

#### Dynamic Discovery
MCP commands are automatically available when:
- MCP server is connected and active
- Server exposes prompts via MCP protocol
- Prompts are successfully retrieved during connection

#### Argument Support
```bash
# GitHub MCP example commands
/mcp__github__create_issue "Bug: Login page inaccessible" "Users report unable to access login page"
/mcp__github__list_repos "user:myusername"
```

#### Naming Conventions
- Server and prompt names are normalized
- Spaces and special characters become underscores
- Names converted to lowercase for consistency

### Managing MCP Connections
Use `/mcp` command for management:

```bash
/mcp                     # View all configured MCP servers
/mcp list               # View connection status
/mcp auth github        # OAuth authentication
/mcp clear-auth github  # Clear authentication token
```

### MCP Permission Configuration
When configuring MCP tool permissions, note that **wildcards are not supported**:

```json
{
  "permissions": {
    "allow": [
      "mcp__github",                    // ✅ Correct: Approve all tools from github server
      "mcp__github__get_issue",         // ✅ Correct: Approve specific tool
      "mcp__context7__search_docs"      // ✅ Correct: Approve documentation search tool
    ],
    "deny": [
      "mcp__github__*"                  // ❌ Wrong: Wildcards not supported
    ]
  }
}
```

## Practical Examples

### Development Workflow Commands

#### Code Review Command
```markdown
---
description: Comprehensive code review
allowed-tools: Bash(git diff:*), Bash(eslint:*)
---
# Code Review Checklist

## Current Changes
!git diff --cached

## Static Analysis
!npm run lint

Please review the code from these perspectives:
1. **Functional Correctness**: Is the logic correct
2. **Code Quality**: Does it follow best practices
3. **Performance Impact**: Are there performance issues
4. **Security**: Are there security vulnerabilities
5. **Maintainability**: Is the code easy to understand and modify
```

#### Deployment Check Command
```markdown
---
description: Pre-deployment checks
allowed-tools: Bash(npm run build:*), Bash(npm test:*)
---
# Pre-deployment Checks

## Run Tests
!npm test

## Build Check
!npm run build

## Environment Variable Check
@.env.example
@.env.production

Please confirm the following checklist:
- [ ] All tests pass
- [ ] Build succeeds without errors
- [ ] Environment variables configured correctly
- [ ] Database migrations prepared
- [ ] Static assets optimized
```

### Team Collaboration Commands

#### PR Template Command
```markdown
---
description: Generate PR description template
argument-hint: <feature-description>
---
## Change Description
$1

## Test Plan
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing complete

## Deployment Notes
- [ ] Database changes
- [ ] Environment variable updates
- [ ] Dependency updates

## Screenshots/Demo
(If applicable)

## Related Issues
Closes #issue-number
```

## Troubleshooting

### Common Issues

**Custom commands not showing?**
- Check if file path is correct
- Confirm file extension is `.md`
- Use `/help` to see if listed

**Command execution failed?**
- Check `allowed-tools` permission settings
- Verify bash command syntax
- Review error message hints

**MCP commands not available?**
- Confirm MCP server connection status
- Use `/mcp` to check service status
- Verify permission configuration

## Related Documentation

- [Interactive Mode](./claude-code-interactive-mode) - Keyboard shortcuts and interactive features
- [Permission Management](https://docs.anthropic.com/en/docs/claude-code/iam) - Complete permission configuration guide
- [MCP Configuration](./claude-code-mcp-config) - Detailed MCP service configuration
- [Settings Configuration](https://docs.anthropic.com/en/docs/claude-code/settings) - Personalization configuration options

By mastering slash commands, you can significantly improve Claude Code's usage efficiency and build workflows suitable for yourself and your team.