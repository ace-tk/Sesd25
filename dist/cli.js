#!/usr/bin/env node
const cli_engine = require("./commands/CLI_Engine/cli_engine");
const greet_command = require("./commands/greet_command");
const engine = new cli_engine();
engine.registerCommands([greet_command]);
engine.run();
