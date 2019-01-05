import React from 'react';
import ProfileNavigation from '../ProfileNavigation';
import PropTypes from 'prop-types';

export const LayoutProfile = ({ children }) => (
  <div className="panel panel-default my-main-panel">
    <div className="panel-body">
      <div className="flexbox">
        <div className="right-col">
          <ProfileNavigation />
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
