# MyCLI 🛠️

A fully functional CLI tool built with **Node.js** and **TypeScript**, following Object-Oriented Programming principles. Created as part of SESD Workshop 2.

---

## 📦 Tech Stack

- **Node.js** + **TypeScript**
- **Commander** — CLI framework
- **Axios** — HTTP requests for API integrations
- **Chalk** — Colored terminal output

---

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd sesd_25
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the project
```bash
npm run build
```

### 4. Link globally (so `mycli` works from anywhere)
```bash
npm link
```

---

## ⚡ Available Commands

### 1. `greet <name>`
Greet someone by name.
```bash
mycli greet Tisha
# 👋 Hello, Tisha! Welcome to MyCLI!
```

### 2. `init <projectname>`
Initialize a new project folder with a README.
```bash
mycli init my-project
# ✅ Project "my-project" initialized successfully!
```

### 3. `time`
Show current date and time.
```bash
mycli time
mycli time --utc        # Show UTC time
```

### 4. `random`
Generate a random number.
```bash
mycli random
mycli random --min 10 --max 50
```

### 5. `calc <a> <b>`
Perform arithmetic operations on two numbers.
```bash
mycli calc 10 5
mycli calc 10 5 --subtract
mycli calc 10 5 --multiply
```

### 6. `fileinfo <filename>`
Show detailed information about a file.
```bash
mycli fileinfo README.md
```

### 7. `quote`
Get a random inspirational quote. *(API: zenquotes.io)*
```bash
mycli quote
```

### 8. `github <username>`
Fetch GitHub user profile information. *(API: GitHub REST API)*
```bash
mycli github octocat
```

### 9. `weather <city>`
Get current weather for a city. *(API: wttr.in)*
```bash
mycli weather Mumbai
mycli weather "New York"
```

### 10. `joke`
Get a random joke. *(API: official-joke-api)*
```bash
mycli joke
```

---

## 🌐 API Integrations

| API | Command | Description |
|-----|---------|-------------|
| [GitHub API](https://api.github.com) | `github` | Fetch user profile data |
| [wttr.in](https://wttr.in) | `weather` | Real-time weather info |
| [ZenQuotes](https://zenquotes.io) | `quote` | Inspirational quotes |
| [Official Joke API](https://official-joke-api.appspot.com) | `joke` | Random jokes |

---

## 🏗️ Project Structure

```
sesd_25/
├── cli.ts                      # Entry point
├── commands/
│   ├── CLI_Engine/
│   │   └── cli_engine.ts       # Core engine class
│   ├── greet_command.ts
│   ├── init_command.ts
│   ├── time_command.ts
│   ├── random_command.ts
│   ├── calc_command.ts
│   ├── fileinfo_command.ts
│   ├── quote_command.ts
│   ├── github_command.ts
│   ├── weather_command.ts
│   └── joke_command.ts
├── dist/                       # Compiled JS output
├── package.json
└── tsconfig.json
```

---

## ✨ Bonus Features

- 🎨 **Colored output** using `chalk`
- 🆘 **Help descriptions** on all commands (`mycli --help`)
- 🔢 **Version command** (`mycli --version`)
- ✅ **Input validation** on all commands
- 🔧 **Flags/options** on `calc`, `time`, and `random` commands

---

## 🛠️ Development

```bash
npm run dev           # Run with ts-node (no build needed)
npm run build         # Compile TypeScript
npm run build:watch   # Watch mode
```

---

## 📄 License

ISC