"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
class RandomCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("random")
            .description("Generate a random number")
            .option("-m, --max <number>", "Set maximum value (default: 100)")
            .option("-n, --min <number>", "Set minimum value (default: 0)")
            .action((opts) => this.random(opts));
    }
    random(opts) {
        const min = opts.min ? Number(opts.min) : 0;
        const max = opts.max ? Number(opts.max) : 100;
        if (isNaN(min) || isNaN(max)) {
            console.log(chalk_1.default.red("❌ Error: min and max must be valid numbers."));
            return;
        }
        if (min >= max) {
            console.log(chalk_1.default.red("❌ Error: min must be less than max."));
            return;
        }
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(chalk_1.default.bold.cyan("🎲 Random Number Generator"));
        console.log(chalk_1.default.white("─────────────────────────────"));
        console.log(chalk_1.default.white(`📊 Range: ${chalk_1.default.yellow(`${min} - ${max}`)}`));
        console.log(chalk_1.default.white(`🎯 Result: ${chalk_1.default.bold.green(num)}`));
    }
}
module.exports = RandomCommand;
