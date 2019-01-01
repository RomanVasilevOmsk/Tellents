import ActionTypes from '../../actionTypes';
import Auth from 'j-toker';

export const signUp = payload => dispatch => {
  dispatch({
    type: ActionTypes.SIGN_UP_REQUEST,
  });
  console.log('payload', payload);
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
  console.log('payload', payload);
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
  console.log('payload logout', payload);
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
};
