import React, { Component } from 'react';
import LandingHeader from '../components/Landing/LandingHeader';
import SignUpModal from '../components/Landing/SignUpModal';
import SignInModal from '../components/Landing/SignInModal';
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
    return (
      <div className="landing">
        <LandingHeader openModalSignUp={this.onOpenModalSignUp} openModalSignIn={this.onOpenModalSignIn} />
        <SignUpModal
          modalIsOpen={this.state.modalIsOpenSignUp}
          openModal={this.onOpenModalSignUp}
          closeModal={this.onCloseModalSignUp}
        />
        <SignInModal
          modalIsOpen={this.state.modalIsOpenSignIn}
          openModal={this.onOpenModalSignIn}
          closeModal={this.onCloseModalSignIn}
        />
      </div>
    );
  }
}
export default Landing;
