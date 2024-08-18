# Uber Direct JS SDK Examples

Welcome to the Uber Direct JS SDK Examples repository! This project provides example scripts that demonstrate how to use various features of the Uber Direct JS SDK. Each example is designed to showcase a specific functionality, such as authentication, managing deliveries, and more.

## Getting Started

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed (version 18 or higher).
- **Dependencies**: Install the required dependencies by running:

```bash
npm install
```

## Running Examples

This repository provides a set of predefined examples that you can run using the npm run example command. Each example is identified by a unique name.

To run a specific example, use the following command:

```bash
npm run example <example-name>
```

### Example

To run the "Authentication: Basic" example, use the following command:

```bash
npm run example auth-basic
```

This will:

1. Display the title and description of the example.
1. Show the code with syntax highlighting.
1. Execute the example script.


## Viewing Available Examples

To see a list of all available examples and their descriptions, you can use the npm run help command:

```bash
npm run help
```

This command will provide a summary of all examples in the repository, including the command names and brief descriptions.

### Example: Using `npm run help`

```bash
npm run help
```

Output:

```yaml
Usage: npm run example <example-name>

Available examples:
  - auth-basic: Authentication: Basic
  - deliveries-create-quote: Deliveries: Create Quote
  ...
```

## Adding New Examples

If you're a developer adding new examples to this repository, make sure to:

1. Update config.yaml: Add a new entry with the example name, title, description, and filename.
1. Create the Example Script: Add your example script in the appropriate directory (e.g., ./examples/auth/).
1. Run the Example: Test your new example using the npm run example <example-name> command.
