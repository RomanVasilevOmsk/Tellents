import React from 'react';

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="bg-white no-mrg">
    <div className="container">
      <span>© {currentYear} Talents </span>
      <ul>
        <li>
          <a href="">Terms of Use</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
