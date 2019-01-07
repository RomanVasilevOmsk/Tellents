import React from 'react';
import PropTypes from 'prop-types';
import LeftSideBar from '../LeftSideBar';
import RightSidebar from '../RightSidebar';
import TellentsList from '../TellentsList';
import JobsList from '../JobsList';

export const JobBoxes = ({ jobTalentsToogler, jobs, users, handleLoadMoreJobs, handleLoadMoreTellents }) => (
  <div className="row main-content flexbox">
    <LeftSideBar />
    {jobTalentsToogler === 'jobs' ? (
      <div className="col-xs-10 container-fluid job-boxes job-boxes--jobs">
        <div className="flexbox row">
          <JobsList jobs={jobs} handleLoadMoreJobs={handleLoadMoreJobs} />
          <RightSidebar />
        </div>
      </div>
    ) : (
      <div className="col-xs-10 container-fluid job-boxes job-boxes--tallents">
        <div className="flexbox row">
          <TellentsList users={users} handleLoadMoreTellents={handleLoadMoreTellents} />
          <RightSidebar />
        </div>
      </div>
    )}
  </div>
);

JobBoxes.propTypes = {
  jobTalentsToogler: PropTypes.string.isRequired,
  jobs: PropTypes.array,
  users: PropTypes.array,
  handleLoadMoreJobs: PropTypes.func,
  handleLoadMoreTellents: PropTypes.func,
};

export default JobBoxes;
