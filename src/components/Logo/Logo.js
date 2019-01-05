import React from 'react';
import LogoImg from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export const Logo = () => (
  <div className="logo">
    <NavLink to="/search" className="logo-link">
      <img src={LogoImg} height="39" width="auto" alt="logo" />
    </NavLink>
  </div>
);

export default Logo;
