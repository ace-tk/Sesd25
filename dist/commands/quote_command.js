"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class QuoteCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(() => this.getQuote());
    }
    async getQuote() {
        try {
            console.log(chalk_1.default.cyan("💭 Fetching a random quote..."));
            // zenquotes.io - free API, no key needed
            const res = await axios_1.default.get("https://zenquotes.io/api/random");
            const quote = res.data[0];
            console.log(chalk_1.default.bold.green("\n✨ Inspirational Quote"));
            console.log(chalk_1.default.white("─────────────────────────────"));
            console.log(chalk_1.default.italic.yellow(`"${quote.q}"`));
            console.log(chalk_1.default.white(`  — ${chalk_1.default.cyan(quote.a)}`));
        }
        catch (err) {
            console.log(chalk_1.default.red("❌ Error fetching quote. Check your connection."));
        }
    }
}
module.exports = QuoteCommand;
