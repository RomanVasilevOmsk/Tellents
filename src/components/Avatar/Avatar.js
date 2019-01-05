import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {
  render() {
    const { url } = this.props.user.image;
    console.log('img', this.props);
    return (
      <div className="user-photo" style={url ? { backgroundImage: `url(${url})` } : ''}>
        <i className="notif" />
      </div>
    );
  }
}

Avatar.propTypes = {
  user: PropTypes.object,
};

export default Avatar;
