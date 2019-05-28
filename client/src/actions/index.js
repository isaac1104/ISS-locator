import axios from 'axios';
import { FETCH_ISS_DATA_REQUEST, FETCH_ISS_DATA_SUCCESS, FETCH_ISS_DATA_FAIL } from './types';

const fetchIssDataRequest = () => ({
  type: FETCH_ISS_DATA_REQUEST,
  payload: true
});

const fetchIssDataSuccess = data => ({
  type: FETCH_ISS_DATA_SUCCESS,
  payload: data
});

const fetchIssDataFail = error => ({
  type: FETCH_ISS_DATA_FAIL,
  payload: error
});

export const fetchIssData = () => async dispatch => {
  dispatch(fetchIssDataRequest());
  try {
    const request = await axios.get('/api/iss_data');
    const { data } = request;
    dispatch(fetchIssDataSuccess(data));
  } catch (e) {
    dispatch(fetchIssDataFail(e));
  }
};
