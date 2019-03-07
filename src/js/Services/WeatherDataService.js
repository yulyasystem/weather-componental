const apiKey = '0aa9c192f02ac7ffe6e008631edfb04e';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=0aa9c192f02ac7ffe6e008631edfb04e`;
let weather = {};







function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


class WeatherDataService {
  constructor() {

  }
   getCurrentWeather() {

    // const response = await fetch (apiURL);
    // const data  = await response.json();
    // return data;


 return fetch(apiURL)
      .then(handleErrors)
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(function (data) {
        console.log("ok!", data);
        let weatherData =[ {
          temp: data.main.temp,
          humidity: data.main.humidity,
          preassure: data.main.pressure,
          wind: data.wind.speed,

        }]
        console.log(weatherData);
        return weatherData;
      })
      .catch(error => console.log(error));

  }
  getWeatherForecast() {

  }


}





export default new WeatherDataService();
