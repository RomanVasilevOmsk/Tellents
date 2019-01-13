export const isAuthenticated = state => state.authReducer.isAuthenticated;
export const getUserData = state => state.authReducer.user;
export const getJobs = state => state.jobsReducer.jobs;
export const getJob = state => state.jobsReducer.job;
export const getTellents = state => state.tellentsReducer.users;
export const getMetaJobs = state => state.jobsReducer.meta;
export const getMetaTellents = state => state.tellentsReducer.meta;
