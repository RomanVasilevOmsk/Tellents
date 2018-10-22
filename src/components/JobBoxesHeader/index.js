import React from 'react';
import SideBar from './Sidebar';
import JobBoxesPanel from './JobBoxesPanel';

class JobBoxesHeader extends React.Component {
  render() {
    return (
      <div className="row job-boxes-header flexbox">
        <SideBar />
        <JobBoxesPanel />
      </div>
    );
  }
}

export default JobBoxesHeader;
