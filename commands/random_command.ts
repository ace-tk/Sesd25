import chalk from "chalk"
import { Command, OptionValues } from "commander"

class RandomCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("random")
      .description("Generate a random number")
      .option("-m, --max <number>", "Set maximum value (default: 100)")
      .option("-n, --min <number>", "Set minimum value (default: 0)")
      .action((opts: OptionValues) => this.random(opts))
  }

  random(opts: OptionValues) {
    const min = opts.min ? Number(opts.min) : 0
    const max = opts.max ? Number(opts.max) : 100

    if (isNaN(min) || isNaN(max)) {
      console.log(chalk.red("❌ Error: min and max must be valid numbers."))
      return
    }

    if (min >= max) {
      console.log(chalk.red("❌ Error: min must be less than max."))
      return
    }

    const num = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(chalk.bold.cyan("🎲 Random Number Generator"))
    console.log(chalk.white("─────────────────────────────"))
    console.log(chalk.white(`📊 Range: ${chalk.yellow(`${min} - ${max}`)}`))
    console.log(chalk.white(`🎯 Result: ${chalk.bold.green(num)}`))
  }
}

export = RandomCommand