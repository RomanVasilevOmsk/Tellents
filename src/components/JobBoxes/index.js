import React from 'react';
import PropTypes from 'prop-types';
import LeftSideBar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import TellentsItem from './TellentsItem';
import JobItem from './JobItem';
import EmptyJobs from '../../assets/images/jobs@2x.png';
import EmptyTellents from '../../assets/images/tallents@2x.png';
class JobBoxes extends React.Component {
  render() {
    const { dataArrow, jobTalentsToogler } = this.props;
    return (
      <div className="row main-content flexbox">
        <LeftSideBar />
        {jobTalentsToogler === 'jobs' ? (
          <div className="col-xs-10 container-fluid job-boxes job-boxes--jobs">
            <div className="flexbox row">
              <div className="col-xs-12">
                {dataArrow ? (
                  <React.Fragment>
                    <div className="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">
                      <JobItem />
                      <JobItem />
                      <JobItem />
                      <JobItem />
                      <JobItem />
                      <JobItem />
                    </div>
                    <div className="job-boxes-footer">
                      <button className="btn btn-bg-transparent blue-color btn-bold">Load more</button>
                    </div>
                  </React.Fragment>
                ) : (
                  <div className="noresults noresults--jobs">
                    <img src={EmptyJobs} alt="Empty Jobs" />
                    <h2 className="blue-color">We didn’t find any job</h2>
                    <p>Please try modifying your search to get more results.</p>
                  </div>
                )}
              </div>
              <RightSidebar />
            </div>
          </div>
        ) : (
          <div className="col-xs-10 container-fluid job-boxes job-boxes--tallents">
            <div className="flexbox row">
              <div className="col-xs-12">
                {dataArrow ? (
                  <React.Fragment>
                    <div className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
                      <TellentsItem />
                      <TellentsItem />
                      <TellentsItem />
                      <TellentsItem />
                    </div>
                    <div className="job-boxes-footer">
                      <button className="btn btn-bg-transparent blue-color btn-bold">Load more</button>
                    </div>
                  </React.Fragment>
                ) : (
                  <div className="noresults noresults--tallents">
                    <img src={EmptyTellents} alt="Empty Tellents" />
                    <h2 className="blue-color">We didn’t find anybody</h2>
                    <p>Please try modifying your search to get more results.</p>
                  </div>
                )}
              </div>
              <RightSidebar />
            </div>
          </div>
        )}
      </div>
    );
  }
}

JobBoxes.propTypes = {
  dataArrow: PropTypes.bool.isRequired,
  jobTalentsToogler: PropTypes.string.isRequired,
};

export default JobBoxes;
