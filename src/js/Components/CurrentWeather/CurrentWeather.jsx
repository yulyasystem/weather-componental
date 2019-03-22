import {
  Component
} from "../../framework";
import SearchBar from "../SearchBar";
import WeatherDataService from '../../Services/WeatherDataService.js';
import {createElement} from '../../framework/Component';
import kitty from "../../../img/kitty.svg";


/**@jsx createElement */

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    WeatherDataService.getCurrentWeather().then(data => {
      this.props = data;
      console.log("propss",this.props);
    });

   

    return ( <div classList="weather-card"> 
          <img src={kitty} alt="cat picture" classList="card-image"/>
          <div classList="weather-info">
            <p classList="date"> March 1</p>
            <p classList="city"> Kyiv, UA</p>
            <div classList="degree-info">
              23 °C
              <button classList="degree-switch">°F</button>
            </div>
            <img src="./img/sun1.svg" alt="weather-icon" class="weather-icon"/>
            <div classList="weather-additional">
              <p classList="weather-item wind">Wind</p>
              <p classList="weather-item humidity">Humidity</p>
              <p classList="weather-item preassure">Preassure</p>
              <p classList="weather-item wind-value">4 m/s</p>
              <p classList="weather-item">73%</p>
              <p classList="weather-item">324 hpa</p>
            </div>  
          </div>
        </div>)  ;   
        
  
}
}
