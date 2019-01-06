import produce from 'immer';
import ActionTypes from '../../actionTypes';

const initialState = {
  users: [],
  meta: {},
};

export default function tellentsReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_TELLENTS_REQUEST: {
        draft.users = [];
        draft.meta = {};
        return;
      }
      case ActionTypes.FETCH_TELLENTS_SUCCESS: {
        const { users, meta } = action.payload;
        draft.users = users;
        draft.meta = meta;
        return;
      }
      case ActionTypes.FETCH_TELLENTS_FAILURE: {
        draft.users = [];
        draft.meta = {};
        return;
      }
      default:
        return state;
    }
  });
}
