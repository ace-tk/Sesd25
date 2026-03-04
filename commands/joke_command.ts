import axios from "axios"

class JokeCommand{

 program:any

 constructor(program){
  this.program = program
 }

 register(){
  this.program
   .command("joke")
   .description("Random joke")
   .action(()=>this.joke())
 }

 async joke(){

  const res = await axios.get("https://official-joke-api.appspot.com/random_joke")

  console.log(res.data.setup)
  console.log(res.data.punchline)

 }

}

module.exports = JokeCommand