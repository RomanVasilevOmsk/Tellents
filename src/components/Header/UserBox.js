import React from 'react';
import dropDown from '../../HOCS/dropDown';
import PropTypes from 'prop-types';
import appContainer from '../../containers/AppContainer';

class UserBox extends React.Component {
  render() {
    const { onOpenDropDown, isDropDownOpened, logout, user } = this.props;
    const { first_name, last_name } = user;
    console.log('props', this.props.logout);
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
          {first_name && last_name ? `${first_name} ${last_name}` : ''}
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
            <li onClick={logout}>
              <a href="#">Logout</a>
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
  logout: PropTypes.func,
  user: PropTypes.object,
};

export default appContainer(dropDown(UserBox));
