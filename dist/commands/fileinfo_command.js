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
class FileInfoCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("fileinfo <filename>")
            .description("Show detailed information about a file")
            .action((filename) => this.info(filename));
    }
    info(filename) {
        const fullPath = path.resolve(filename);
        if (!fs.existsSync(fullPath)) {
            console.log(chalk_1.default.red(`❌ Error: File "${filename}" not found.`));
            return;
        }
        const stats = fs.statSync(fullPath);
        console.log(chalk_1.default.bold.cyan("📄 File Information"));
        console.log(chalk_1.default.white("─────────────────────────────"));
        console.log(chalk_1.default.white(`📁 Path:      ${chalk_1.default.yellow(fullPath)}`));
        console.log(chalk_1.default.white(`📦 Size:      ${chalk_1.default.yellow(stats.size + " bytes")}`));
        console.log(chalk_1.default.white(`🕒 Created:   ${chalk_1.default.yellow(stats.birthtime.toLocaleString())}`));
        console.log(chalk_1.default.white(`✏️  Modified:  ${chalk_1.default.yellow(stats.mtime.toLocaleString())}`));
        console.log(chalk_1.default.white(`📂 Is Dir:    ${chalk_1.default.yellow(stats.isDirectory() ? "Yes" : "No")}`));
    }
}
module.exports = FileInfoCommand;
