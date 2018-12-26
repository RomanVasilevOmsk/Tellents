import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class FormError extends Component {
  render() {
    const {
      meta: { error, touched },
    } = this.props;

    return (
      <Fragment>
        {error &&
          touched &&
          error.map((item, index) => (
            <span key={index.toString()} className="error-message">
              {item}
            </span>
          ))}
      </Fragment>
    );
  }
}

FormError.propTypes = {
  meta: PropTypes.object,
};

export default FormError;
