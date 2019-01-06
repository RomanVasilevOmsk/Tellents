import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import PropTypes from 'prop-types';

class SideBarToogler extends Component {
  handleChangeToogler = value => {
    this.props.onChangeJobTalentsToogler(value);
  };
  handleToogleRadio = () => {
    this.props.onToogleJobTalentsToogler();
  };
  render() {
    const { jobTalentsToogler } = this.props;
    return (
      <div className="col-xs-2 left-sidebar">
        <div className="panel panel-default panel-gray job-boxes-filter">
          <div className="search-filter radio-block flexbox justify-space-center">
            <RadioGroup name="searchRadio" selectedValue={jobTalentsToogler} onChange={this.handleChangeToogler}>
              <div className="radio">
                <Radio value="jobs" checked={jobTalentsToogler === 'jobs'} id="jobs-filter-2" />
                <label htmlFor="jobs-filter-2">
                  <span className="radio-text">Jobs</span>
                </label>
              </div>
              <button
                type="button"
                onClick={this.handleToogleRadio}
                className={`btn radio-switcher clearfix ${jobTalentsToogler === 'jobs' ? 'left' : 'right'}`}
              >
                <div className="circul-shape">
                  <span className="icon icon-check-mark" />
                </div>
              </button>
              <div className="radio">
                <Radio value="talents" checked={jobTalentsToogler === 'talents'} id="talents-filter-2" />
                <label htmlFor="talents-filter-2">
                  <span className="radio-text">Talents</span>
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <button className="btn filter-btn panel-gray">
          <div className="flexbox justify-space-between">
            <span>Advanced Filters</span>
            <span className="icon icon-next-arrow" />
          </div>
        </button>
      </div>
    );
  }
}

SideBarToogler.propTypes = {
  jobTalentsToogler: PropTypes.string.isRequired,
  onChangeJobTalentsToogler: PropTypes.func.isRequired,
  onToogleJobTalentsToogler: PropTypes.func.isRequired,
};

export default SideBarToogler;
