import React from 'react';
import PropTypes from 'prop-types';

class SideBar extends React.Component {
  render() {
    const { first_name } = this.props.user;
    return (
      <div className="col-xs-2 left-sidebar">
        <div className="hello-header">
          <div className="blue-color hello-header-name">
            <span className="user-name">Hi {first_name ? `${first_name}` : 'User'}</span>,
          </div>
          <div className="hello-header-text">What are you looking for toady?</div>
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  user: PropTypes.object,
};

export default SideBar;
