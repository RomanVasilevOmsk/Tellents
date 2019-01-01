import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signUp, logout, login } from '../../reducers/auth/actions';

function authContainer(Component) {
  class AuthContainer extends Component {
    handleSignUp = user => {
      this.props.signUp(user);
    };

    handleLogin = (password, email) => {};

    render() {
      console.log('props', this.props);
      // const { from } = this.props.location.state || { from: { pathname: '/' } };
      if (this.props.isAuthenticated) return <Redirect to="/" />;

      return <Component {...this.props} />;
    }
  }

  AuthContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
  };

  const mapStateToProps = state => {
    // console.log('state', state);
    return {
      isAuthenticated: state.authReducer.isAuthenticated,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp, logout, login }, dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthContainer);
}

export default authContainer;
