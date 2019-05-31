import { TOGGLE_CENTER_CHECKBOX } from '../actions/types';

const INITIAL_STATE = {
  checked: true
};

const toggleCenterCheckboxReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_CENTER_CHECKBOX:
      return {
        ...state,
        checked: !state.checked
      };
    default:
      return state;
  }
};

export default toggleCenterCheckboxReducer;
