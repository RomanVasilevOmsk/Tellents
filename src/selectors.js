export const isAuthenticated = state => state.authReducer.isAuthenticated;
export const getUserData = state => state.authReducer.user;
export const getJobs = state => state.jobsReducer.jobs;
