
import {
  CurrentWeather
} from '../CurrentWeather';
import {
  Component
} from '../../framework';
import {SearchBar} from "../SearchBar";
import {createElement} from "../../framework/Component.js"

import WeatherDataService from "../../Services/WeatherDataService.js";
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import {kottans} from "../../framework/Component";



/**@jsx createElement */

export default class App extends Component {
  constructor(host) {
    super(host);
  }
  render() {
   


// WeatherDataService.getCurrentWeather().then(data => {
//   this.props = data;
//   console.log("propss",this.props);
// });

// WeatherDataService.getWeatherForecast().then(data=>{
//   console.log("forecast",data)
// })






  //   return [
  //     {
  //     tag: CurrentWeather,
  //     props: {},
  //     children: [
  //       {
  //         tag: "div",
  //       }
  //     ]

  //   },
  //   {
  //     tag:WeatherForecast,
  //     props: {},
  //   },
    
  // ];
  // return (<SearchBar/>);

  return   ( <div classList = "flex-wrapper"> <SearchBar/> <CurrentWeather/></div>);
  }
}
