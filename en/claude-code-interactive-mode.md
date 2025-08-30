# Claude Code Interactive Mode

Claude Code's interactive mode provides rich keyboard shortcuts and operating methods, allowing you to efficiently interact with your AI assistant. This guide will detail all available interactive features.

> 📖 **Official Documentation**: [Claude Code Interactive Mode](https://docs.anthropic.com/en/docs/claude-code/interactive-mode) | [Complete Guide](https://docs.anthropic.com/en/docs/claude-code/overview)

## Keyboard Shortcuts

### General Controls

| Shortcut | Description | Context |
| --- | --- | --- |
| `Ctrl+C` | Cancel current input or generation | Standard interrupt |
| `Ctrl+D` | Exit Claude Code session | EOF signal |
| `Ctrl+L` | Clear terminal screen | Preserve conversation history |
| `Up/Down arrows` | Navigate command history | Recall previous inputs |
| `Esc` + `Esc` | Edit last message | Double escape to modify |

### Multi-line Input

When you need to input multi-line content, you can use the following methods:

| Method | Shortcut | Context |
| --- | --- | --- |
| Quick escape | `\` + `Enter` | Works in all terminals |
| macOS default | `Option+Enter` | Default on macOS |
| Terminal setup | `Shift+Enter` | After `/terminal-setup` |
| Control sequence | `Ctrl+J` | Multi-line newline character |
| Paste mode | Direct paste | For code blocks, logs |

### Quick Commands

| Shortcut | Description | Notes |
| --- | --- | --- |
| Starting `#` | Memory shortcut - add to CLAUDE.md | Prompts file selection |
| Starting `/` | Slash commands | See [Slash Commands](./claude-code-slash-commands) |

## Vim Mode

Claude Code supports vim-style editing mode, providing familiar operations for vim users.

### Enable Vim Mode
- **Temporary enable**: Use `/vim` command
- **Permanent enable**: Configure via `/config`

### Mode Switching

| Command | Action | From Mode |
| --- | --- | --- |
| `Esc` | Enter NORMAL mode | INSERT |
| `i` | Insert before cursor | NORMAL |
| `I` | Insert at line beginning | NORMAL |
| `a` | Insert after cursor | NORMAL |
| `A` | Insert at line end | NORMAL |
| `o` | Open new line below | NORMAL |
| `O` | Open new line above | NORMAL |

### Navigation (NORMAL Mode)

#### Basic Movement
| Command | Action |
| --- | --- |
| `h`/`j`/`k`/`l` | Move left/down/up/right |
| `w` | Next word |
| `e` | End of word |
| `b` | Previous word |

#### Line Navigation
| Command | Action |
| --- | --- |
| `0` | Line beginning |
| `$` | Line end |
| `^` | First non-whitespace character |

#### Document Navigation
| Command | Action |
| --- | --- |
| `gg` | Input beginning |
| `G` | Input end |

### Editing (NORMAL Mode)

#### Delete Operations
| Command | Action |
| --- | --- |
| `x` | Delete character |
| `dd` | Delete line |
| `D` | Delete to line end |
| `dw`/`de`/`db` | Delete word/to end/backward |

#### Change Operations
| Command | Action |
| --- | --- |
| `cc` | Change line |
| `C` | Change to line end |
| `cw`/`ce`/`cb` | Change word/to end/backward |
| `.` | Repeat last change |

## Command History

Claude Code provides powerful command history functionality to help you quickly reuse previous commands:

### History Management
- **Storage method**: History stored by working directory
- **Clear method**: Use `/clear` command to clear
- **Navigation method**: Use up/down arrow keys to navigate history
- **Search feature**: **Ctrl+R** reverse search history (if terminal supports)

### Notes
- **History expansion**: `!` commands are disabled by default to avoid accidental execution of history commands

## Practical Tips

### Efficient Input Tips

1. **Code Block Input**
   - Directly paste code blocks, Claude Code will automatically detect and preserve formatting
   - Use `\` + `Enter` to quickly add new lines

2. **Command Combinations**
   - Combine slash commands with regular conversation
   - Use `#` prefixed messages to add to project memory

3. **History Reuse**
   - Use arrow keys to quickly find previous commands
   - `Esc` + `Esc` to edit last message instead of retyping

### Workflow Optimization

1. **Multi-line Editing**
   ```
   # Use backslash continuation
   This is the first line \
   This is the second line \
   This is the third line
   ```

2. **Quick Memory Addition**
   ```
   # This information will be added to CLAUDE.md
   Remember: This project uses TypeScript + React
   ```

3. **Command Chaining**
   ```
   /model opus
   Please help me optimize this code's performance
   ```

## Troubleshooting

### Common Issues

**Multi-line input not working?**
- Check if terminal supports corresponding shortcuts
- Try using `/terminal-setup` to configure Shift+Enter
- Use universal `\` + `Enter` method

**Vim mode won't enable?**
- Confirm using `/vim` command
- Check configuration settings via `/config`
- Restart Claude Code session

**History search not working?**
- Confirm terminal supports Ctrl+R
- Check terminal's key binding settings
- Try using up/down arrow keys for manual navigation

## Related Documentation

- [Slash Commands](./claude-code-slash-commands) - Specialized commands in interactive sessions
- [CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference) - Command line flags and options
- [Settings Configuration](https://docs.anthropic.com/en/docs/claude-code/settings) - Personalization configuration options
- [Memory Management](https://docs.anthropic.com/en/docs/claude-code/memory) - Managing CLAUDE.md files

By mastering these interactive mode features, you'll be able to use Claude Code more efficiently and improve your development efficiency and experience.