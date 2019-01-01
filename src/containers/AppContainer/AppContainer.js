import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function appContainer(Component) {
  class AppContainer extends Component {
    handleSignUp = user => {
      this.props.signUp(user);
    };

    handleLogin = (password, email) => {};

    render() {
      return <Component {...this.props} />;
    }
  }

  AppContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
  };

  const mapStateToProps = state => {
    // console.log('state', state);
    return {
      isAuthenticated: state.authReducer.isAuthenticated,
    };
  };


  return connect(
    mapStateToProps,
    null,
  )(AppContainer);
}

export default appContainer;
