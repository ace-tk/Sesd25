"use strict";
const commander_1 = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
        this.program
            .name("mycli")
            .description("A powerful CLI tool built with Node.js & TypeScript")
            .version("1.0.0");
    }
    registerCommands(commands) {
        commands.forEach((CommandClass) => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse(process.argv);
    }
}
module.exports = CLI_Engine;
