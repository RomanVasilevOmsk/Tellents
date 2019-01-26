import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import moment from 'moment';
import { isValue, toCutText } from '../../utils';
import { Link } from 'react-router-dom';

class TelelntsDropDown extends Component {
  render() {
    const {
      ev,
      onCloseDropDown,
      total_jobs,
      total_hours,
      last_seen_at,
      saved_count,
      full_name,
      image,
      promotions,
    } = this.props;

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
                <div
                  className="job-box-photo bg-cover circul-shape"
                  style={image && { backgroundImage: `url(${image})` }}
                />
                <div className="job-box-title">
                  <div className="job-box-name blue-color">{full_name}</div>
                </div>
              </div>
              <div className="info-block">
                <div className="title">Available</div>
              </div>
              <div className="info-block">
                <div className="text">
                  {total_hours} hrs / {total_jobs} jobs
                </div>
              </div>
              <div className="info-block">
                <div className="title">Languages</div>
              </div>
              <div className="info-block" />
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard" />
                    <span className="btn-text">Hire</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-jobs" />
                    <span className="btn-text">Portfolio</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output" />
                    <span className="btn-text">View Page</span>
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
                    <span>No recommendation yet</span>
                  </ul>
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-comments" />
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-calendar2" />
                    <span className="stat-title blue-color">LAST ACTIVE</span>
                    <span className="stat-info">{moment(last_seen_at).fromNow()}</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-saved" />
                    <span className="stat-title blue-color">SAVED</span>
                    <span className="stat-info">{saved_count}</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body job-details-feedback-scroll">
                <div className="feedback-item flexbox">No feedback yet</div>
              </div>
              <div className="other-details">
                {promotions && promotions.length !== 0 ? (
                  promotions.map(item => (
                    <div key={item.id} className="panel flexbox justify-space-between panel-blue">
                      <div>
                        <div className="other-title">{item.title}</div>
                        <div className="card-promotion-description">{item.description}</div>
                      </div>
                      <span className="btn btn-blue-border btn-bold">Free</span>
                    </div>
                  ))
                ) : (
                  <div className="panel flexbox justify-space-between panel-blue">
                    <div className="card-promotion-description">User has not promoted himself yet</div>
                    <span className="btn btn-blue-border btn-bold">Free</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

TelelntsDropDown.propTypes = {
  ev: PropTypes.bool,
  id: PropTypes.number,
  total_hours: PropTypes.number,
  total_jobs: PropTypes.number,
  onCloseDropDown: PropTypes.func,
  last_seen_at: PropTypes.string,
  saved_count: PropTypes.number,
  full_name: PropTypes.string,
  image: PropTypes.string,
  promotions: PropTypes.array,
};

export default TelelntsDropDown;
