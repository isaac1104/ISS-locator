import { combineReducers } from 'redux';
import issDataReducer from './iss_data_reducer';

const rootReducer = combineReducers({
  iss_data: issDataReducer
});

export default rootReducer;
