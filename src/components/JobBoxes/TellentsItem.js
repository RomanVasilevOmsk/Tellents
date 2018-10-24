import React from 'react';

class TellentsItem extends React.Component {
  render() {
    return (
      <div className="job-box-block">
        <div className="panel panel-default job-box awarded">
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-photo-block">
              <div className="job-box-photo bg-cover circul-shape">
                <i className="notif" />
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
              <div className="job-box-name blue-color">Clifford Love</div>
              <div className="job-box-prof">JUNIOR / UI Designer</div>
            </div>
            <div className="job-box-rate">
              <span className="icon icon-star-full" />
              <span className="rate-result">5.8</span>
            </div>
          </div>
          <div className="job-box-body flexbox justify-space-between">
            <div className="job-box-tips">
              <div className="tip">
                <span className="icon icon-award" />
                <span className="text">95%</span>
              </div>
              <div className="tip">
                <span className="icon icon-jobs" />
                <span className="text">110 h/2 J</span>
              </div>
              <div className="tip">
                <span className="icon icon-location" />
                <span className="text">Aus..</span>
              </div>
              <div className="tip">
                <span className="icon icon-clock-1" />
                <span className="text">&#62; 30h</span>
              </div>
              <div className="tip">
                <span className="icon icon-wallet" />
                <span className="text">24$/h</span>
              </div>
            </div>
            <div className="job-box-deskr">
              <div className="text">
                {`Look, just because I don't be givin' no man a foot massage don"t make it right for Marsellus ...`}
              </div>
              <div className="skill-tags-block clearfix">
                <div className="skill-tag">Math</div>
                <div className="skill-tag">Trigonometry</div>
                <div className="skill-tag">Calculus</div>
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between">
            <div className="additional-info blue-color">Math Home Tutoring</div>
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        <div className="caret-block">
          <span className="caret-top" />
        </div>
        <div className="panel panel-default job-box-details">
          <button className="btn btn-bg-transparent close-btn icon-btn">
            <span className="glyphicon glyphicon-remove" />
          </button>
          <div className="flexbox justify-space-between">
            <div className="about-block-wrapper">
              <div className="photo-block">
                <div className="job-box-photo bg-cover circul-shape" />
                <div className="job-box-title">
                  <div className="job-box-name blue-color">Clifford Love</div>
                  <div className="job-box-prof">JUNIOR / UI Designer</div>
                </div>
              </div>
              <div className="progress-box">
                <div className="progress-info">
                  <span className="progress-perc">90%</span> job success
                </div>
                <a href="#" className="progress-title">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: '90%' }}
                    />
                  </div>
                </a>
              </div>
              <div className="info-block">
                <div className="title">Available</div>
                <div className="text">more then 30 hours/week</div>
              </div>
              <div className="info-block">
                <div className="text">540 hrs / 10 jobs</div>
              </div>
              <div className="info-block">
                <div className="title">Languages</div>
                <div className="text">
                  English: <span>fluent</span>
                  ;Russian: <span>native</span>
                </div>
              </div>
              <div className="info-block">
                <div className="title">Place of Work</div>
                <div className="text">Online</div>
              </div>
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard" />
                    <span className="btn-text">Hire</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-jobs" />
                    <span className="btn-text">Portfolio</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output" />
                    <span className="btn-text">View Page</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-comment" />
                    <span className="btn-text">Message</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="job-details-right">
              <div className="job-details-right-header flexbox">
                <div className="likes flexbox">
                  <span className="icon icon-shape" />
                  <ul className="likes-list list-unstyled">
                    <li className="like-item like-item--1 bg-cover circul-shape" />
                    <li className="like-item like-item--2 bg-cover circul-shape" />
                    <li className="like-item like-item--3 bg-cover circul-shape" />
                    <li className="like-item like-item--1 bg-cover circul-shape" />
                  </ul>
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-comments" />
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-calendar2" />
                    <span className="stat-title blue-color">LAST ACTIVE</span>
                    <span className="stat-info">1 year ago</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-saved" />
                    <span className="stat-title blue-color">SAVED</span>
                    <span className="stat-info">5</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                <div className="feedback-item flexbox">
                  <div className="left-col">
                    <div className="item-header">
                      <div className="item-photo circul-shape bg-cover item-photo--1" />
                      <div className="item-name blue-color">Clifford Love</div>
                    </div>
                    <div className="item-message">
                      <span className="job-title">PSD to HTML</span>
                      <span className="feedback-text">
                        {`Another bang up job! Clifford is the most dependable web design resource I've worked with, and
                        I've worked with... many!`}
                      </span>
                    </div>
                  </div>
                  <div className="right-col job-box-rate">
                    <span className="icon icon-star-full" />
                    <span className="rate-result">5.8</span>
                  </div>
                </div>

                <div className="feedback-item flexbox">
                  <div className="left-col">
                    <div className="item-header">
                      <div className="item-photo circul-shape bg-cover item-photo--2" />
                      <div className="item-name blue-color">Clifford Love</div>
                    </div>
                    <div className="item-message">
                      <span className="job-title">PSD to HTML</span>
                      <span className="feedback-text">
                        {`Another bang up job! Clifford is the most dependable web design resource I've worked with, and
                        I've worked with... many!`}
                      </span>
                    </div>
                  </div>
                  <div className="right-col job-box-rate">
                    <span className="icon icon-star-full" />
                    <span className="rate-result">5.8</span>
                  </div>
                </div>

                <div className="feedback-item flexbox">
                  <div className="left-col">
                    <div className="item-header">
                      <div className="item-photo circul-shape bg-cover item-photo--3" />
                      <div className="item-name blue-color">Clifford Love</div>
                    </div>
                    <div className="item-message">
                      <span className="job-title">PSD to HTML</span>
                      <span className="feedback-text">
                        {`Another bang up job! Clifford is the most dependable web design resource I've worked with, and
                        I've worked with... many!`}
                      </span>
                    </div>
                  </div>
                  <div className="right-col job-box-rate">
                    <span className="icon icon-star-full" />
                    <span className="rate-result">5.8</span>
                  </div>
                </div>
                <button className="btn btn-bg-transparent more-feedbacks" type="bytton">
                  + 10 feedbacks
                </button>
              </div>
              <div className="other-details">
                <div className="panel flexbox justify-space-between panel-blue">
                  <div className="other-title">Math Home Tutoring</div>
                  <span className="btn btn-blue-border btn-bold">Free</span>
                </div>
                <div className="panel flexbox justify-space-between panel-orange">
                  <div className="other-title">Math Home Tutoring</div>
                  <span className="btn btn-blue-border btn-bold">Free</span>
                </div>
                <div className="panel flexbox justify-space-between panel-pink">
                  <div className="other-title">Math Home Tutoring</div>
                  <span className="btn btn-blue-border btn-bold">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TellentsItem;
