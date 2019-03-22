import 'normalize.css';
import '../scss/main.scss';
import {App} from './Components/App';
import {kottans,createElement} from './framework/Component.js';

/**@jsx createElement */

kottans(<App/>,document.getElementById('root'));
