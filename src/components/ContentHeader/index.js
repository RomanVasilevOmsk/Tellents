import React from 'react';
import SideBar from './Sidebar';
import Search from './Search';
import PropTypes from 'prop-types';

class ContentHeader extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="row content-header flexbox">
        <SideBar user={user} />
        <Search />
      </div>
    );
  }
}

ContentHeader.propTypes = {
  user: PropTypes.object,
};

export default ContentHeader;
