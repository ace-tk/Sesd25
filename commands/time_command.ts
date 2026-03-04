import chalk from "chalk"
import { Command, OptionValues } from "commander"

class TimeCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("time")
      .description("Show current date and time")
      .option("-u, --utc", "Show UTC time instead of local time")
      .action((opts: OptionValues) => this.showTime(opts))
  }

  showTime(opts: OptionValues) {
    const now = new Date()

    console.log(chalk.bold.cyan("🕒 Current Date & Time"))
    console.log(chalk.white("─────────────────────────────"))

    if (opts.utc) {
      console.log(chalk.white(`🌍 UTC Time:   ${chalk.yellow(now.toUTCString())}`))
    } else {
      console.log(chalk.white(`🕐 Time:       ${chalk.yellow(now.toLocaleTimeString())}`))
      console.log(chalk.white(`📅 Date:       ${chalk.yellow(now.toLocaleDateString())}`))
      console.log(chalk.white(`📆 Full:       ${chalk.yellow(now.toLocaleString())}`))
    }
  }
}

export = TimeCommand