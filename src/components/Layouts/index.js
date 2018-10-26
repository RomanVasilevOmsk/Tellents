import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
