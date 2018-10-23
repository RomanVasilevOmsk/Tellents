import React from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
class SideBar extends React.Component {
  state = {
    selectedValue: 'jobs',
  };
  handleChange = value => {
    this.setState({ selectedValue: value });
  };
  handleToogleRadio = () => {
    if (this.state.selectedValue === 'jobs') {
      this.setState({ selectedValue: 'talents' });
    }
    if (this.state.selectedValue === 'talents') {
      this.setState({ selectedValue: 'jobs' });
    }
  };
  render() {
    return (
      <div className="col-xs-2 left-sidebar">
        <div className="panel panel-default panel-gray job-boxes-filter">
          <div className="search-filter radio-block flexbox justify-space-center">
            <RadioGroup name="searchRadio" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
              <div className="radio">
                <Radio value="jobs" checked={this.state.selectedFruitName === 'jobs'} id="jobs-filter-2" />
                <label htmlFor="jobs-filter-2">
                  <span className="radio-text">Jobs</span>
                </label>
              </div>
              <button
                type="button"
                onClick={this.handleToogleRadio}
                className={`btn radio-switcher clearfix ${this.state.selectedValue === 'jobs' ? 'left' : 'right'}`}
              >
                <div className="circul-shape">
                  <span className="icon icon-check-mark" />
                </div>
              </button>
              <div className="radio">
                <Radio value="talents" checked={this.state.selectedFruitName === 'talents'} id="talents-filter-2" />
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

export default SideBar;
