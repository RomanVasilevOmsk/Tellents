import { combineReducers } from 'redux';
import authReducer from './auth';
import jobsReducer from './jobs';
import tellentsReducer from './tellents';

export default combineReducers({
  authReducer,
  jobsReducer,
  tellentsReducer,
});
