# Claude Code Quickstart

Claude Code is Anthropic's AI programming assistant that helps you accomplish coding tasks efficiently through a command-line interface. This guide will get you up and running with Claude Code quickly.

## Before you begin

Before installing and using Claude Code, please ensure you have:

- Terminal or command prompt
- A code project directory
- Claude.ai or Anthropic Console account

## Step 1: Install Claude Code

### NPM Install

For Node.js 18+ environments:

```sh
npm install -g @anthropic-ai/claude-code
```

### Native Install

**For macOS, Linux, WSL:**

```bash
curl -fsSL claude.ai/install.sh | bash
```

**For Windows PowerShell:**

```powershell
irm https://claude.ai/install.ps1 | iex
```

## Step 2: Log in to your account

After installation, log in using:

```bash
claude /login
```

You can choose to use:
- **Claude.ai** (recommended) - More convenient web interface
- **Anthropic Console** - Developer console

## Step 3: Start your first session

Navigate to your project directory and start Claude Code:

```bash
cd /path/to/your/project
claude
```

Once started, Claude Code will enter interactive mode, waiting for your commands.

## Step 4: Ask your first questions

Try asking some project-related questions to let Claude Code understand your code:

- "What does this project do?"
- "What technologies does this project use?"
- "Where is the main entry point?"
- "What is the directory structure of this project?"

## Steps 5-8: Coding Tasks

Claude Code can help you accomplish various programming tasks:

### Code Modification and Optimization
- Fix bugs in code
- Add new features
- Refactor existing code
- Optimize performance

### Git Operations
- Auto-generate commit messages
- Create branches
- Merge code

### Testing and Documentation
- Write unit tests
- Generate API documentation
- Create usage instructions

### Example Conversations
```
User: "Fix the type error in this function"
Claude Code: Let me check the code and fix the type error...

User: "Add responsive design to this component"
Claude Code: I'll add CSS media queries to implement responsive layout...
```

## Essential Commands Quick Reference

| Command | Purpose | Example |
|---------|---------|---------|
| `claude` | Start interactive mode | `claude` |
| `claude "task"` | Execute one-time task | `claude "fix build error"` |
| `claude -p "query"` | One-off query | `claude -p "explain this function"` |
| `claude commit` | Create Git commit | `claude commit` |
| `/help` | Show help information | `/help` |
| `/exit` | Exit program | `/exit` |

## Pro Tips for Efficient Usage

### 1. Be Specific in Requests
❌ Not good: "Improve this code"  
✅ Better: "Add error handling to this function and optimize performance"

### 2. Use Step-by-Step Instructions
For complex tasks, break them down into smaller steps:
- "First analyze the existing code structure"
- "Then add the new feature"
- "Finally write test cases"

### 3. Let Claude Code Explore First
Before modifying code, let Claude Code understand the project structure:
- "Analyze this project's architecture"
- "Find all configuration files"

### 4. Use Keyboard Shortcuts
- `Tab` - Auto-complete
- `↑` - View command history
- `Ctrl+C` - Interrupt current operation

## Getting Help

### Within Claude Code
Use the `/help` command to get real-time help and command listings.

### Online Resources
- [Claude Code Official Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Discord Community](https://www.anthropic.com/discord)
- [GitHub Issues](https://github.com/anthropics/claude-code/issues)

## Next Steps

After completing the quickstart, you can:

1. Read the [Best Practices Guide](/en/claude-code-best-practices)
2. Explore [Advanced Usage Tips](/en/claude-code-advanced-tips)
3. Check out [Tool Comparisons](/en/claude-code-comparison)

Start your AI-assisted programming journey! Claude Code will become your most capable programming companion.