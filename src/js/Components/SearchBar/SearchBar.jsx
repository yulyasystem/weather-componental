import { Component } from "../../framework";
import WeatherDataService from '../../Services/WeatherDataService.js';
import {createElement} from '../../framework/Component';
/**@jsx createElement */

export default class SearchBar extends Component  {
  constructor(host,props) {
    super(host,props);
  }

  render(){
    return(<section classList="search-section">
      <input type="search" name="search" id="search" classList="input-search" results="5" placeholder="Enter the city ..." /> 
      <a href="#"> <img src="./img/favourites.svg" alt="bookmarks" classList="star-image"/></a>
    </section>);
    
  }
}


