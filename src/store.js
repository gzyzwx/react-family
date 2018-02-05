import {createStore} from 'redux';
import combineReducers from './reducers/index.js';

let store = createStore(combineReducers);

export default store;