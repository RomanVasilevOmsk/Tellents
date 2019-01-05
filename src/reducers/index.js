import { combineReducers } from 'redux';
import authReducer from './auth';
import jobsReducer from './jobs';

export default combineReducers({
  authReducer,
  jobsReducer,
});
