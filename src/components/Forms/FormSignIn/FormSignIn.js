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
              <button className="btn btn-blue btn-with-icon" onClick={handleSubmit}>
                <span className="button-content">
                  <span className="icon icon-right-arrow" />
                  LOG IN
                </span>
              </button>
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
