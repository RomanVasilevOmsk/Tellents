import ActionTypes from '../../actionTypes';
import axios from 'axios';

const BASE_URL = 'https://floating-atoll-63112.herokuapp.com/api/v1';
const SEARCH_PATH = '/jobs/';

export const fetchJobs = (pageNumber, obj) => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_JOBS_REQUEST,
  });
  axios
    .get(`${BASE_URL}${SEARCH_PATH}search`, {
      params: {
        page: pageNumber,
        q: obj,
      },
    })
    .then(response => response.data)
    .then(json =>
      dispatch({
        type: ActionTypes.FETCH_JOBS_SUCCESS,
        payload: json,
      }),
    )
    .catch(() => {
      dispatch({
        type: ActionTypes.FETCH_JOBS_FAILURE,
      });
    });
};

export const fetchJob = id => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_JOB_REQUEST,
  });
  axios
    .get(`${BASE_URL}${SEARCH_PATH}${id}`)
    .then(response => response.data)
    .then(json =>
      dispatch({
        type: ActionTypes.FETCH_JOB_SUCCESS,
        payload: json,
      }),
    )
    .catch(() => {
      dispatch({
        type: ActionTypes.FETCH_JOB_FAILURE,
      });
    });
};
