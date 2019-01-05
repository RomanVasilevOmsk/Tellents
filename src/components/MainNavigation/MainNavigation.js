import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigation = () => (
  <div className="nav-list">
    <ul className="flexbox justify-space-between">
      <li>
        <NavLink to="teachers" activeClassName="active">
          Teachers <div className="caret" />
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/skils" activeClassName="active">
          Profile <div className="caret" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" activeClassName="active">
          Favorites <div className="caret" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About <div className="caret" />
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MainNavigation;
