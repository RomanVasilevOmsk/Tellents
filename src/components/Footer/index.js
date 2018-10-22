import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-white no-mrg">
        <div className="container">
          <span>© 2016 Talents </span>
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
  }
}

export default Footer;
