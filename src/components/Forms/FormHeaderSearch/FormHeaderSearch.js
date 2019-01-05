import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FormTextInput from '../../FormComponents/FormTextInput';

import { validationRules as validation } from '../../../utils';

class FormHeaderSearch extends Component {
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
            <div className="search-form">
              <form className="my-search-form" role="search">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="search-filter radio-block">
                  <div className="radio">
                    <input type="radio" name="optionsRadios" id="option-jobs" value="option1" defaultChecked />
                    <label htmlFor="option-jobs">
                      <span className="radio-text">Jobs</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="optionsRadios" id="option-talents" value="option2" />
                    <label htmlFor="option-talents">
                      <span className="radio-text">Talents</span>
                    </label>
                  </div>
                </div>
                <a href="#" className="btn-search">
                  <i className="icon icon-loupe" />
                </a>
              </form>
            </div>
          );
        }}
      />
    );
  }
}

FormHeaderSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormHeaderSearch;
