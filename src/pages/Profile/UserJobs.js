import React, { Component } from 'react';
import { MainLayout } from '../../components/Layouts';
import PropTypes from 'prop-types';
import searchContainer from '../../containers/SearchContainer';
import _ from 'lodash';

class UserJobs extends Component {
  render() {
    const { job } = this.props;
    return (
      <MainLayout>{!_.isEmpty(job) && <div className="container-fluid">Name : {job.user.full_name}</div>}</MainLayout>
    );
  }
}

UserJobs.propTypes = {
  match: PropTypes.object,
  fetchJob: PropTypes.func,
  job: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

export default searchContainer(UserJobs);
