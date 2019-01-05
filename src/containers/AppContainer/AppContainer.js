import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp, logout, login, validateToken } from '../../reducers/auth/actions';
import { getUserData, isAuthenticated } from '../../selectors';

function appContainer(Component) {
  class AppContainer extends Component {
    componentWillMount = () => {
      validateToken();
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  AppContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
    user: PropTypes.object,
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: isAuthenticated(state),
      user: getUserData(state),
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
