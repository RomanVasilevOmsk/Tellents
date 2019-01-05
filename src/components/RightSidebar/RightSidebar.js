import React, { Component } from 'react';

class RightSidebar extends Component {
  render() {
    return (
      <div className="col-xs-3 right-sidebar">
        <div className="panel panel-default progress-boxes">
          <h4 className="blue-color">General Rank: 8.7</h4>

          <div className="progress-box">
            <div className="progress-info blue-color">
              <a href="#" className="progress-title">
                Profile Completion
              </a>
              <span className="progress-perc float-right">50%</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '50%' }}
              />
            </div>
          </div>

          <div className="progress-box">
            <div className="progress-info blue-color">
              <a href="#" className="progress-title">
                Profile Strength
              </a>
              <span className="progress-perc float-right">30%</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '30%' }}
              />
            </div>
          </div>

          <div className="progress-box">
            <div className="progress-info blue-color">
              <a href="#" className="progress-title">
                Responsivity
              </a>
              <span className="progress-perc float-right">60%</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '60%' }}
              />
            </div>
          </div>
        </div>
        <div className="panel panel-default panel-btn">
          <a href="">
            <i className="icon icon-hand" />
            <span> Propose New Lesson </span>
          </a>
        </div>

        <div className="panel panel-default panel-btn">
          <a href="">
            <i className="icon icon-new" />
            <span> Start New Promotion </span>
          </a>
        </div>

        <div className="panel panel-default panel-btn">
          <a href="">
            <i className="icon icon-share" />
            <span> Share Your Project</span>
          </a>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
