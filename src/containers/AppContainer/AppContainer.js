import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp, logout, login } from '../../reducers/auth/actions';

function appContainer(Component) {
  class AppContainer extends Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  AppContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated,
      user: state.authReducer.user,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp, logout, login }, dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppContainer);
}

export default appContainer;
