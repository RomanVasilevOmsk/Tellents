import React from 'react';
import SideBarToogler from './SideBarToogler';
import JobBoxesPanel from './JobBoxesPanel';
import PropTypes from 'prop-types';
class JobBoxesHeader extends React.Component {
  render() {
    const { jobTalentsToogler, onChangeJobTalentsToogler, onToogleJobTalentsToogler } = this.props;
    return (
      <div className="row job-boxes-header flexbox">
        <SideBarToogler
          jobTalentsToogler={jobTalentsToogler}
          onChangeJobTalentsToogler={onChangeJobTalentsToogler}
          onToogleJobTalentsToogler={onToogleJobTalentsToogler}
        />
        <JobBoxesPanel />
      </div>
    );
  }
}
JobBoxesHeader.propTypes = {
  jobTalentsToogler: PropTypes.string.isRequired,
  onChangeJobTalentsToogler: PropTypes.func.isRequired,
  onToogleJobTalentsToogler: PropTypes.func.isRequired,
};

export default JobBoxesHeader;
