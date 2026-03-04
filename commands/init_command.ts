import chalk from "chalk"
import { Command } from "commander"
import * as fs from "fs"
import * as path from "path"

class InitCommand {
    program: Command

    constructor(program: Command) {
        this.program = program
    }

    register() {
        this.program
            .command("init <projectname>")
            .description("Initialize a new project folder with a README")
            .action((projectname: string) => this.init(projectname))
    }

    init(projectname: string) {
        if (!projectname || projectname.trim() === "") {
            console.log(chalk.red("❌ Error: Project name cannot be empty."))
            return
        }

        const folderPath = path.join(process.cwd(), projectname)

        if (fs.existsSync(folderPath)) {
            console.log(chalk.yellow(`⚠️  Folder "${projectname}" already exists.`))
            return
        }

        fs.mkdirSync(folderPath)
        fs.writeFileSync(
            path.join(folderPath, "README.md"),
            `# ${projectname}\n\nA new project initialized by MyCLI.\n`
        )

        console.log(chalk.green(`✅ Project "${projectname}" initialized successfully!`))
        console.log(chalk.cyan(`📁 Folder created at: ${folderPath}`))
    }
}

export = InitCommand
