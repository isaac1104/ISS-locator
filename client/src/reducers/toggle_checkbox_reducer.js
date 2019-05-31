import { TOGGLE_CHECKBOX } from '../actions/types';

const INITIAL_STATE = {
  checked: true
};

const toggleCheckboxReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checked: !state.checked
      };
    default:
      return state;
  }
};

export default toggleCheckboxReducer;
