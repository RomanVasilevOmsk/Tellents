import React from 'react';
import PropTypes from 'prop-types';

export const HelloHeader = ({ name }) => (
  <div className="col-xs-2 left-sidebar">
    <div className="hello-header">
      <div className="blue-color hello-header-name">
        <span className="user-name">Hi {name ? `${name}` : 'User'}</span>,
      </div>
      <div className="hello-header-text">What are you looking for toady?</div>
    </div>
  </div>
);

HelloHeader.propTypes = {
  name: PropTypes.string,
};

export default HelloHeader;
