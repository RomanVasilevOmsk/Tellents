import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FormSignIn from '../Forms/FormSignIn';

class SignUpModal extends Component {
  render() {
    const { modalIsOpen, closeModal, onlogin } = this.props;
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal-wrapper"
        >
          <div className="modal-overlay" onClick={closeModal}>
            <div className="signer-wrapper modal-content" onClick={event => event.stopPropagation()}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <button type="button" className="close" onClick={closeModal}>
                      <span>×</span>
                    </button>
                    <h1 className="text-center login-title">Login Into Your Account</h1>
                    <div className="social-buttons text-center">
                      <a href="#" className="share-btn facebook">
                        <i className="icon icon-facebook" />
                        &nbsp;
                        <span style={{ color: '#29467e' }}>|</span>
                        &nbsp;Sign in with Facebook
                      </a>
                      <a className="share-btn google-plus" href="#">
                        <i className="icon icon-google-plus-logo" />
                        &nbsp;
                        <span style={{ color: '#29467e' }}>|</span>
                        &nbsp;Sign in with Google
                      </a>
                    </div>
                    <div className="row omb_row-sm-offset-3 omb_loginOr">
                      <div className="col-md-12">
                        <hr className="omb_hrOr" />
                        <span className="omb_spanOr">or</span>
                      </div>
                    </div>
                    <FormSignIn onSubmit={onlogin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  onlogin: PropTypes.func,
};
export default SignUpModal;
