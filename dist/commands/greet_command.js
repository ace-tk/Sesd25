"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
class GreetCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name) => this.greetName(name));
    }
    greetName(name) {
        if (!name || name.trim() === "") {
            console.log(chalk_1.default.red("❌ Please provide a name."));
            return;
        }
        console.log(chalk_1.default.green(`👋 Hello, ${chalk_1.default.bold(name)}! Welcome to MyCLI!`));
    }
}
module.exports = GreetCommand;
