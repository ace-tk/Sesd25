import axios from "axios"
import chalk from "chalk"
import { Command } from "commander"

class WeatherCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("weather <city>")
      .description("Get current weather for a city")
      .action((city: string) => this.weather(city))
  }

  async weather(city: string) {
    if (!city || city.trim() === "") {
      console.log(chalk.red("❌ Please provide a city name."))
      return
    }

    try {
      console.log(chalk.cyan(`🌍 Fetching weather for: ${chalk.bold(city)}...`))
      const res = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=3`)

      console.log(chalk.bold.green("\n🌤️  Weather Report"))
      console.log(chalk.white("─────────────────────────────"))
      console.log(chalk.yellow(res.data))
    } catch (err: any) {
      console.log(chalk.red("❌ Error fetching weather. Check the city name or your connection."))
    }
  }
}

export = WeatherCommand