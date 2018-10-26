import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogoLanding from '../../assets/images/landing/tallents.png';

class LandingHeader extends Component {
  render() {
    const { openModalSignUp, openModalSignIn } = this.props;
    return (
      <header className="landing-header">
        <div className="header-top bg-cover">
          <div className="header-nav">
            <div className="wrapper">
              <nav className="landing-nav flexbox justify-space-between">
                <div className="logo">
                  <a className="logo-link" href="index.html">
                    <img src={LogoLanding} height="39" width="auto" alt="logo" />
                  </a>
                </div>
                <div type="button" className="humburger-icon">
                  <button type="button" className="btn btn-bg-transparent">
                    <span className="icon icon-menu" />
                  </button>
                </div>
                <div className="nav-mobile flexbox justify-space-between">
                  <div className="nav-tablet flexbox justify-space-center">
                    <div className="nav-list flexbox justify-space-between">
                      <div className="nav-list-item flexbox">
                        <a data-toggle="modal" data-target="#modal" className="item-text">
                          How It Works
                        </a>
                      </div>
                      <div className="nav-list-item flexbox">
                        <a href="#tallents-section" className="item-text">
                          Browse Tallents
                        </a>
                      </div>
                      <div className="nav-list-item flexbox">
                        <a href="#categories-section" className="item-text">
                          Tallent Categories
                        </a>
                      </div>
                      <div className="nav-list-item flexbox">
                        <a href="#landing-footer" className="item-text">
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="nav-btns flexbox justify-space-between">
                    <button className="register-btn btn btn-bg-transparent btn-with-icon" onClick={openModalSignUp}>
                      <span className="button-content">
                        <span className="icon icon-plus-button blue-color" />
                        Register
                      </span>
                    </button>
                    <button className="login-btn btn btn-bg-transparent btn-with-icon" onClick={openModalSignIn}>
                      <span className="button-content">
                        <span className="icon icon-user2 blue-color" />
                        Login
                      </span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="header-body">
            <div className="wrapper flexbox">
              <div className="header-info-block">
                <div className="header-title">
                  <h2>We work for FREE.</h2>
                  <h2>It pays Well</h2>
                </div>
                <div className="search-form">
                  <form className="my-search-form" role="search">
                    <input type="text" className="form-control" placeholder="Look for a tallent.." />
                    <div className="search-filter radio-block">
                      <div className="radio checked">
                        <input
                          type="radio"
                          name="profile-page-filter"
                          id="jobs-filter"
                          value="jobs-filter"
                          defaultChecked
                        />
                        <label htmlFor="jobs-filter">
                          <span className="icon icon-next-arrow" />
                          <span className="radio-text">Jobs</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter" />
                        <label htmlFor="talents-filter">
                          <span className="icon icon-next-arrow" />
                          <span className="radio-text">Talents</span>
                        </label>
                      </div>
                    </div>
                    <a href="" type="submit" className="btn-search">
                      <i className="icon icon-loupe" />
                    </a>
                  </form>
                </div>
              </div>
              <div className="header-img bg-contain" />
            </div>
          </div>
        </div>
        <div className="header-footer">
          <div className="wrapper sign-up-block">
            <div className="sign-up-block-title">
              <h2>Start now!</h2>
            </div>
            <div className="soc-sign-up">
              <span className="text">Sign Up with</span>
              <button className="btn circul-shape soc-btn soc-btn--f">
                <span className="icon icon-facebook" />
              </button>
              <button className="btn circul-shape soc-btn soc-btn--g">
                <span className="icon icon-google-plus-logo" />
              </button>
            </div>
            <div className="or-block">
              <hr />
              <span className="text">or</span>
              <hr />
            </div>
            <form className="flexbox flex-wrap justify-space-center sign-up-form">
              <input className="form-control" placeholder="First Name" />
              <input className="form-control" placeholder="Last Name" />
              <input className="form-control" placeholder="Email" />
              <input className="form-control" placeholder="Password" />
              <button className="btn btn-blue btn-with-icon">
                <span className="button-content">
                  <span className="icon icon-right-arrow" />
                  START NOW
                </span>
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

LandingHeader.propTypes = {
  openModalSignIn: PropTypes.func,
  openModalSignUp: PropTypes.func,
};

export default LandingHeader;
