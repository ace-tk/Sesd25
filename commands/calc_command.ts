import chalk from "chalk"
import { Command, OptionValues } from "commander"

class CalcCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("calc <a> <b>")
      .description("Add two numbers together")
      .option("-s, --subtract", "Subtract instead of add")
      .option("-m, --multiply", "Multiply instead of add")
      .action((a: string, b: string, opts: OptionValues) => this.calculate(a, b, opts))
  }

  calculate(a: string, b: string, opts: OptionValues) {
    const numA = Number(a)
    const numB = Number(b)

    if (isNaN(numA) || isNaN(numB)) {
      console.log(chalk.red("❌ Error: Both arguments must be valid numbers."))
      return
    }

    let result: number
    let op: string

    if (opts.subtract) {
      result = numA - numB
      op = "-"
    } else if (opts.multiply) {
      result = numA * numB
      op = "×"
    } else {
      result = numA + numB
      op = "+"
    }

    console.log(chalk.cyan(`🔢 ${numA} ${op} ${numB} = ${chalk.bold.yellow(result)}`))
  }
}

export = CalcCommand