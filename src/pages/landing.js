import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LandingHeader from '../components/Landing/LandingHeader';
import SignUpModal from '../components/Landing/SignUpModal';
import SignInModal from '../components/Landing/SignInModal';
import { bindActionCreators } from 'redux';
import { signUp } from '../reducers/auth/actions';
import '../assets/styles/landing-styles.scss';
import '../assets/styles/modals.scss';
import '../assets/styles/landing-media.scss';

class Landing extends Component {
  state = {
    modalIsOpenSignUp: false,
    modalIsOpenSignIn: false,
  };

  handleSignUp = user => {
    this.props.signUp(user);
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
          handleSignUp={this.handleSignUp}
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

Landing.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signUp,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Landing);
