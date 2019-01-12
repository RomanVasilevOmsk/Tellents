import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import JobsListItem from './JobsListItem';
import uuid from 'uuid/v4';
import EmptyJobs from '../../assets/images/jobs@2x.png';

class JobsList extends Component {
  state = {
    isDropDownOpened: null,
  };

  onOpenDropDown = id => {
    this.setState({ isDropDownOpened: id });
  };

  onCloseDropDown = () => {
    this.setState({ isDropDownOpened: null });
  };

  render() {
    const { isDropDownOpened } = this.state;
    const { jobs, handleLoadMoreJobs } = this.props;
    return (
      <div className="col-xs-12">
        {jobs ? (
          <Fragment>
            <div className="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">
              {jobs.map((item, index) => {
                const ev = index % 2;
                const itemId = item.id;
                return (
                  <JobsListItem
                    key={uuid()}
                    index={index}
                    item={item}
                    ev={ev !== 0}
                    isDropDownOpened={itemId === isDropDownOpened}
                    onOpenDropDown={this.onOpenDropDown}
                    onCloseDropDown={this.onCloseDropDown}
                  />
                );
              })}
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
  }
}

JobsList.propTypes = {
  jobs: PropTypes.array,
  handleLoadMoreJobs: PropTypes.func,
};

export default JobsList;
