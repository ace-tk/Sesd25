"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class GithubCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("github <username>")
            .description("Fetch GitHub user profile info")
            .action((username) => this.getUser(username));
    }
    async getUser(username) {
        if (!username || username.trim() === "") {
            console.log(chalk_1.default.red("❌ Please provide a GitHub username."));
            return;
        }
        try {
            console.log(chalk_1.default.cyan(`🔍 Fetching GitHub profile for: ${chalk_1.default.bold(username)}...`));
            const res = await axios_1.default.get(`https://api.github.com/users/${username}`);
            const data = res.data;
            console.log(chalk_1.default.bold.green("\n🐙 GitHub Profile"));
            console.log(chalk_1.default.white("─────────────────────────────"));
            console.log(chalk_1.default.white(`👤 Name:       ${chalk_1.default.yellow(data.name || "N/A")}`));
            console.log(chalk_1.default.white(`🔗 Username:   ${chalk_1.default.yellow(data.login)}`));
            console.log(chalk_1.default.white(`📦 Repos:      ${chalk_1.default.yellow(data.public_repos)}`));
            console.log(chalk_1.default.white(`👥 Followers:  ${chalk_1.default.yellow(data.followers)}`));
            console.log(chalk_1.default.white(`📝 Bio:        ${chalk_1.default.yellow(data.bio || "N/A")}`));
            console.log(chalk_1.default.white(`🌍 Location:   ${chalk_1.default.yellow(data.location || "N/A")}`));
            console.log(chalk_1.default.white(`🔗 Profile:    ${chalk_1.default.cyan(data.html_url)}`));
        }
        catch (err) {
            if (err.response && err.response.status === 404) {
                console.log(chalk_1.default.red(`❌ GitHub user "${username}" not found.`));
            }
            else {
                console.log(chalk_1.default.red("❌ Error fetching GitHub data. Check your connection."));
            }
        }
    }
}
module.exports = GithubCommand;
