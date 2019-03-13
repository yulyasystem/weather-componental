const API_KEY = '0aa9c192f02ac7ffe6e008631edfb04e';
const API_CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${API_KEY}`;
const API_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=${API_KEY}`;


class WeatherDataService {
  constructor() {

  }

 handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  getCurrentWeather() {
    return fetch(API_CURRENT_URL)
      .then(this.handleErrors)
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(function (data) {
        console.log("ok!", data);
        let weatherData = {
          temp: data.main.temp,
          humidity: data.main.humidity,
          preassure: data.main.pressure,
          wind: data.wind.speed,

        }
        return weatherData;
      })
      .catch(error => console.log(error));

  }

  getWeatherForecast() {


  return fetch(API_FORECAST_URL)
    .then(this.handleErrors)
    .then(response => {
      console.log("response", response);
      return response.json();
    })
    .then(function (data) {
      console.log("ok!", data);  
      return data;
    })
    .catch(error => console.log(error));

  }
 
}





export default new WeatherDataService();
