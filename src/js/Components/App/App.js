import {
  CurrentWeather
} from '../CurrentWeather';
import {
  Component
} from '../../framework';
import WeatherDataService from "../../Services/WeatherDataService.js";
import WeatherForecast from '../WeatherForecast/WeatherForecast';




export default class App extends Component {
  constructor(host) {
    super(host);
  }
  render() {
    // const w1 = document.createElement('div');
    // new Wind(w1,{speed:3,unit:'C'});


    // return ['Hello my darling,',w1
    // ,{
    //   tag: Temperature,
    //   props:{
    //     temperature:16,
    //     unit: 'C',
    //   },
    // },
    // ];

  // console.log(WeatherDataService.getCurrentWeather().then(data => {
  //   this._render(data)
  // }));

WeatherDataService.getCurrentWeather().then(data => {
  this.props = data;
  console.log("propss",this.props);
});

WeatherDataService.getWeatherForecast().then(data=>{
  console.log("forecast",data)
})






    return [
      {
      tag: CurrentWeather,
      props: {},

    },
    {
      tag:WeatherForecast,
      props: {},
    },
    
  ];
  }
}
