class RandomCommand {

    program:any
   
    constructor(program:any){
     this.program = program
    }
   
    register(){
     this.program
      .command("random")
      .description("Generate random number")
      .action(()=>this.random())
   
    }
   
    random(){
     const num = Math.floor(Math.random()*100)
     console.log("Random number:",num)
    }
   
   }
   
   module.exports = RandomCommand