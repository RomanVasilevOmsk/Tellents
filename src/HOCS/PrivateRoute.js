import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props => (isAuthenticated ? <Component {...props} /> : <Redirect preserveQueryString to="/" />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
