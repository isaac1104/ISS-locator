import { FETCH_ISS_DATA_REQUEST, FETCH_ISS_DATA_SUCCESS, FETCH_ISS_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
  is_fetching: false,
  data: [],
  error: null
};

const issDataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_ISS_DATA_REQUEST:
      return {
        ...state,
        is_fetching: payload
      };
    case FETCH_ISS_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        data: payload,
        error: null
      };
    case FETCH_ISS_DATA_FAIL:
      return {
        ...state,
        is_fetching: false,
        data: [],
        error: payload
      };
    default:
      return state;
  }
};

export default issDataReducer;
