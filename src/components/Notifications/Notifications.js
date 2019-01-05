import React, { Component } from 'react';
import dropDown from '../../HOCS/dropDown';
import PropTypes from 'prop-types';
import BidPhoto from '../../assets/images/bid-photo.png';
import MoneyIcon from '../../assets/images/money-icon.png';
import HornIcon from '../../assets/images/horn-icon.png';
import CaseIconGrey from '../../assets/images/case-icon-grey.png';

class Notifications extends Component {
  render() {
    const { onOpenDropDown, isDropDownOpened } = this.props;

    return (
      <div className="notifications" onClick={onOpenDropDown}>
        <div className="notifications-icon">
          <div className="notif" />
        </div>
        {isDropDownOpened && (
          <div className="notifications-dropdown dropdown">
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
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  onOpenDropDown: PropTypes.func,
  isDropDownOpened: PropTypes.bool,
};

export default dropDown(Notifications);
