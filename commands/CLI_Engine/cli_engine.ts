import { Command } from "commander"

class CLI_Engine {
    program: Command

    constructor() {
        this.program = new Command()
        this.program
            .name("mycli")
            .description("A powerful CLI tool built with Node.js & TypeScript")
            .version("1.0.0")
    }

    registerCommands(commands: any[]) {
        commands.forEach((CommandClass: any) => {
            const commandInstance = new CommandClass(this.program)
            commandInstance.register()
        })
    }

    run() {
        this.program.parse(process.argv)
    }
}

export = CLI_Engine