class CalcCommand {

    program:any
   
    constructor(program:any){
     this.program = program
    }
   
    register(){
     this.program
      .command("calc <a> <b>")
      .description("Add two numbers")
      .action((a,b)=>this.add(a,b))
    }
   
    add(a:number,b:number){
     console.log("Result:", Number(a)+Number(b))
    }
   
   }
   
   module.exports = CalcCommand