import React from 'react';
import PropTypes from 'prop-types';
import LeftSideBar from '../LeftSideBar';
import RightSidebar from '../RightSidebar';
import TellentsList from '../TellentsList';
import JobsList from '../JobsList';

export const JobBoxes = ({ jobTalentsToogler, jobs, users }) => (
  <div className="row main-content flexbox">
    <LeftSideBar />
    {jobTalentsToogler === 'jobs' ? (
      <div className="col-xs-10 container-fluid job-boxes job-boxes--jobs">
        <div className="flexbox row">
          <JobsList jobs={jobs} />
          <RightSidebar />
        </div>
      </div>
    ) : (
      <div className="col-xs-10 container-fluid job-boxes job-boxes--tallents">
        <div className="flexbox row">
          <TellentsList users={users} />
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
};

export default JobBoxes;
