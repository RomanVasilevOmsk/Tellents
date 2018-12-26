import { combineReducers } from 'redux-immutable';
import test from './testReducer';
import authReducer from './auth';

export default combineReducers({
  test,
  authReducer,
});
