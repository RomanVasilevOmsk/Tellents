import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <div className="col-xs-2 left-sidebar">
        <div className="panel panel-default panel-gray job-boxes-filter">
          <div className="search-filter radio-block flexbox justify-space-center">
            <div className="radio">
              <input type="radio" name="job-boxes-filter" id="jobs-filter-2" value="jobs-filter" defaultChecked />
              <label htmlFor="jobs-filter-2">
                <span className="radio-text">Jobs</span>
              </label>
            </div>
            <button type="button" className="btn radio-switcher clearfix">
              <div className="circul-shape">
                <span className="icon icon-check-mark" />
              </div>
            </button>
            <div className="radio">
              <input type="radio" name="job-boxes-filter" id="talents-filter-2" value="talents-filter" />
              <label htmlFor="talents-filter-2">
                <span className="radio-text">Talents</span>
              </label>
            </div>
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
