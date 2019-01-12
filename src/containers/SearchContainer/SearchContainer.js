import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import { signUp, logout, login } from '../../reducers/auth/actions';
import { fetchJobs } from '../../reducers/jobs/actions';
import { fetchTellents } from '../../reducers/tellents/actions';
import { getUserData, getJobs, getTellents, isAuthenticated, getMetaJobs, getMetaTellents } from '../../selectors';

function searchContainer(Component) {
  class SearchContainer extends Component {
    state = {
      parsed: queryString.parse(this.props.location.search),
    };

    componentWillMount = () => {
      const { isAuthenticated, fetchJobs, fetchTellents } = this.props;
      const { parsed } = this.state;
      if (isAuthenticated) {
        fetchJobs(67, parsed);
        fetchTellents(1, parsed);
      }
    };

    handleLoadMoreJobs = () => {
      const { metaJobs, jobs, fetchJobs } = this.props;
      const { parsed } = this.state;
      if (metaJobs.total_count > jobs.length) {
        fetchJobs(metaJobs.next_page, parsed);
        return null;
      }
    };

    handleLoadMoreTellents = () => {
      const { metaUsers, users, fetchTellents } = this.props;
      const { parsed } = this.state;
      if (metaUsers.total_count > users.length) {
        fetchTellents(metaUsers.next_page, parsed);
        return null;
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          handleLoadMoreJobs={this.handleLoadMoreJobs}
          handleLoadMoreTellents={this.handleLoadMoreTellents}
        />
      );
    }
  }

  SearchContainer.propTypes = {
    isAuthenticated: PropTypes.bool,
    signUp: PropTypes.func,
    fetchJobs: PropTypes.func,
    fetchTellents: PropTypes.func,
    location: PropTypes.object,
    jobs: PropTypes.array,
    users: PropTypes.array,
    metaJobs: PropTypes.object,
    metaUsers: PropTypes.object,
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: isAuthenticated(state),
      user: getUserData(state),
      jobs: getJobs(state),
      metaJobs: getMetaJobs(state),
      users: getTellents(state),
      metaUsers: getMetaTellents(state),
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp, logout, login, fetchJobs, fetchTellents }, dispatch);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchContainer);
}

export default searchContainer;
