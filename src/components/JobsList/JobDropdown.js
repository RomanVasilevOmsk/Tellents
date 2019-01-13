import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { isValue, toCutText } from '../../utils';

class JobDropdown extends Component {
  render() {
    const { ev, imageUrl, full_name, onCloseDropDown, rate, total_jobs, skill_test_send } = this.props;

    return (
      <Fragment>
        <div className="caret-block">
          <span className="caret-top" />
        </div>
        <div className={`panel panel-default job-box-details job-box-details-${ev ? 'right' : 'left'}`}>
          <button className="btn btn-bg-transparent close-btn icon-btn">
            <span className="glyphicon glyphicon-remove" onClick={onCloseDropDown} />
          </button>
          <div className="flexbox justify-space-between">
            <div className="about-block-wrapper">
              <div className="photo-block">
                <div className="flexbox justify-space-between">
                  <div className="award">
                    <span className="icon icon-badge-solid" />
                  </div>
                  <div
                    className="job-box-photo bg-cover circul-shape"
                    style={imageUrl && { backgroundImage: `url(${imageUrl})` }}
                  />
                  <div className="job-box-rate">
                    <span className="icon icon-star-full" />
                    <span className="rate-result">{isValue(rate)}</span>
                  </div>
                </div>
                <div className="job-box-title">
                  <div className="job-box-name blue-color">{full_name || 'User'}</div>
                </div>
              </div>

              <div className="info-block">
                <div className="title">$0.00 Total Spent</div>
              </div>
              <div className="info-block">
                <div className="title">
                  {skill_test_send} Skill tests / {total_jobs} jobs
                </div>
              </div>
              <div className="info-block">
                <div className="title">Languages</div>
                <div className="text">
                  English: <span>fluent</span>; Russian: <span>native</span>
                </div>
              </div>
              <div className="info-block">
                <div className="title">Place of Work</div>
                <div className="text">Online</div>
              </div>
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard" />
                    <span className="btn-text">Send a bid</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output" />
                    <span className="btn-text">More Info</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-comment" />
                    <span className="btn-text">Message</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="job-details-right">
              <div className="job-details-right-header flexbox">
                <div className="likes flexbox">
                  <span className="icon icon-shape" />
                  <ul className="likes-list list-unstyled">
                    <li className="like-item like-item--1 bg-cover circul-shape" />
                    <li className="like-item like-item--2 bg-cover circul-shape" />
                    <li className="like-item like-item--3 bg-cover circul-shape" />
                    <li className="like-item like-item--1 bg-cover circul-shape" />
                  </ul>
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-tag" />
                    <span className="stat-title blue-color">FIXED</span>
                    <span className="stat-info">$200</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-comments" />
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-accounts" />
                    <span className="stat-title blue-color">BUDGET</span>
                    <span className="stat-info">$1000</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-clock-1" />
                    <span className="stat-title blue-color">COMPLETE</span>
                    <span className="stat-info">5</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                <div className="job-details-descr">
                  <div className="job-title">Looking for back end programmer</div>
                  <div className="job-descr-text">
                    <p>
                      Experience Level: Expert Description of requirements/features: Looking for experts at coding in
                      Wordpress for Mobile use.
                    </p>
                    <p>
                      Must be excellent at design/frontend/backend programming in the popular programming languages. You
                      will combine elements from our current with a modified theme site on the Wordpress platform.
                    </p>
                    <p>The new site will be responsive/mobile.</p>
                    <p>
                      The new site should load quickly and be user friendly on Mac, PC, Android phone/tablet, Apple
                      phone/tablet and Windows phone/tablet, Chrome, IE, Windows, Opera and Firefox browsers. Once these
                      items are complete, if things go well we will hire your company as a site administrator on an
                      hourly basis (performing changes when required). Your company should have excellent and excellent
                      rating and feedback. You should be able to quickly complete assignments. Please submit your
                      website portfolio (links of sites you have created).
                    </p>
                    <p>
                      Make sure all links you submit are working links (not dead links). IMPORTANT: Please DO NOT submit
                      websites you have not created. This will disqualify you. Please be prepared to show us proof of
                      the work you have performed on all websites you have created.
                    </p>
                  </div>
                </div>
              </div>
              <div className="other-details">
                <div className="panel flexbox justify-space-between panel-blue">
                  <div className="other-title">Math Home Tutoring</div>
                  <span className="btn btn-blue-border btn-bold">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

JobDropdown.propTypes = {
  ev: PropTypes.bool,
  rate: PropTypes.number,
  skill_test_send: PropTypes.number,
  total_jobs: PropTypes.number,
  imageUrl: PropTypes.string,
  full_name: PropTypes.string,
  onCloseDropDown: PropTypes.func,
};

export default JobDropdown;
