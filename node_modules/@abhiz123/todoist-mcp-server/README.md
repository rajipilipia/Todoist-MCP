# Todoist MCP Server

An MCP server implementation that integrates Claude with Todoist, enabling natural language task management through Model Context Protocol.

## Features

* **Natural Language Task Management**: Create, update, and delete tasks using everyday language
* **Smart Task Search**: Find tasks using partial name matches
* **Flexible Filtering**: Filter tasks by due date, priority, and other attributes
* **Rich Task Details**: Support for descriptions, due dates, and priority levels
* **Intuitive Error Handling**: Clear feedback for better user experience

## Tools

### todoist_create_task
Create new tasks with various attributes:
* Required: content (task title)
* Optional: description, due date, priority level (1-4)

### todoist_get_tasks
Retrieve and filter tasks:
* Filter by due date, priority, or project
* Natural language date filtering
* Optional result limit

### todoist_update_task
Update existing tasks using natural language search:
* Find tasks by partial name match
* Update any task attribute
* Comprehensive error handling

### todoist_delete_task
Remove tasks using natural language search:
* Find and delete tasks by name
* Confirmation messages

## Setup

### Getting a Todoist API Token
1. Log in to your Todoist account
2. Navigate to Settings → Integrations
3. Find your API token under "Developer"

### Usage with Claude Desktop

Add to your configuration:

```json
{
  "mcpServers": {
    "todoist": {
      "command": "npx",
      "args": ["-y", "todoist-mcp-server"],
      "env": {
        "TODOIST_API_TOKEN": "your_api_token_here"
      }
    }
  }
}
```

## Example Usage

### Creating Tasks
```
"Create task 'Team Meeting'"
"Add task 'Review PR' due tomorrow at 2pm"
"Create high priority task 'Fix bug' with description 'Critical performance issue'"
```

### Getting Tasks
```
"Show all my tasks"
"List tasks due today"
"Get high priority tasks"
"Show tasks due this week"
```

### Updating Tasks
```
"Update documentation task to be due next week"
"Change priority of bug fix task to urgent"
"Add description to team meeting task"
```

### Deleting Tasks
```
"Delete the PR review task"
"Remove meeting prep task"
```

## Development

### Building from source
```bash
git clone https://github.com/yourusername/todoist-mcp-server.git
cd todoist-mcp-server
npm install
npm run build
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.