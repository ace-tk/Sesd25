import axios from "axios"

class WeatherCommand{

 program:any

 constructor(program){
  this.program = program
 }

 register(){
  this.program
   .command("weather <city>")
   .description("Weather info")
   .action((city)=>this.weather(city))
 }

 async weather(city){

  const res = await axios.get(`https://wttr.in/${city}?format=3`)
  console.log(res.data)

 }

}

module.exports = WeatherCommand