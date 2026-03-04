import axios from "axios"

class QuoteCommand{

 program:any

 constructor(program){
  this.program = program
 }

 register(){
  this.program
   .command("quote")
   .description("Random quote")
   .action(()=>this.getQuote())
 }

 async getQuote(){
  const res = await axios.get("https://api.quotable.io/random")
  console.log(res.data.content)
 }

}

module.exports = QuoteCommand