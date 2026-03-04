# MyCLI 🛠️

A custom command-line tool built with TypeScript, Commander.js, and a modular CLI engine architecture.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amitihere/custom_command.git
   cd custom_command
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile TypeScript to JavaScript**
   ```bash
   npx tsc
   ```

4. **Run any command**
   ```bash
   node dist/cli.js <command> [arguments]
   ```

### Global Installation (Optional)

To use `mycli` as a global command:

```bash
npm link
mycli <command> [arguments]
```

---

## Available Commands

| Command | Description |
|---|---|
| `greet <name>` | Greets the user by name |
| `add <num1> <num2>` | Adds two numbers |
| `subtract <num1> <num2>` | Subtracts the second number from the first |
| `multiply <num1> <num2>` | Multiplies two numbers |
| `divide <num1> <num2>` | Divides the first number by the second (handles division by zero) |
| `coin call` | Flips a coin — Heads or Tails |
| `favourite <colour>` | Displays your favourite colour with chalk styling |
| `quote` | Fetches a random inspirational quote from an API |
| `joke` | Fetches a random joke from an API |
| `cute` | Fetches a random cute dog image URL |
| `init_ts <folderName>` | Scaffolds a new TypeScript project with npm, TypeScript, ts-node, and nodemon |
| `help` | Lists all available commands |

---

## Example Usage

```bash
# Greet someone
node dist/cli.js greet Amit
# Output: Hello, Amit

# Math operations
node dist/cli.js add 5 3
# Output: The sum of 5 and 3 is 8.

node dist/cli.js subtract 10 4
# Output: The difference of 10 and 4 is 6.

node dist/cli.js multiply 6 7
# Output: The product of 6 and 7 is 42.

node dist/cli.js divide 20 5
# Output: The quotient of 20 and 5 is 4.

node dist/cli.js divide 10 0
# Output: Error: Division by zero is not allowed.

# Flip a coin
node dist/cli.js coin call
# Output: The coin landed on Heads

# Favourite colour (displayed with chalk styling)
node dist/cli.js favourite red
# Output: Your favorite color is red!
#         This is your favorite color!

# Fetch a random quote
node dist/cli.js quote
# Output: "Life is what happens when you're busy making other plans." - John Lennon

# Fetch a random joke
node dist/cli.js joke
# Output: What do elves post on Social Media? - Elf-ies.

# Get a cute dog image
node dist/cli.js cute
# Output: Here's a cute dog image for you: https://images.dog.ceo/breeds/...
#         Follow the link to see the image!

# Initialize a new TypeScript project
node dist/cli.js init_ts my-new-project
# Creates a new folder with npm, TypeScript, ts-node, and nodemon configured

# List all commands
node dist/cli.js help
```

---

## Project Structure

```
mycli/
├── cli.ts                  # Entry point — imports and registers all commands
├── cli_engine/
│   └── cli_engine.ts       # CLI engine class using Commander.js
├── commands/
│   ├── addCommand.ts       # Add two numbers
│   ├── subtractCommand.ts  # Subtract two numbers
│   ├── multiplyCommand.ts  # Multiply two numbers
│   ├── divideCommand.ts    # Divide two numbers
│   ├── greetCommand.ts     # Greet by name
│   ├── coinCommand.ts      # Coin flip
│   ├── favCommand.ts       # Favourite colour with chalk
│   ├── quoteCommand.ts     # Random quote (API)
│   ├── jokeCommand.ts      # Random joke (API)
│   ├── cuteCommand.ts      # Random dog image (API)
│   ├── initTS.ts           # Scaffold a TypeScript project
│   └── helpCommand.ts      # List all commands
├── dist/                   # Compiled JavaScript output
├── package.json
└── tsconfig.json
```

---

## Tech Stack

- **TypeScript** — Type-safe development
- **Commander.js** — Command-line argument parsing
- **Axios** — HTTP requests for API-based commands
- **Chalk** — Terminal string styling
