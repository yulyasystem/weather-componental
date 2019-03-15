import {
  Component
} from "../../framework";
import WeatherDataService from '../../Services/WeatherDataService.js';

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {

    return [{
      tag: 'div',
      classList: 'weather-card',
      children: [
        {
          tag: 'div',
          classList: 'weather-info'
        },
      ],
    }, ];
    /*
        <div class="weather-card">
          <img src="./img/kitty.svg" alt="cat picture" class="card-image">
          <div class="weather-info">
            <p class="date"> March 1</p>
            <p class="city"> Kyiv, UA</p>
            <div class="degree-info">
              23 °C
              <button class="degree-switch">°F</button>
            </div>
            <img src="./img/sun1.svg" alt="weather-icon" class="weather-icon">
            <div class="weather-additional">
              <p class="weather-item wind">Wind</p>
              <p class="weather-item humidity">Humidity</p>
              <p class="weather-item preassure">Preassure</p>
              <p class="weather-item wind-value">4 m/s</p>
              <p class="weather-item">73%</p>
              <p class="weather-item">324 hpa</p>
            </div>  
          </div>
        </div>
    */
  }
}
