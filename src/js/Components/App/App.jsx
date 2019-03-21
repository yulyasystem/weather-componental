
import {
  CurrentWeather
} from '../CurrentWeather';
import {
  Component
} from '../../framework';

import {createElement} from "../../framework/Component.js"

import WeatherDataService from "../../Services/WeatherDataService.js";
import WeatherForecast from '../WeatherForecast/WeatherForecast';


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

  return (<div className="me"> HEEEY<span>hello</span></div>);
  }
}
