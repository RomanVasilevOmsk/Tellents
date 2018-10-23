import React from 'react';
import dropDown from '../../HOCS/dropDown';
import PropTypes from 'prop-types';

class UserBox extends React.Component {
  render() {
    const { onOpenDropDown, isDropDownOpened } = this.props;
    return (
      <div className="user-box-nav dropdown" onClick={onOpenDropDown}>
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Philip Seamor
          <span className="caret" />
        </a>
        {isDropDownOpened && (
          <ul className="dropdown-menu">
            <li>
              <a href="#" data-toggle="modal" data-target="#sign-up-modal">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" data-toggle="modal" data-target="#massege-dialogs-modal">
                Messages
              </a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li>
              <a href="#">One more separated link</a>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

UserBox.propTypes = {
  onOpenDropDown: PropTypes.func,
  isDropDownOpened: PropTypes.bool,
};

export default dropDown(UserBox);
