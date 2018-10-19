import { fromJS } from 'immutable';
import ActionTypes from '../../actionTypes';

const initialState = fromJS({
  isFetching: false,
  test: [],
});

const ACTION_HANDLERS = {
  [ActionTypes.FETCH_TEST]: (state, action) => state.set('isFetching', action.isFetching),
  [ActionTypes.FETCH_TEST_SUCCESS]: (state, action) => state.set('test', fromJS(action.test)),
};

export default function testReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}