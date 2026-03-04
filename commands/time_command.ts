class TimeCommand {

    program:any
   
    constructor(program:any){
     this.program = program
    }
   
    register(){
     this.program
      .command("time")
      .description("Show current time")
      .action(()=>this.showTime())
    }
   
    showTime(){
     const now = new Date()
     console.log("Current time:", now.toLocaleTimeString())
    }
   
   }
   
   module.exports = TimeCommand