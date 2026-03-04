"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
class CalcCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("calc <a> <b>")
            .description("Add two numbers together")
            .option("-s, --subtract", "Subtract instead of add")
            .option("-m, --multiply", "Multiply instead of add")
            .action((a, b, opts) => this.calculate(a, b, opts));
    }
    calculate(a, b, opts) {
        const numA = Number(a);
        const numB = Number(b);
        if (isNaN(numA) || isNaN(numB)) {
            console.log(chalk_1.default.red("❌ Error: Both arguments must be valid numbers."));
            return;
        }
        let result;
        let op;
        if (opts.subtract) {
            result = numA - numB;
            op = "-";
        }
        else if (opts.multiply) {
            result = numA * numB;
            op = "×";
        }
        else {
            result = numA + numB;
            op = "+";
        }
        console.log(chalk_1.default.cyan(`🔢 ${numA} ${op} ${numB} = ${chalk_1.default.bold.yellow(result)}`));
    }
}
module.exports = CalcCommand;
