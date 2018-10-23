import React from 'react';
import Logo from '../../assets/images/logo.png';
import Notifications from './Notifications';
import UserBox from './UserBox';
class Header extends React.Component {
  state = {
    mobileMenuVisible: false,
  };
  onOpenMobileMenu = () => {
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible });
  };

  render() {
    return (
      <nav className={`main-top-nav flexbox justify-space-between ${this.state.mobileMenuVisible ? 'menu-open' : ''}`}>
        <div className="logo">
          <a className="logo-link" href="index.html">
            <img src={Logo} height="39" width="auto" alt="logo" />
          </a>
        </div>

        <div type="button" className="humburger-icon" onClick={this.onOpenMobileMenu}>
          <button type="button" className="btn btn-bg-transparent">
            <span className="icon icon-menu" />
          </button>
        </div>
        <section className="nav-mobile flexbox justify-space-between">
          <section className="nav-tablet flexbox justify-space-center">
            <div className="search-form">
              <form className="my-search-form" role="search">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="search-filter radio-block">
                  <div className="radio">
                    <input type="radio" name="optionsRadios" id="option-jobs" value="option1" defaultChecked />
                    <label htmlFor="option-jobs">
                      <span className="radio-text">Jobs</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="optionsRadios" id="option-talents" value="option2" />
                    <label htmlFor="option-talents">
                      <span className="radio-text">Talents</span>
                    </label>
                  </div>
                </div>
                <a href="#" className="btn-search">
                  <i className="icon icon-loupe" />
                </a>
              </form>
            </div>
            <div className="nav-list">
              <ul className="flexbox justify-space-between">
                <li className="active">
                  <a href="#">
                    Teachers <div className="caret" />
                  </a>
                </li>
                <li className="">
                  <a href="profile.html">
                    Profile <div className="caret" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Favorites <div className="caret" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    About <div className="caret" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <div className="user-box">
            <Notifications />
            <div className="user-photo">
              <i className="notif" />
            </div>
            <UserBox />
          </div>
        </section>
      </nav>
    );
  }
}

export default Header;
