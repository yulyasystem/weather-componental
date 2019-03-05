
  const apiKey= '0aa9c192f02ac7ffe6e008631edfb04e';
  const apiPath= 'api.openweathermap.org/data/2.5/weather?q=London';
  const apiURL= `${apiPath}&appid=${apiKey}`;




function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

class WeatherDataService{
  constructor(apiKey,apiPath,apiURL){
    this.apiKey = apiKey;
    this.apiPath = apiPath;
    this.apiURL = apiURL;
  }
  getCurrentWeather(){
    return fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=0aa9c192f02ac7ffe6e008631edfb04e', { mode: 'no-cors' })
    .then(response => {
        return response.json();
      })
      .then(function (json) {
        console.log("ok!");
        data = json.results;
        render(data);
      })
      .catch(error => console.log(error));

  }
  getWeatherForecast(){

  }
}


export default new WeatherDataService();
