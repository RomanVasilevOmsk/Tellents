import reducers from './../reducers';
import configureStore from './../store/configure-store';
import { getUserData, isAuthenticated } from '../selectors';
import { validateToken } from '../reducers/auth/actions';

const authState = {
  user: {
    isAuthenticated: JSON.parse(localStorage.isAuthenticated || JSON.stringify(false)),
    userData: JSON.parse(localStorage.userData || JSON.stringify({})),
  },
};

export const store = configureStore(reducers, authState);

store.subscribe(() => {
  const currentState = store.getState();
  localStorage.isAuthenticated = JSON.stringify(isAuthenticated(currentState));
  localStorage.userData = JSON.stringify(getUserData(currentState));
});

if (!isAuthenticated(store.getState(store))) {
  store.dispatch(validateToken());
}
