import chalk from "chalk"
import { Command } from "commander"

class GreetCommand {
    program: Command

    constructor(program: Command) {
        this.program = program
    }

    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name: string) => this.greetName(name))
    }

    greetName(name: string) {
        if (!name || name.trim() === "") {
            console.log(chalk.red("❌ Please provide a name."))
            return
        }
        console.log(chalk.green(`👋 Hello, ${chalk.bold(name)}! Welcome to MyCLI!`))
    }
}

export = GreetCommand