import { combineReducers } from 'redux';
import incDecReducer from './incDecReducer';

const rootReducer = combineReducers({
  counter: incDecReducer
});

export default rootReducer;
