import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FormTextInput from '../../FormComponents/FormTextInput';

import { validationRules as validation } from '../../../utils';

class FormMainSearch extends Component {
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
            <div className="col-xs-10">
              <div className="search-form">
                <form className="my-search-form" role="search">
                  <input type="text" className="form-control" placeholder="Search for ..." />
                  <div className="search-filter radio-block clearfix">
                    <div className="radio">
                      <input
                        type="radio"
                        name="home-page-filter"
                        id="jobs-filter-1"
                        value="jobs-filter"
                        defaultChecked
                      />
                      <label htmlFor="jobs-filter-1">
                        <span className="radio-text mobile-hide">Jobs</span>
                        <span className="radio-text mobile-show">J</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="home-page-filter" id="talents-filter-1" value="talents-filter" />
                      <label htmlFor="talents-filter-1">
                        <span className="radio-text mobile-hide">Talents</span>
                        <span className="radio-text mobile-show">T</span>
                      </label>
                    </div>
                  </div>
                  <a href="" className="btn-search">
                    <i className="icon icon-loupe" />
                  </a>
                </form>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

FormMainSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormMainSearch;
