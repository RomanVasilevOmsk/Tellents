import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp, logout, login } from '../../reducers/auth/actions';

function searchContainer(Component) {
  class SearchContainer extends Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  SearchContainer.propTypes = {
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
  )(SearchContainer);
}

export default searchContainer;
