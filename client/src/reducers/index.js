import { combineReducers } from 'redux';
import issDataReducer from './iss_data_reducer';
import toggleCenterCheckboxReducer from './toggle_center_checkbox_reducer';

const rootReducer = combineReducers({
  iss_data: issDataReducer,
  toggle_checkbox: toggleCenterCheckboxReducer
});

export default rootReducer;
