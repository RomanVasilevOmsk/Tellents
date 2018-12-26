// import { fromJS } from 'immutable';
import produce from 'immer';
import ActionTypes from '../../actionTypes';

const initialState = {
  isSignUp: false,
  user: {},
};

// const ACTION_HANDLERS = {
//   [ActionTypes.SIGN_UP_REQUEST]: (state, action) => state.set('isSignUp', action.isFetching),
//   [ActionTypes.SIGN_UP_SUCCESS]: (state, action) => state.set('user', fromJS(action.user)),
// };

// export default function authReducer(state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type];
//   return handler ? handler(state, action) : state;
// }

export default function authReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SIGN_UP_SUCCESS: {
        draft.user = action.payload;
        draft.isSignUp = true;
        return;
      }
      default:
        return state;
    }
  });
}
