import React, { Component } from 'react';
import SortJobsDropdown from '../SortJobsDropdown';
import PropTypes from 'prop-types';

class JobBoxesPanel extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="col-xs-10">
        <div className="panel panel-default panel-gray job-boxes-nav">
          <nav className="flexbox justify-space-between">
            <div className="filter-nav" />
            <SortJobsDropdown result={result} />
          </nav>
        </div>
      </div>
    );
  }
}

JobBoxesPanel.propTypes = {
  result: PropTypes.number,
};

export default JobBoxesPanel;
