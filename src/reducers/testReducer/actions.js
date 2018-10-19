import ActionTypes from '../../actionTypes';
import uid from 'uid';

import { fetchTestRequest } from '../../api';

export const fetchTest = () => dispatch => {
  dispatch({
    type: ActionTypes.FETCH_TEST,
    isFetching: true,
});
  return fetchTestRequest()
    .then(res => {
      dispatch({
        type: ActionTypes.FETCH_TEST_SUCCESS,
        test: res.data.test,
        isFetching: false,
      });
    })
    .catch(error => console.log(error));
};
// import axios from 'axios';
// const apiUrl = 'https://floating-atoll-63112.herokuapp.com/api/v1/client_jobs';
// // Sync Action
// export const fetchTestSuccess = (test) => {
//     return {
//         type: 'FETCH_TEST_SUCCESS',
//         test
//     }
// };
//
// export const fetchTest = () => {
//     // Returns a dispatcher function
//     // that dispatches an action at a later time
//     return (dispatch) => {
//         // Returns a promise
//         return axios.get(apiUrl)
//             .then(response => {
//                 // Dispatch another action
//                 // to consume data
//                 dispatch(fetchTestSuccess(response.data))
//             })
//             .catch(error => {
//                 throw(error);
//             });
//     };
// };