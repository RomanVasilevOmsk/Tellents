import React, { Fragment } from 'react';
import Header from './../Header';
import Footer from './../Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
