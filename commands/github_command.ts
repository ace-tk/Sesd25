import axios from "axios"
import chalk from "chalk"
import { Command } from "commander"

class GithubCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("github <username>")
      .description("Fetch GitHub user profile info")
      .action((username: string) => this.getUser(username))
  }

  async getUser(username: string) {
    if (!username || username.trim() === "") {
      console.log(chalk.red("❌ Please provide a GitHub username."))
      return
    }

    try {
      console.log(chalk.cyan(`🔍 Fetching GitHub profile for: ${chalk.bold(username)}...`))
      const res = await axios.get(`https://api.github.com/users/${username}`)
      const data = res.data

      console.log(chalk.bold.green("\n🐙 GitHub Profile"))
      console.log(chalk.white("─────────────────────────────"))
      console.log(chalk.white(`👤 Name:       ${chalk.yellow(data.name || "N/A")}`))
      console.log(chalk.white(`🔗 Username:   ${chalk.yellow(data.login)}`))
      console.log(chalk.white(`📦 Repos:      ${chalk.yellow(data.public_repos)}`))
      console.log(chalk.white(`👥 Followers:  ${chalk.yellow(data.followers)}`))
      console.log(chalk.white(`📝 Bio:        ${chalk.yellow(data.bio || "N/A")}`))
      console.log(chalk.white(`🌍 Location:   ${chalk.yellow(data.location || "N/A")}`))
      console.log(chalk.white(`🔗 Profile:    ${chalk.cyan(data.html_url)}`))
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        console.log(chalk.red(`❌ GitHub user "${username}" not found.`))
      } else {
        console.log(chalk.red("❌ Error fetching GitHub data. Check your connection."))
      }
    }
  }
}

export = GithubCommand