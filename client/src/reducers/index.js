import { combineReducers } from 'redux';
import issDataReducer from './iss_data_reducer';
import toggleCheckboxReducer from './toggle_checkbox_reducer';

const rootReducer = combineReducers({
  iss_data: issDataReducer,
  toggle_checkbox: toggleCheckboxReducer
});

export default rootReducer;
