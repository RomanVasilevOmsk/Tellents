import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import appContainer from '../../containers/AppContainer';
import Header from './../Header';
import Footer from './../Footer';

class MainLayout extends Component {
  state = {
    isMobileMenuVisible: false,
  };

  handleOpenMobileMenu = () => {
    const { isMobileMenuVisible } = this.state;
    this.setState({ isMobileMenuVisible: !isMobileMenuVisible });
  };

  render() {
    const { isMobileMenuVisible } = this.state;
    const { children, logout, user } = this.props;
    return (
      <Fragment>
        <Header
          logout={logout}
          user={user}
          isMobileMenuVisible={isMobileMenuVisible}
          onOpenMobileMenu={this.handleOpenMobileMenu}
        />
        <div className="content">{children}</div>
        <Footer />
      </Fragment>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  logout: PropTypes.func,
  user: PropTypes.object,
};

export default appContainer(MainLayout);
