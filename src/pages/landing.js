import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LandingHeader from '../components/Landing/LandingHeader';
import SignUpModal from '../components/Landing/SignUpModal';
import SignInModal from '../components/Landing/SignInModal';
import appContainer from '../containers/AppContainer';
import '../assets/styles/landing-styles.scss';
import '../assets/styles/modals.scss';
import '../assets/styles/landing-media.scss';

class Landing extends Component {
  state = {
    modalIsOpenSignUp: false,
    modalIsOpenSignIn: false,
  };

  onOpenModalSignIn = () => {
    this.setState({ modalIsOpenSignIn: true });
  };
  onOpenModalSignUp = () => {
    this.setState({ modalIsOpenSignUp: true });
  };
  onCloseModalSignIn = () => {
    this.setState({ modalIsOpenSignIn: false });
  };
  onCloseModalSignUp = () => {
    this.setState({ modalIsOpenSignUp: false });
  };

  render() {
    const { signUp, login, isAuthenticated } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/search' } };

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div className="landing">
        <LandingHeader openModalSignUp={this.onOpenModalSignUp} openModalSignIn={this.onOpenModalSignIn} />
        <SignUpModal
          modalIsOpen={this.state.modalIsOpenSignUp}
          openModal={this.onOpenModalSignUp}
          closeModal={this.onCloseModalSignUp}
          onSignUp={signUp}
        />
        <SignInModal
          modalIsOpen={this.state.modalIsOpenSignIn}
          openModal={this.onOpenModalSignIn}
          closeModal={this.onCloseModalSignIn}
          onlogin={login}
        />
      </div>
    );
  }
}

Landing.propTypes = {
  signUp: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
};

export default appContainer(Landing);
