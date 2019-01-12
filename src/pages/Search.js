import React from 'react';
import PropTypes from 'prop-types';
import { MainLayout } from '../components/Layouts';
import ContentHeader from '../components/ContentHeader';
import JobBoxesHeader from '../components/JobBoxesHeader';
import JobBoxes from '../components/JobBoxes';
import searchContainer from '../containers/SearchContainer';

class SearchPage extends React.Component {
  state = {
    jobTalentsToogler: 'jobs',
  };

  onChangeJobTalentsToogler = value => {
    this.setState({ jobTalentsToogler: value });
  };
  onToogleJobTalentsToogler = () => {
    if (this.state.jobTalentsToogler === 'jobs') {
      this.setState({ jobTalentsToogler: 'talents' });
    }
    if (this.state.jobTalentsToogler === 'talents') {
      this.setState({ jobTalentsToogler: 'jobs' });
    }
  };

  resultQuery = value => {
    if (value === 'talents') {
      return this.props.metaUsers.total_pages;
    } else {
      return this.props.metaJobs.total_pages;
    }
  };

  render() {
    const { jobTalentsToogler } = this.state;
    const { jobs, user, users, handleLoadMoreJobs, handleLoadMoreTellents } = this.props;
    const result = this.resultQuery(jobTalentsToogler);
    return (
      <div className="home-page">
        <div className="wrapper">
          <MainLayout>
            <div className="container-fluid">
              <ContentHeader user={user} />
              <JobBoxesHeader
                result={result}
                jobTalentsToogler={this.state.jobTalentsToogler}
                onChangeJobTalentsToogler={this.onChangeJobTalentsToogler}
                onToogleJobTalentsToogler={this.onToogleJobTalentsToogler}
              />
              <JobBoxes
                jobTalentsToogler={this.state.jobTalentsToogler}
                jobs={jobs}
                users={users}
                handleLoadMoreJobs={handleLoadMoreJobs}
                handleLoadMoreTellents={handleLoadMoreTellents}
              />
            </div>
          </MainLayout>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  jobs: PropTypes.array,
  user: PropTypes.object,
  users: PropTypes.array,
  metaJobs: PropTypes.object,
  metaUsers: PropTypes.object,
  handleLoadMoreJobs: PropTypes.func,
  handleLoadMoreTellents: PropTypes.func,
};

export default searchContainer(SearchPage);
