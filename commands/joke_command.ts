import axios from "axios"
import chalk from "chalk"
import { Command } from "commander"

class JokeCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("joke")
      .description("Get a random programming joke")
      .action(() => this.joke())
  }

  async joke() {
    try {
      console.log(chalk.cyan("😂 Fetching a random joke..."))
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke")

      console.log(chalk.bold.green("\n🎭 Random Joke"))
      console.log(chalk.white("─────────────────────────────"))
      console.log(chalk.white(`❓ ${chalk.yellow(res.data.setup)}`))
      console.log(chalk.white(`💡 ${chalk.green(res.data.punchline)}`))
    } catch (err: any) {
      console.log(chalk.red("❌ Error fetching joke. Check your connection."))
    }
  }
}

export = JokeCommand