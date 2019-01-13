import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import uuid from 'uuid/v4';
import JobDropDown from './JobDropDown';
import { isValue, toCutText } from '../../utils';

class JobsListItem extends Component {
  getHeader = (created, title, imageUrl, name, rate, place_to_work) => {
    const dayAgo = moment(created).fromNow();
    return (
      <div className="job-box-header flexbox justify-space-between">
        <div className="job-box-title">
          <div className="post-date">{dayAgo}</div>
          <div className="job-title">{toCutText(title, 34)}</div>
        </div>
        <div className="panel panel-default">
          <div className="flexbox justify-space-between">
            <div className="job-box-photo-block">
              <div
                className="job-box-photo bg-cover circul-shape"
                style={imageUrl && { backgroundImage: `url(${imageUrl})` }}
              >
                {place_to_work && <i className="notif" />}
              </div>
            </div>
            <div className="award">
              <span className="icon icon-badge-flat">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
                <span className="path9" />
                <span className="path10" />
              </span>
            </div>
            <div className="job-box-rate">
              <span className="icon icon-star-full" />
              <span className="rate-result">{isValue(rate)}</span>
            </div>
          </div>
          <div className="blue-color">{name}</div>
        </div>
      </div>
    );
  };

  getBody = (description, level, time_type, skills, period, periodType, commitment, country) => {
    return (
      <div className="job-box-body">
        <div className="job-box-tips flexbox justify-space-between">
          <div className="tip">
            <span className="icon icon-location" />
            <span className="text">{isValue(country)}</span>
          </div>
          <div className="tip">
            <span className="icon icon-clock-1" />
            <span className="text">{this.commitmentValue(commitment)}</span>
          </div>
          <div className="tip">
            <span className="icon icon-award" />
            <span className="text">{isValue(level)}</span>
          </div>
          <div className="tip">
            <span className="icon icon-timer" />
            <span className="text">{isValue(period + periodType)}</span>
          </div>

          <div className="tip">
            <span className="icon icon-wallet" />
            <span className="text">{isValue(time_type)}</span>
          </div>
        </div>
        <div className="job-box-deskr">
          <div className="text">{toCutText(isValue(description), 107)}</div>
          <div className="skill-tags-block clearfix">
            {skills.map(item => (
              <div key={uuid()} className="skill-tag">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  getFooter = (title, description) => {
    return (
      <div className="job-box-footer flexbox justify-space-between">
        <div className="job-box-footer__inner">
          <div className="additional-info blue-color">{title || 'There is no skill test'}</div>
          <div className="card-promotion-description one-row-angular-truncate">{description}</div>
        </div>
        <button className="btn btn-blue btn-skill-test btn-bold">Free</button>
      </div>
    );
  };

  commitmentValue = commitment => {
    if (commitment === 'per_week_up_to_30') {
      return '< 30h';
    }
    if (commitment === 'per_week_more_than_30') {
      return '> 30h';
    }
    if (commitment === 'per_week_10') {
      return '10h';
    }
    if (commitment === 'decide_later') {
      return isValue();
    } else {
      return isValue();
    }
  };

  render() {
    const {
      isDropDownOpened,
      onOpenDropDown,
      onCloseDropDown,
      ev,
      item: {
        title,
        description,
        promotion_description,
        promotion_title,
        created_at,
        time_type,
        period,
        period_type,
        level,
        id,
        skill_tags,
        commitment,
        user: {
          full_name,
          total_rate,
          total_jobs,
          country,
          place_to_work,
          languages,
          skill_test_send,
          image: { url },
        },
      },
    } = this.props;
    const imageUrl = url;
    const levelUcFirst = level && (level[0].toUpperCase() + level.slice(1)).slice(0, 3);
    const timeType = time_type && (time_type[0].toUpperCase() + time_type.slice(1)).replace(/_+/g, ' ');
    const periodType = period_type && period_type[0].toUpperCase() + period_type.slice(1).slice(0, 0);

    return (
      <div className="job-box-block">
        <div className="panel panel-default job-box" onClick={() => onOpenDropDown(id)}>
          {this.getHeader(created_at, title, imageUrl, full_name, total_rate, place_to_work)}
          {this.getBody(description, levelUcFirst, timeType, skill_tags, period, periodType, commitment, country)}
          {this.getFooter(promotion_title, promotion_description)}
        </div>

        {isDropDownOpened && (
          <JobDropDown
            id={id}
            onCloseDropDown={onCloseDropDown}
            ev={ev}
            imageUrl={imageUrl}
            full_name={full_name}
            rate={total_rate}
            total_jobs={total_jobs}
            place_to_work={place_to_work}
            languages={languages}
            skill_test_send={skill_test_send}
          />
        )}
      </div>
    );
  }
}

JobsListItem.propTypes = {
  item: PropTypes.object,
  ev: PropTypes.bool,
  isDropDownOpened: PropTypes.bool,
  onCloseDropDown: PropTypes.func,
  onOpenDropDown: PropTypes.func,
};

export default JobsListItem;
