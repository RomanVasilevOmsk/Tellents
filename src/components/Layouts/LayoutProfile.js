import React from 'react';
import Navigation from '../Profile/Navigation';
import PropTypes from 'prop-types';

const LayoutProfile = ({ children }) => (
  <div className="panel panel-default my-main-panel">
    <div className="panel-body">
      <div className="flexbox">
        <div className="right-col">
          <Navigation />
        </div>
        <div className="left-col">{children}</div>
      </div>
    </div>
  </div>
);

LayoutProfile.propTypes = {
  children: PropTypes.node,
};

export default LayoutProfile;
