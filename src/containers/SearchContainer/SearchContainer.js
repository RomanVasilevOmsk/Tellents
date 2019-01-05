import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import { signUp, logout, login } from '../../reducers/auth/actions';
import { fetchJobs } from '../../reducers/jobs/actions';
import { getUserData, getJobs, isAuthenticated } from '../../selectors';

function searchContainer(Component) {
  class SearchContainer extends Component {
    componentWillMount = () => {
      const { isAuthenticated, fetchJobs } = this.props;
      const parsed = queryString.parse(this.props.location.search);
      if (isAuthenticated) {
        return fetchJobs(1, parsed);
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  SearchContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
    fetchJobs: PropTypes.func,
    location: PropTypes.object,
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: isAuthenticated(state),
      user: getUserData(state),
      jobs: getJobs(state),
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp, logout, login, fetchJobs }, dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchContainer);
}

export default searchContainer;
