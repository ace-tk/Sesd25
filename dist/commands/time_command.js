"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
class TimeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("time")
            .description("Show current date and time")
            .option("-u, --utc", "Show UTC time instead of local time")
            .action((opts) => this.showTime(opts));
    }
    showTime(opts) {
        const now = new Date();
        console.log(chalk_1.default.bold.cyan("🕒 Current Date & Time"));
        console.log(chalk_1.default.white("─────────────────────────────"));
        if (opts.utc) {
            console.log(chalk_1.default.white(`🌍 UTC Time:   ${chalk_1.default.yellow(now.toUTCString())}`));
        }
        else {
            console.log(chalk_1.default.white(`🕐 Time:       ${chalk_1.default.yellow(now.toLocaleTimeString())}`));
            console.log(chalk_1.default.white(`📅 Date:       ${chalk_1.default.yellow(now.toLocaleDateString())}`));
            console.log(chalk_1.default.white(`📆 Full:       ${chalk_1.default.yellow(now.toLocaleString())}`));
        }
    }
}
module.exports = TimeCommand;
