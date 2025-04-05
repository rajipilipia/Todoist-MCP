const { createServer } = require('@abhiz123/todoist-mcp-server');
const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Setup logging
const logFile = path.join(logsDir, 'server.log');
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} - ${message}\n`;
  console.log(logMessage.trim());
  logStream.write(logMessage);
}

// Configuration object with Todoist API token
const config = {
  todoistApiToken: '34dfed3399137b64c9676e3704ac3a5476ac5085'
};

// Create and start the server
async function startServer() {
  try {
    log('Starting Todoist MCP Server...');
    const server = await createServer(config);
    log('Todoist MCP Server started successfully');
    
    // Handle process termination gracefully
    process.on('SIGINT', async () => {
      log('Shutting down Todoist MCP Server...');
      await server.close();
      logStream.end();
      process.exit(0);
    });

    // Handle unexpected errors
    process.on('uncaughtException', async (error) => {
      log(`Uncaught Exception: ${error.message}`);
      log(error.stack);
      try {
        await server.close();
      } catch (closeError) {
        log(`Error closing server: ${closeError.message}`);
      }
      logStream.end();
      process.exit(1);
    });
  } catch (error) {
    log(`Failed to start Todoist MCP Server: ${error.message}`);
    log(error.stack);
    logStream.end();
    process.exit(1);
  }
}

startServer(); 