# Claude Code MCP Services Configuration Guide

In modern AI-assisted development environments, Model Context Protocol (MCP) services play a crucial role. This article provides an in-depth analysis of a comprehensive Claude Code MCP configuration to help you build a powerful development workstation.

## What are MCP Services?

Model Context Protocol (MCP) is an open standard that allows AI models to interact with external tools and services. Through MCP, Claude Code can access various specialized services, greatly expanding its functional boundaries.

## Configuration Overview

This configuration showcases a complete Claude Code MCP ecosystem with 7 core services. MCP configurations are typically stored in global configuration files, with individual projects selectively enabling specific services:

### Global MCP Configuration Structure
```json
{
  "mcpServers": {
    "context7": { /* Smart Documentation Service */ },
    "browser-tools": { /* Browser Automation Tools */ },
    "fetch": { /* Network Content Retrieval */ },
    "neo4j-memory": { /* Knowledge Graph Storage */ },
    "Figma": { /* Design Collaboration Platform */ },
    "github": { /* Code Hosting Service */ },
    "vercel": { /* Deployment Platform Service */ }
  }
}
```

### Project-Level Configuration
Each project has independent MCP configuration options:
- `mcpServers`: Project-specific service configurations
- `enabledMcpjsonServers`: List of enabled global services
- `disabledMcpjsonServers`: List of disabled global services

## Detailed Service Configuration

### 1. Context7 - Smart Documentation Service

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

**Key Features**:
- 🔍 **Real-time Documentation Retrieval**: Access the latest library docs and API references
- 📚 **Smart Search**: Precisely locate required technical materials
- 💡 **Code Examples**: Provide rich practical use cases

**Use Cases**:
- Query latest React, Vue, Next.js documentation
- Get TypeScript type definitions
- Find best practices and code examples

### 2. Browser Tools - Browser Automation Suite

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

**Core Capabilities**:
- 🔍 **Performance Auditing**: Automatically analyze web performance metrics
- ♿ **Accessibility Testing**: Check WCAG compliance
- 🔎 **SEO Optimization**: Search engine optimization recommendations
- 📱 **Responsive Testing**: Multi-device compatibility validation

**Practical Applications**:
- Website performance optimization analysis
- Mobile adaptation testing
- User experience improvement suggestions

### 3. Fetch - Network Content Retrieval

```json
"fetch": {
  "args": ["mcp-server-fetch"],
  "command": "uvx"
}
```

**Main Functions**:
- 🌐 **Smart Crawling**: Retrieve content from any webpage
- 📄 **Format Conversion**: Automatically convert to Markdown
- 🔗 **Link Processing**: Intelligently handle redirects and links

**Use Cases**:
- Competitive analysis and market research
- Technical documentation collection
- Content integration and reference

### 4. Neo4j Memory - Knowledge Graph Storage

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

**Core Features**:
- 🧠 **Smart Memory**: Store project knowledge and decision history
- 🔗 **Relationship Analysis**: Establish connections between concepts
- 📊 **Knowledge Graph**: Visualize project architecture and dependencies

**Value Proposition**:
- Project knowledge accumulation and inheritance
- Traceable decision processes
- Team collaboration knowledge sharing

### 5. Figma - Design Collaboration Platform

```json
"Figma": {
  "type": "http",
  "url": "http://127.0.0.1:3845/mcp"
}
```

**Design Capabilities**:
- 🎨 **Design File Access**: Direct access to Figma design files
- 📐 **Dimension Retrieval**: Precise component and layout information
- 🔄 **Design Sync**: Real-time synchronization of design changes

**Development Value**:
- Seamless design-to-code transformation
- Pixel-perfect design implementation
- Bridge between designers and developers

### 6. GitHub - Code Hosting & Collaboration

```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "github_pat_***"
  }
}
```

**Complete Functionality**:
- 📂 **Repository Management**: Create, clone, branch operations
- 🔀 **PR Workflow**: Automated Pull Request handling
- 🐛 **Issue Tracking**: Problem management and resolution
- 🔍 **Code Search**: Platform-wide code retrieval

### 7. Vercel - Modern Deployment Platform

```json
"vercel": {
  "type": "http",
  "url": "https://mcp.vercel.com",
  "headers": {}
}
```

**Deployment Capabilities**:
- 🚀 **One-click Deployment**: Automated deployment workflows
- 🌍 **Global CDN**: Edge computing and acceleration
- 📊 **Performance Monitoring**: Real-time performance analysis
- 🔧 **Environment Management**: Preview and production environments

## Configuration Best Practices

### Security Configuration
1. **API Key Management**: Use environment variables for sensitive information
2. **Minimal Permissions**: Grant only necessary access rights
3. **Regular Updates**: Keep service versions and keys up-to-date

### Performance Optimization
1. **Connection Pooling**: Configure appropriate connection numbers
2. **Caching Strategy**: Enable suitable caching mechanisms
3. **Timeout Settings**: Set reasonable timeout values

### Quick Configuration Guide

#### 1. Global Configuration (Recommended)
Configure in your user directory's `.claude.json`:
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

#### 2. Project-Level Enablement
Selectively enable in your project's `.claude.json`:
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

#### 3. Environment Dependencies Installation
```bash
# Install runtime environments
npm install -g npx
pip install uvx

# Start Neo4j database
docker run -p 7687:7687 -e NEO4J_AUTH=neo4j/graphiti neo4j:latest

# Verify installation
claude mcp list
```

## Workflow Integration

### Development Lifecycle Integration
1. **Requirements Analysis**: Use Context7 for technical documentation
2. **Design Implementation**: Get design specs through Figma
3. **Code Development**: Leverage GitHub for version control
4. **Testing Validation**: Browser Tools for quality assurance
5. **Deployment Release**: Vercel for automated deployment
6. **Knowledge Accumulation**: Neo4j Memory for project experience

### Team Collaboration Advantages
- **Unified Standards**: All team members use same configuration
- **Knowledge Sharing**: Share project knowledge through Neo4j Memory
- **Efficient Communication**: Direct design-development handoff via Figma

## Troubleshooting

### Common Issues
1. **Connection Timeouts**: Check network and service status
2. **Authentication Failures**: Verify API keys and permissions
3. **Version Compatibility**: Ensure matching service versions

### Monitoring and Maintenance
- Regularly check service health status
- Monitor API usage quotas
- Backup important configurations and data

## Practical Configuration Templates

### Basic Development Configuration
Minimal configuration suitable for most projects:
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

### Full-Stack Development Configuration
Complete services for frontend and backend development:
```json
{
  "mcpServers": {
    "github": { /* GitHub service config */ },
    "context7": { /* Documentation service config */ },
    "browser-tools": { /* Browser testing config */ },
    "vercel": { /* Deployment service config */ },
    "neo4j-memory": { /* Knowledge graph config */ }
  }
}
```

### Team Collaboration Configuration
Includes design collaboration and project management tools:
```json
{
  "mcpServers": {
    "github": { /* Code hosting */ },
    "Figma": { /* Design collaboration */ },
    "neo4j-memory": { /* Team knowledge base */ },
    "browser-tools": { /* QA testing */ }
  }
}
```

## Future Extension Directions

### Emerging Service Integrations
- **AI Code Assistants**: GitHub Copilot MCP, CodeWhisperer
- **Database Services**: Supabase, PlanetScale, Neon
- **Cloud Service Platforms**: AWS MCP, Azure MCP, GCP MCP
- **Collaboration Tools**: Linear, Notion, Slack MCP

### Configuration Evolution Strategy
1. **Progressive Addition**: Gradually integrate new services based on project needs
2. **Performance Optimization**: Monitor service usage and optimize configurations
3. **Security Updates**: Regularly update API keys and permission settings
4. **Team Synchronization**: Establish configuration templates and best practice documentation

## Conclusion

This MCP configuration solution provides a complete range from basic to advanced, enabling you to flexibly configure Claude Code's functional extensions based on project requirements.

### Key Advantages
- **Modular Configuration**: Enable services as needed, avoiding resource waste
- **Global Reuse**: Configure once, benefit multiple projects
- **Team Collaboration**: Standardized toolchain improves collaboration efficiency
- **Continuous Evolution**: Support dynamic expansion and optimization

### Quick Start Steps
1. **Copy basic configuration** to your `.claude.json`
2. **Replace API keys** with your actual credentials
3. **Start necessary services** (like Neo4j)
4. **Verify configuration**: Run `claude mcp list`
5. **Project-level adjustments**: Enable/disable specific services as needed

With this configuration, Claude Code becomes your most powerful development partner, not only improving programming efficiency but also helping you establish a sustainable knowledge management and team collaboration system. Start your AI-enhanced development journey!