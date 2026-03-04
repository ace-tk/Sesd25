const fs = require("fs")

class FileInfoCommand {

 program:any

 constructor(program:any){
  this.program = program
 }

 register(){
  this.program
   .command("fileinfo <filename>")
   .description("Show file information")
   .action((filename)=>this.info(filename))
 }

 info(filename){
  const stats = fs.statSync(filename)

  console.log("File size:",stats.size)
  console.log("Created:",stats.birthtime)
 }

}

module.exports = FileInfoCommand