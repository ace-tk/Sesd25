#!/usr/bin/env node

import CLI_Engine = require("./commands/CLI_Engine/cli_engine")
import GreetCommand = require("./commands/greet_command")
import InitCommand = require("./commands/init_command")
import TimeCommand = require("./commands/time_command")
import RandomCommand = require("./commands/random_command")
import CalcCommand = require("./commands/calc_command")
import FileInfoCommand = require("./commands/fileinfo_command")
import QuoteCommand = require("./commands/quote_command")
import GithubCommand = require("./commands/github_command")
import WeatherCommand = require("./commands/weather_command")
import JokeCommand = require("./commands/joke_command")

const engine = new CLI_Engine()

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
])

engine.run()
