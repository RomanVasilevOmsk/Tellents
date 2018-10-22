import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container-fluid">{children}</div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
