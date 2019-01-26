import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TelelntsDropDown from './TelelntsDropDown';
import { isValue } from '../../utils';

class TellentsListItem extends Component {
  render() {
    const {
      isDropDownOpened,
      onOpenDropDown,
      onCloseDropDown,
      ev,
      item: {
        id,
        full_name,
        image,
        profession,
        skill_tags,
        promotions,
        total_rate,
        country,
        total_jobs,
        price,
        last_seen_at,
        saved_count,
        total_hours,
      },
    } = this.props;
    const promotionsLastTitle = promotions && promotions[promotions.length - 1];
    return (
      <div className="job-box-block">
        <div className="panel panel-default job-box awarded" onClick={() => onOpenDropDown(id)}>
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-photo-block">
              <div
                className="job-box-photo bg-cover circul-shape"
                style={image.url && { backgroundImage: `url(${image.url})` }}
              >
                <i className="award">
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
                </i>
              </div>
            </div>
            <div className="job-box-title">
              <div className="job-box-name blue-color">{full_name}</div>
              <div className="job-box-prof">{profession && profession.title}</div>
            </div>
            <div className="job-box-rate">
              <span className="icon icon-star-full" />
              <span className="rate-result">{isValue(total_rate)}</span>
            </div>
          </div>
          <div className="job-box-body flexbox">
            <div className="job-box-tips">
              <div className="tip">
                <span className="icon icon-award" />
                <span className="text">95%</span>
              </div>
              <div className="tip">
                <span className="icon icon-jobs" />
                <span className="text">h/2 </span>
              </div>
              <div className="tip">
                <span className="icon icon-location" />
                <span className="text">{isValue(country)}</span>
              </div>
              <div className="tip">
                <span className="icon icon-clock-1" />
                <span className="text">{isValue()}</span>
              </div>
              <div className="tip">
                <span className="icon icon-wallet" />
                <span className="text">$ {isValue(price)}</span>
              </div>
            </div>
            <div className="job-box-deskr">
              <div className="text">{profession ? profession.description : 'No Introduction set yet'}</div>
              <div className="skill-tags-block clearfix">
                {skill_tags.map(item => (
                  <div key={item.id} className="skill-tag">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between">
            {promotionsLastTitle ? (
              <div>
                <div className="additional-info blue-color">{promotionsLastTitle.title}</div>
                <div className="card-promotion-description">{promotionsLastTitle.description}</div>
              </div>
            ) : (
              <div className="additional-info blue-color">The user has not promoted himself yet</div>
            )}
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        {isDropDownOpened && (
          <TelelntsDropDown
            id={id}
            onCloseDropDown={onCloseDropDown}
            ev={ev}
            total_jobs={total_jobs}
            saved_count={saved_count}
            total_hours={total_hours}
            last_seen_at={last_seen_at}
            image={image.url}
            full_name={full_name}
            promotions={promotions}
          />
        )}
      </div>
    );
  }
}

TellentsListItem.propTypes = {
  item: PropTypes.object,
  isDropDownOpened: PropTypes.bool,
  onOpenDropDown: PropTypes.func,
  onCloseDropDown: PropTypes.func,
  ev: PropTypes.bool,
};

export default TellentsListItem;
