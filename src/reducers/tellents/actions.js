import ActionTypes from '../../actionTypes';
import axios from 'axios';

const BASE_URL = 'https://floating-atoll-63112.herokuapp.com/api/v1';
const SEARCH_PATH = '/tellents/search';

export const fetchTellents = (pageNumber, obj) => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_TELLENTS_REQUEST,
  });
  axios
    .get(`${BASE_URL}${SEARCH_PATH}`, {
      params: {
        page: pageNumber,
        q: obj,
      },
    })
    .then(response => response.data)
    .then(json =>
      dispatch({
        type: ActionTypes.FETCH_TELLENTS_SUCCESS,
        payload: json,
      }),
    )
    .catch(() => {
      dispatch({
        type: ActionTypes.FETCH_TELLENTS_FAILURE,
      });
    });
};
