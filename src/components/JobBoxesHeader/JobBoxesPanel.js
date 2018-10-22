import React from 'react';

class JobBoxesPanel extends React.Component {
  render() {
    return (
      <div className="col-xs-10">
        <div className="panel panel-default panel-gray job-boxes-nav">
          <nav className="flexbox justify-space-between">
            <div className="filter-nav">
              <span className="filter-list-title">Jobs for me</span>
              <ul className="filter-list list-unstyled">
                <li className="blue-color">UI design</li>
                <li className="blue-color">CSS/HTML</li>
                <li className="blue-color">
                  <span className="icon icon-plus-button" />
                </li>
              </ul>
            </div>
            <div className="sort-nav">
              <span className="sort-nav-title">Sort By</span>
              <button type="button" className="btn">
                <div className="my-select-box">
                  <span className="my-select-result">
                    <span className="text">Relevance</span>
                    <span className="icon icon-down-arrow" />
                  </span>
                  <div className="my-select-options">
                    <div className="caret-block">
                      <span className="caret-top" />
                    </div>
                    <div className="radio-block">
                      <div className="radio">
                        <input
                          type="radio"
                          name="jobs-sort-option"
                          id="jobs-sort-option-1"
                          value="jobs-sort-option-1"
                          defaultChecked
                        />
                        <label htmlFor="jobs-sort-option-1">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Relevance</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          name="jobs-sort-option"
                          id="jobs-sort-option-2"
                          value="jobs-sort-option-2"
                        />
                        <label htmlFor="jobs-sort-option-2">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Date</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          name="jobs-sort-option"
                          id="jobs-sort-option-3"
                          value="jobs-sort-option-3"
                        />
                        <label htmlFor="jobs-sort-option-3">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Rate</span>
                        </label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          name="jobs-sort-option"
                          id="jobs-sort-option-4"
                          value="jobs-sort-option-4"
                        />
                        <label htmlFor="jobs-sort-option-4">
                          <span className="check-mark icon icon-check-mark" />
                          <span className="radio-text">Alfabet</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <span className="sort-result">
                Result:
                <span className="sort-result-numb">25</span>
              </span>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default JobBoxesPanel;
