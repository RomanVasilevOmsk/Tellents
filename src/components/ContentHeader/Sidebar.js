import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <div className="col-xs-2 left-sidebar">
        <div className="hello-header">
          <div className="blue-color hello-header-name">
            <span className="user-name">Hi Philip</span>,
          </div>
          <div className="hello-header-text">What are you looking for toady?</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
