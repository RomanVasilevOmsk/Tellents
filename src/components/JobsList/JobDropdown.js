import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { isValue, toCutText } from '../../utils';
import { Link } from 'react-router-dom';

class JobDropDown extends Component {
  getLevel = level => {
    if (level === '0') {
      return <span>Fluent</span>;
    }
    if (level === '1') {
      return <span>Conversation, Read & Write</span>;
    }
    if (level === '2') {
      return <span>Only Read & Write</span>;
    }
    if (level === '3') {
      return <span>Don’t know at all</span>;
    } else {
      return '';
    }
  };

  metalanguages = array => {
    return array.map(item => {
      const { level, name } = item;
      const levelStr = level !== null && level.toString();
      return (
        <Fragment key={uuid()}>
          {name}
          {level !== null ? ': ' : ''}
          {this.getLevel(levelStr)};
          <br />
        </Fragment>
      );
    });
  };

  render() {
    const {
      id,
      ev,
      imageUrl,
      title,
      description,
      full_name,
      onCloseDropDown,
      rate,
      total_jobs,
      skill_test_send,
      place_to_work,
      languages,
      promotion_title,
      promotion_description,
      period,
      periodType,
      payment,
      hourly_price,
      price,
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
                <div className="text">{this.metalanguages(languages)}</div>
              </div>
              <div className="info-block">
                <div className="title">Place of Work</div>
                <div className="text">{place_to_work || 'offline'}</div>
              </div>
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard" />
                    <span className="btn-text">Send a bid</span>
                  </div>
                </button>
                <Link
                  to={`/dashboard/${id}`}
                  className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon"
                  type="button"
                >
                  <div className="button-content">
                    <span className="icon icon-output" />
                    <span className="btn-text">More Info</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="job-details-right job-details-talents-position">
              <div className="job-details-right-header flexbox">
                <div className="likes flexbox">
                  <span className="icon icon-shape" />
                  {
                    <ul className="likes-list list-unstyled">
                      <span>No recommendation yet</span>
                    </ul>
                  }
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-tag" />
                    <span className="stat-title blue-color">{payment}</span>
                    <span className="stat-info">{`${hourly_price ? '$' + hourly_price : ''}`}</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-comments" />
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-accounts" />
                    <span className="stat-title blue-color">BUDGET</span>
                    <span className="stat-info">{`${price ? '$' + price : ''} `}</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-clock-1" />
                    <span className="stat-title blue-color">COMPLETE</span>
                    <span className="stat-info">{isValue(period + periodType)}</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                <div className="job-details-descr">
                  <div className="job-title">{title}</div>
                  <div className="job-descr-text">{description}</div>
                </div>
              </div>
              <div className="other-details">
                <div className="panel flexbox justify-space-between panel-blue">
                  <div>
                    <div className="other-title">{promotion_title}</div>
                    <div className="other-description">{promotion_description}</div>
                  </div>
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

JobDropDown.propTypes = {
  ev: PropTypes.bool,
  id: PropTypes.number,
  place_to_work: PropTypes.string,
  rate: PropTypes.number,
  languages: PropTypes.array,
  periodType: PropTypes.string,
  period: PropTypes.number,
  skill_test_send: PropTypes.number,
  total_jobs: PropTypes.number,
  title: PropTypes.string,
  promotion_title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  full_name: PropTypes.string,
  promotion_description: PropTypes.string,
  onCloseDropDown: PropTypes.func,
  payment: PropTypes.string,
  hourly_price: PropTypes.number,
  price: PropTypes.number,
};

export default JobDropDown;
