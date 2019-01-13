import produce from 'immer';
import ActionTypes from '../../actionTypes';

const initialState = {
  isLoadJobs: false,
  isLoadJob: false,
  job: {},
  jobs: [],
  meta: {},
};

export default function jobsReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_JOBS_REQUEST: {
        draft.isLoadJobs = true;
        return;
      }
      case ActionTypes.FETCH_JOBS_SUCCESS: {
        const { jobs, meta } = action.payload;
        jobs.forEach(jobs => {
          draft.jobs.push(jobs);
        });
        draft.isLoadJobs = false;
        draft.meta = meta;
        return;
      }
      case ActionTypes.FETCH_JOBS_FAILURE: {
        draft.isLoadJobs = false;
        return;
      }
      case ActionTypes.FETCH_JOB_REQUEST: {
        draft.isLoadJob = true;
        return;
      }
      case ActionTypes.FETCH_JOB_SUCCESS: {
        draft.job = action.payload.job;
        draft.isLoadJob = false;
        return;
      }
      case ActionTypes.FETCH_JOB_FAILURE: {
        draft.isLoadJob = false;
        return;
      }
      default:
        return state;
    }
  });
}
