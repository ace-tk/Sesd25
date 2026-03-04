import chalk from "chalk"
import { Command } from "commander"
import * as fs from "fs"
import * as path from "path"

class FileInfoCommand {
  program: Command

  constructor(program: Command) {
    this.program = program
  }

  register() {
    this.program
      .command("fileinfo <filename>")
      .description("Show detailed information about a file")
      .action((filename: string) => this.info(filename))
  }

  info(filename: string) {
    const fullPath = path.resolve(filename)

    if (!fs.existsSync(fullPath)) {
      console.log(chalk.red(`❌ Error: File "${filename}" not found.`))
      return
    }

    const stats = fs.statSync(fullPath)

    console.log(chalk.bold.cyan("📄 File Information"))
    console.log(chalk.white("─────────────────────────────"))
    console.log(chalk.white(`📁 Path:      ${chalk.yellow(fullPath)}`))
    console.log(chalk.white(`📦 Size:      ${chalk.yellow(stats.size + " bytes")}`))
    console.log(chalk.white(`🕒 Created:   ${chalk.yellow(stats.birthtime.toLocaleString())}`))
    console.log(chalk.white(`✏️  Modified:  ${chalk.yellow(stats.mtime.toLocaleString())}`))
    console.log(chalk.white(`📂 Is Dir:    ${chalk.yellow(stats.isDirectory() ? "Yes" : "No")}`))
  }
}

export = FileInfoCommand