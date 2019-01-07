import produce from 'immer';
import ActionTypes from '../../actionTypes';

const initialState = {
  isLoadTellents: false,
  users: [],
  meta: {},
};

export default function tellentsReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_TELLENTS_REQUEST: {
        draft.isLoadTellents = true;
        return;
      }
      case ActionTypes.FETCH_TELLENTS_SUCCESS: {
        const { users, meta } = action.payload;
        users.forEach(users => {
          draft.users.push(users);
        });
        draft.meta = meta;
        draft.isLoadTellents = false;
        return;
      }
      case ActionTypes.FETCH_TELLENTS_FAILURE: {
        draft.isLoadTellents = false;
        return;
      }
      default:
        return state;
    }
  });
}
