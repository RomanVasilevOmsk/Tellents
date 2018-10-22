import React from 'react';
import Logo from '../../assets/images/logo.png';
import BidPhoto from '../../assets/images/bid-photo.png';
import MoneyIcon from '../../assets/images/money-icon.png';
import HornIcon from '../../assets/images/horn-icon.png';
import CaseIconGrey from '../../assets/images/case-icon-grey.png';
import $ from 'jquery';

class Header extends React.Component {
  state = {
    mobileMenuVisible: false,
  };
  onOpenMobileMenu = () => {
    this.setState({ mobileMenuVisible: !this.state.mobileMenuVisible });
  };
  componentDidMount() {
    $(document).ready(function() {
      var dividend = $('.notifications-icon').width();
      var leftIndent = -194 + dividend / 2;
      $('.notifications-dropdown').css('left', leftIndent);
      $('.notifications-icon').click(function() {
        $('.notifications-dropdown').toggleClass('hidden');
      });
    });
  }

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
            <div className="notifications">
              <div className="notifications-icon">
                <div className="notif" />
              </div>

              <div className="notifications-dropdown hidden dropdown">
                <div className="notifications-dropdown__header">Notifications</div>
                <div className="element-list">
                  <div className="element-list__item flexbox align-items-center">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img className="circul-shape" src={BidPhoto} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__item--text">
                        <a href="#" className="element-list__item-link">
                          Tamir Yaacov
                        </a>
                        sent you a message
                      </div>
                      <div className="element-list__item-date">Today, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center element-list__item--active">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img src={MoneyIcon} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__text">
                        You received payment for job
                        <a href="#" className="element-list__item-link">
                          HTML to PSD
                        </a>
                      </div>
                      <div className="element-list__item-date">19 Nov, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center element-list__item--active">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img src={HornIcon} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__text">
                        Your skill test was approved for the job
                        <a href="#" className="element-list__item-link">
                          «PHP, CSS and Joomla Tasks».
                        </a>
                      </div>
                      <div className="element-list__item-date">19 Nov, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img src={CaseIconGrey} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__item--text">
                        Client apply you to a job
                        <a href="#" className="element-list__item-link">
                          «PHP, CSS and Joomla Tasks».
                        </a>
                      </div>
                      <div className="element-list__item-date">Today, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img src={CaseIconGrey} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__item--text">
                        You ended the job
                        <a href="#" className="element-list__item-link">
                          «Landing Page»
                        </a>
                      </div>
                      <div className="element-list__item-date">Today, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img className="circul-shape" src={BidPhoto} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__item--text">
                        <a href="#" className="element-list__item-link">
                          Tamir Yaacov
                        </a>
                        leave a feedback for you for job «Sale page design»
                      </div>
                      <div className="element-list__item-date">Today, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img src={CaseIconGrey} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__item--text">
                        New job could be interesting for you,
                        <a href="#" className="element-list__item-link">
                          «Landing Page»
                        </a>
                      </div>
                      <div className="element-list__item-date">Today, 15:45 pm</div>
                    </div>
                  </div>
                  <div className="element-list__item flexbox align-items-center">
                    <div className="element-list__item-icon circul-shape flexbox justify-space-center align-items-center">
                      <img src={CaseIconGrey} alt="" />
                    </div>
                    <div className="element-list__item-description">
                      <div className="element-list__item--text">
                        You received 3 new bids on your job
                        <a href="#" className="element-list__item-link">
                          «Landing Page»
                        </a>
                      </div>
                      <div className="element-list__item-date">Today, 15:45 pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-photo">
              <i className="notif" />
            </div>
            <div className="user-box-nav dropdown">
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
            </div>
          </div>
        </section>
      </nav>
    );
  }
}

export default Header;
