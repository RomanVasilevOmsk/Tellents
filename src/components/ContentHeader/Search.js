import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="col-xs-10">
        <div className="search-form">
          <form className="my-search-form" role="search">
            <input type="text" className="form-control" placeholder="Search for ..." />
            <div className="search-filter radio-block clearfix">
              <div className="radio">
                <input type="radio" name="home-page-filter" id="jobs-filter-1" value="jobs-filter" defaultChecked />
                <label htmlFor="jobs-filter-1">
                  <span className="radio-text mobile-hide">Jobs</span>
                  <span className="radio-text mobile-show">J</span>
                </label>
              </div>
              <div className="radio">
                <input type="radio" name="home-page-filter" id="talents-filter-1" value="talents-filter" />
                <label htmlFor="talents-filter-1">
                  <span className="radio-text mobile-hide">Talents</span>
                  <span className="radio-text mobile-show">T</span>
                </label>
              </div>
            </div>
            <a href="" className="btn-search">
              <i className="icon icon-loupe" />
            </a>
          </form>
        </div>
        <div className="job-post-status flexbox justify-space-between">
          <div>
            <span className="status-text">
              <em>Job was posted successfully</em>
            </span>
            <a href="#">Preview</a>
            <a href="#">Go to My Jobs</a>
          </div>
          <button className="btn btn-bg-transparent close-btn icon-btn">
            <span className="glyphicon glyphicon-remove" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
