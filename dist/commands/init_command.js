"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const chalk_1 = __importDefault(require("chalk"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class InitCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init <projectname>")
            .description("Initialize a new project folder with a README")
            .action((projectname) => this.init(projectname));
    }
    init(projectname) {
        if (!projectname || projectname.trim() === "") {
            console.log(chalk_1.default.red("❌ Error: Project name cannot be empty."));
            return;
        }
        const folderPath = path.join(process.cwd(), projectname);
        if (fs.existsSync(folderPath)) {
            console.log(chalk_1.default.yellow(`⚠️  Folder "${projectname}" already exists.`));
            return;
        }
        fs.mkdirSync(folderPath);
        fs.writeFileSync(path.join(folderPath, "README.md"), `# ${projectname}\n\nA new project initialized by MyCLI.\n`);
        console.log(chalk_1.default.green(`✅ Project "${projectname}" initialized successfully!`));
        console.log(chalk_1.default.cyan(`📁 Folder created at: ${folderPath}`));
    }
}
module.exports = InitCommand;
