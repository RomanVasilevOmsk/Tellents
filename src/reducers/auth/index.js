import produce from 'immer';
import ActionTypes from '../../actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SIGN_UP_SUCCESS: {
        draft.user = action.payload;
        draft.isAuthenticated = true;
        return;
      }
      case ActionTypes.LOGIN_SUCCESS: {
        draft.user = action.payload;
        draft.isAuthenticated = true;
        return;
      }
      case ActionTypes.LOGOUT_SUCCESS: {
        draft.user = {};
        draft.isAuthenticated = false;
        return;
      }
      case ActionTypes.TOKEN_SUCCESS: {
        draft.user = action.payload;
        draft.isAuthenticated = true;
        return;
      }
      default:
        return state;
    }
  });
}
