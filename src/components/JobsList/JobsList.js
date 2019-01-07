import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import JobsListItem from './JobsListItem';
import uuid from 'uuid/v4';
import EmptyJobs from '../../assets/images/jobs@2x.png';

export const JobsList = ({ jobs, handleLoadMoreJobs }) => (
  <div className="col-xs-12">
    {jobs ? (
      <Fragment>
        <div className="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">
          {jobs.map(item => (
            <JobsListItem key={uuid()} item={item} />
          ))}
        </div>
        <div className="job-boxes-footer">
          <button className="btn btn-bg-transparent blue-color btn-bold" onClick={handleLoadMoreJobs}>
            Load more
          </button>
        </div>
      </Fragment>
    ) : (
      <div className="noresults noresults--jobs">
        <img src={EmptyJobs} alt="Empty Jobs" />
        <h2 className="blue-color">We didn’t find any job</h2>
        <p>Please try modifying your search to get more results.</p>
      </div>
    )}
  </div>
);

JobsList.propTypes = {
  jobs: PropTypes.array,
  handleLoadMoreJobs: PropTypes.func,
};

export default JobsList;
