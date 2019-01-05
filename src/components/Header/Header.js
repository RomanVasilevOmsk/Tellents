import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Notifications from '../Notifications';
import Avatar from '../Avatar';
import MainNavigation from '../MainNavigation';
import FormHeaderSearch from '../Forms/FormHeaderSearch';
import UserBoxDropDown from '../UserBoxDropDown';

export const Header = ({ user, logout, onOpenMobileMenu, isMobileMenuVisible }) => (
  <nav className={`main-top-nav flexbox justify-space-between ${isMobileMenuVisible ? 'menu-open' : ''}`}>
    <Logo />
    <div type="button" className="humburger-icon" onClick={onOpenMobileMenu}>
      <button type="button" className="btn btn-bg-transparent">
        <span className="icon icon-menu" />
      </button>
    </div>
    <section className="nav-mobile flexbox justify-space-between">
      <section className="nav-tablet flexbox justify-space-center">
        <FormHeaderSearch onSubmit={() => {}} />
        <MainNavigation />
      </section>
      <div className="user-box">
        <Notifications />
        <Avatar imgUrl={user.image.url} />
        <UserBoxDropDown logout={logout} user={user} />
      </div>
    </section>
  </nav>
);

Header.propTypes = {
  isMobileMenuVisible: PropTypes.bool,
  onOpenMobileMenu: PropTypes.func,
  logout: PropTypes.func,
  user: PropTypes.object,
};

export default Header;
