{
"mcpServers": {
"context7": {
"command": "npx",
"args": [
"-y",
"@upstash/context7-mcp",
"--api-key",
"YOUR_CONTEXT7_API_KEY"
]
},
"browser-tools": {
"type": "stdio",
"command": "npx",
"args": [
"-y",
"@agentdeskai/browser-tools-mcp@1.2.0"
],
"env": {}
},
"fetch": {
"command": "uvx",
"args": [
"mcp-server-fetch"
]
},
"neo4j-memory": {
"command": "npx",
"args": [
"-y",
"@knowall-ai/mcp-neo4j-agent-memory"
],
"env": {
"NEO4J_URI": "bolt://localhost:7687",
"NEO4J_USERNAME": "neo4j",
"NEO4J_PASSWORD": "graphiti",
"NEO4J_DATABASE": "neo4j"
}
},
"Figma": {
"type": "http",
"url": "http://127.0.0.1:3845/mcp"
},
"github": {
"command": "npx",
"args": [
"-y",
"@modelcontextprotocol/server-github"
],
"env": {
"GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_TOKEN"
}
},
"vercel": {
"type": "http",
"url": "https://mcp.vercel.com",
"headers": {}
},
"douyin-mcp": {
"command": "uvx",
"args": [
"douyin-mcp-server"
],
"env": {
"DASHSCOPE_API_KEY": "YOUR_DASHSCOPE_API_KEY"
}
},
"serena": {
"command": "uv",
"args": [
"run",
"--directory",
"/Users/shuai/serena",
"serena",
"start-mcp-server"
]
}
}
