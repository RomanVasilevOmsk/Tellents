import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../../reducers/auth/actions';

function AppContainer(Component) {
  class AppContainer extends Component {
    handleSignUp = user => {
      this.props.signUp(user);
    };

    handleLogin = (password, email) => {};

    render() {
      return <Component {...this.props} onSignUp={this.handleSignUp} onLogin={this.handleLogin} />;
    }
  }

  AppContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
  };

  const mapStateToProps = state => {
    console.log('state', state);
    return {
      isAuthenticated: state.authReducer.isAuthenticated,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp }, dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppContainer);
}

export default AppContainer;
