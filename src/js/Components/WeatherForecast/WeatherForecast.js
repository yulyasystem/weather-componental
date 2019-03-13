import { Component } from "../../framework";
import WeatherDataService from "../../Services/WeatherDataService.js"

export default class WeatherForecast extends Component  {
  constructor(host,props) {
    super(host,props);
  }

  render(){
       WeatherDataService.getCurrentWeather().then(data => {
        this.props = data;
        console.log("propss in wether", this.props);
      });

      
      return "this.props";
  }
}
