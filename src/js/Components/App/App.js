import {
  CurrentWeather
} from '../CurrentWeather';
import {
  Component
} from '../../framework';
import WeatherDataService from "../../Services/WeatherDataService.js";




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
    
    console.log(WeatherDataService.getCurrentWeather());
    return '1';
  }
}
