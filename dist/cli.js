#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CLI_Engine = require("./commands/CLI_Engine/cli_engine");
const GreetCommand = require("./commands/greet_command");
const InitCommand = require("./commands/init_command");
const TimeCommand = require("./commands/time_command");
const RandomCommand = require("./commands/random_command");
const CalcCommand = require("./commands/calc_command");
const FileInfoCommand = require("./commands/fileinfo_command");
const QuoteCommand = require("./commands/quote_command");
const GithubCommand = require("./commands/github_command");
const WeatherCommand = require("./commands/weather_command");
const JokeCommand = require("./commands/joke_command");
const engine = new CLI_Engine();
engine.registerCommands([
    GreetCommand,
    InitCommand,
    TimeCommand,
    RandomCommand,
    CalcCommand,
    FileInfoCommand,
    QuoteCommand,
    GithubCommand,
    WeatherCommand,
    JokeCommand,
]);
engine.run();
