/*
  * path: src/reducers/index.js
  * description: this file is a rootReducer that combine all reducers including todo reducer
*/
import { combineReducers } from 'redux';

//reducers
import todo from './todo';


const rootReducer = combineReducers({
    todo
});

export default rootReducer;