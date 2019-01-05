import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FormTextInput from '../../FormComponents/FormTextInput';

import { validationRules as validation } from '../../../utils';

class FormSignIn extends Component {
  validate = values => {
    const errors = {};

    return errors;
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <Form
        onSubmit={onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid, submitting, values }) => {
          return (
            <form className="form-signin user-signin">
              <div className="input-wrapper">
                <Field
                  name="email"
                  placeholder="Email"
                  component={FormTextInput}
                  className="form-control dity"
                  validate={validation.email}
                  required
                />
              </div>
              <div className="input-wrapper">
                <Field
                  name="password"
                  placeholder="Password"
                  component={FormTextInput}
                  className="form-control"
                  validate={validation.password}
                  required
                  password
                />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <button className="btn btn-lg btn-primary login" onClick={handleSubmit}>
                      <span className="button-content">LOG IN</span>
                    </button>
                  </div>
                </div>
              </div>

              <a className="edit-pass" href="#">
                Forgot your password
              </a>
            </form>
          );
        }}
      />
    );
  }
}

FormSignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormSignIn;
