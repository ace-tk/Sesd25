const {Command} = require("Commander")


class CLI_Engine{
    program;
    constructor(){
        this.program = new Command()

    }

    registerCommands(commands){
        commands.forEach((commandClass)=>{
            const commandInstance = new commandClass(this.program)
            commandInstance.register()
        })

    }

    run(){
        this.program.parse()
    }

}

module.exports = CLI_Engine