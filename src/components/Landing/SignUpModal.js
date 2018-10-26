import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

class SignUpModal extends Component {
  render() {
    const { modalIsOpen, closeModal } = this.props;
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal-wrapper sign-up-modal"
        >
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={event => event.stopPropagation()}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-title blue-color">Please Sign Up</div>
                <div className="modal-text">
                  Join over 2 million tallents already using Tellents. Start now for free!
                </div>
                <div className="modal-form">
                  <form>
                    <div className="input-wrapper">
                      <input type="text" className="form-control" placeholder="First Name" required />
                      <span className="error-message" />
                    </div>
                    <div className="input-wrapper">
                      <input type="text" className="form-control" placeholder="Last Name" required />
                      <span className="error-message">Right Name</span>
                    </div>
                    <div className="input-wrapper">
                      <input type="email" className="form-control dity" placeholder="Email" required />
                      <span className="error-message">Check your email</span>
                    </div>
                    <div className="input-wrapper">
                      <input type="password" className="form-control" placeholder="Password" required minLength="8" />
                      <span className="error-message">Too short. Use at least 8 characters</span>
                    </div>
                    <button className="btn btn-blue btn-with-icon" type="sunbmit">
                      <span className="button-content">
                        <span className="icon icon-right-arrow" />
                        START NOW
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-footer-content">
                  Or you could sign up with
                  <button className="btn circul-shape soc-btn soc-btn--f">
                    <span className="icon icon-facebook" />
                  </button>
                  <span>or </span>
                  <button className="btn circul-shape soc-btn soc-btn--g">
                    <span className="icon icon-google-plus-logo" />
                  </button>
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
};
export default SignUpModal;
