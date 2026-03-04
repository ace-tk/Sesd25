"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class JokeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("joke")
            .description("Get a random programming joke")
            .action(() => this.joke());
    }
    async joke() {
        try {
            console.log(chalk_1.default.cyan("😂 Fetching a random joke..."));
            const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            console.log(chalk_1.default.bold.green("\n🎭 Random Joke"));
            console.log(chalk_1.default.white("─────────────────────────────"));
            console.log(chalk_1.default.white(`❓ ${chalk_1.default.yellow(res.data.setup)}`));
            console.log(chalk_1.default.white(`💡 ${chalk_1.default.green(res.data.punchline)}`));
        }
        catch (err) {
            console.log(chalk_1.default.red("❌ Error fetching joke. Check your connection."));
        }
    }
}
module.exports = JokeCommand;
