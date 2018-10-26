import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
        <li role="presentation">
          <NavLink to="/profile/overview" activeClassName="active">
            <span className="icon icon-overview" />
            Overview
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/messages" activeClassName="active">
            <span className="icon icon-message" />
            Messages
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/jobs" activeClassName="active">
            <span className="icon icon-jobs" />
            My Jobs
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/promo" activeClassName="active">
            <span className="icon icon-promo" />
            My Promo
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/skils" activeClassName="active">
            <span className="icon icon-skills" />
            My Skills
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/saved" activeClassName="active">
            <span className="icon icon-saved" />
            Saved
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/media" activeClassName="active">
            <span className="icon icon-media" />
            My Media
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/accounts" activeClassName="active">
            <span className="icon icon-accounts" />
            Accounts
          </NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/profile/profile" activeClassName="active">
            <span className="icon icon-profile" />
            Profile
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
