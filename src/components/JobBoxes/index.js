import React from 'react';
import SideBar from './Sidebar';
import PropTypes from 'prop-types';

class JobBoxes extends React.Component {
  render() {
    const { dataArrow, jobTalentsToogler } = this.props;
    return (
      <div className="row main-content flexbox">
        <SideBar />
        {jobTalentsToogler === 'jobs' ? (
          <div>
            Jobs
            {dataArrow ? <div>List Jobs</div> : <div>empty jobs</div>}
          </div>
        ) : (
          <div>
            Tellents
            {dataArrow ? <div>List Tellents</div> : <div>empty Tellents</div>}
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
