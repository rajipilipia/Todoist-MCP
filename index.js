const { createServer } = require('@abhiz123/todoist-mcp-server');

// Configuration object with Todoist API token
const config = {
  todoistApiToken: '34dfed3399137b64c9676e3704ac3a5476ac5085'
};

// Create and start the server
async function startServer() {
  try {
    const server = await createServer(config);
    console.log('Todoist MCP Server started successfully');
    
    // Handle process termination gracefully
    process.on('SIGINT', async () => {
      console.log('Shutting down Todoist MCP Server...');
      await server.close();
      process.exit(0);
    });
  } catch (error) {
    console.error('Failed to start Todoist MCP Server:', error);
    process.exit(1);
  }
}

startServer(); 