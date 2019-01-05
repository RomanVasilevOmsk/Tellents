import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({ imgUrl }) => (
  <div className="user-photo" style={imgUrl ? { backgroundImage: `url(${imgUrl})` } : ''}>
    <i className="notif" />
  </div>
);

Avatar.propTypes = {
  imgUrl: PropTypes.string,
};

export default Avatar;
