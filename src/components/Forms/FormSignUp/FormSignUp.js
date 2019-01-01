import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FormTextInput from '../../FormComponents/FormTextInput';

import { validationRules as validation } from '../../../utils';

class FormSignUp extends Component {
  validate = values => {
    const errors = {};

    return errors;
  };

  render() {
    const { onSubmit } = this.props;
    // const initialValues = {
    //   feeType: "%",
    //   allProducts: false,
    //   amount: "30"
    // };
    return (
      <Form
        onSubmit={onSubmit}
        // initialValues={initialValues}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid, submitting, values }) => {
          return (
            <form>
              <div className="input-wrapper">
                <Field
                  name="first_name"
                  placeholder="First Name"
                  component={FormTextInput}
                  className="form-control"
                  validate={validation.firstName}
                  required
                />
              </div>
              <div className="input-wrapper">
                <Field
                  name="last_name"
                  placeholder="Last Name"
                  component={FormTextInput}
                  className="form-control"
                  validate={validation.firstName}
                  required
                />
              </div>
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
              <button className="btn btn-lg btn-primary login" onClick={handleSubmit}>
                <span className="button-content">
                  <span className="icon icon-right-arrow" />
                  START NOW
                </span>
              </button>
            </form>
          );
        }}
      />
    );
  }
}

FormSignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormSignUp;
