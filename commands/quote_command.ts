import axios from "axios"
import chalk from "chalk"
import { Command } from "commander"

class QuoteCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("quote")
      .description("Get a random inspirational quote")
      .action(() => this.getQuote())
  }

  async getQuote() {
    try {
      console.log(chalk.cyan("💭 Fetching a random quote..."))
      // zenquotes.io - free API, no key needed
      const res = await axios.get("https://zenquotes.io/api/random")
      const quote = res.data[0]

      console.log(chalk.bold.green("\n✨ Inspirational Quote"))
      console.log(chalk.white("─────────────────────────────"))
      console.log(chalk.italic.yellow(`"${quote.q}"`))
      console.log(chalk.white(`  — ${chalk.cyan(quote.a)}`))
    } catch (err: any) {
      console.log(chalk.red("❌ Error fetching quote. Check your connection."))
    }
  }
}

export = QuoteCommand