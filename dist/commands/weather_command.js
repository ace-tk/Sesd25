"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class WeatherCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("weather <city>")
            .description("Get current weather for a city")
            .action((city) => this.weather(city));
    }
    async weather(city) {
        if (!city || city.trim() === "") {
            console.log(chalk_1.default.red("❌ Please provide a city name."));
            return;
        }
        try {
            console.log(chalk_1.default.cyan(`🌍 Fetching weather for: ${chalk_1.default.bold(city)}...`));
            const res = await axios_1.default.get(`https://wttr.in/${encodeURIComponent(city)}?format=3`);
            console.log(chalk_1.default.bold.green("\n🌤️  Weather Report"));
            console.log(chalk_1.default.white("─────────────────────────────"));
            console.log(chalk_1.default.yellow(res.data));
        }
        catch (err) {
            console.log(chalk_1.default.red("❌ Error fetching weather. Check the city name or your connection."));
        }
    }
}
module.exports = WeatherCommand;
