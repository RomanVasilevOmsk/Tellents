import produce from 'immer';
import ActionTypes from '../../actionTypes';

const initialState = {
  jobs: [],
  meta: {},
};

export default function jobsReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_JOBS_REQUEST: {
        draft.jobs = [];
        draft.meta = {};
        return;
      }
      case ActionTypes.FETCH_JOBS_SUCCESS: {
        const { jobs, meta } = action.payload;
        draft.jobs = jobs;
        draft.meta = meta;
        return;
      }
      case ActionTypes.FETCH_JOBS_FAILURE: {
        draft.jobs = [];
        draft.meta = {};
        return;
      }
      default:
        return state;
    }
  });
}
