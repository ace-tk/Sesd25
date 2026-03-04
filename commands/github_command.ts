import axios from "axios"

class GithubCommand{

 program:any

 constructor(program){
  this.program = program
 }

 register(){
  this.program
   .command("github <username>")
   .description("GitHub user info")
   .action((username)=>this.getUser(username))
 }

 async getUser(username){

  const res = await axios.get(`https://api.github.com/users/${username}`)

  console.log("Name:",res.data.name)
  console.log("Repos:",res.data.public_repos)

 }

}

module.exports = GithubCommand