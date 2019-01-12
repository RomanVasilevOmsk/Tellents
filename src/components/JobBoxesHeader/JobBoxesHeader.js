import React from 'react';
import SideBarToogler from '../SideBarToogler';
import JobBoxesPanel from '../JobBoxesPanel';
import PropTypes from 'prop-types';

export const JobBoxesHeader = ({ jobTalentsToogler, onChangeJobTalentsToogler, onToogleJobTalentsToogler, result }) => (
  <div className="row job-boxes-header flexbox">
    <SideBarToogler
      jobTalentsToogler={jobTalentsToogler}
      onChangeJobTalentsToogler={onChangeJobTalentsToogler}
      onToogleJobTalentsToogler={onToogleJobTalentsToogler}
    />
    <JobBoxesPanel result={result} />
  </div>
);

JobBoxesHeader.propTypes = {
  jobTalentsToogler: PropTypes.string.isRequired,
  onChangeJobTalentsToogler: PropTypes.func.isRequired,
  onToogleJobTalentsToogler: PropTypes.func.isRequired,
  result: PropTypes.number,
};

export default JobBoxesHeader;
