import ActionTypes from '../../actionTypes';
import Auth from 'j-toker';
import { createAction } from 'redux-actions';

export const validateTokenRequest = createAction(ActionTypes.TOKEN_REQUEST);
export const validateTokenSuccess = createAction(ActionTypes.TOKEN_SUCCESS);
export const validateTokenFailure = createAction(ActionTypes.TOKEN_FAILURE);

export const signUp = payload => dispatch => {
  dispatch({
    type: ActionTypes.SIGN_UP_REQUEST,
  });
  Auth.emailSignUp(payload)
    .then(response => response.data)
    .then(payload =>
      dispatch({
        type: ActionTypes.SIGN_UP_SUCCESS,
        payload,
      }),
    )
    .catch(() => {
      dispatch({
        type: ActionTypes.SIGN_UP_FAILURE,
      });
    });
};

export const login = payload => dispatch => {
  dispatch({
    type: ActionTypes.LOGIN_REQUEST,
  });
  Auth.emailSignIn(payload)
    .then(response => response.data)
    .then(payload =>
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload,
      }),
    )
    .catch(() => {
      dispatch({
        type: ActionTypes.LOGIN_FAILURE,
      });
    });
};

export const logout = payload => dispatch => {
  dispatch({
    type: ActionTypes.LOGOUT_REQUEST,
  });
  Auth.signOut(payload)
    .then(response => response.data)
    .then(payload =>
      dispatch({
        type: ActionTypes.LOGOUT_SUCCESS,
        payload,
      }),
    )
    .catch(() => {
      dispatch({
        type: ActionTypes.LOGOUT_FAILURE,
      });
    });
  localStorage.clear();
};

export const validateToken = payload => dispatch => {
  dispatch(validateTokenRequest());

  Auth.validateToken()
    .then(payload =>
      dispatch({
        type: ActionTypes.TOKEN_SUCCESS,
        payload: payload,
      }),
    )
    .catch(dispatch(validateTokenFailure()));
};
