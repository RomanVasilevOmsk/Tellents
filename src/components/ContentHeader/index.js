import React from 'react';
import SideBar from './Sidebar';
import Search from './Search';

class ContentHeader extends React.Component {
  render() {
    return (
      <div className="row content-header flexbox">
        <SideBar />
        <Search />
      </div>
    );
  }
}

export default ContentHeader;
