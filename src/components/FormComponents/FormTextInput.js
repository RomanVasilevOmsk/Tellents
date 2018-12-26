import React, { Component } from 'react';
import FormError from './FormError';
import PropTypes from 'prop-types';
import { UITextInput } from './UIComponents';

class FormTextInput extends Component {
  render() {
    const {
      input,
      meta,
      placeholder,
      secure,
      placeholderTextColor,
      backgroundColor,
      width,
      height,
      borderRadius,
      paddingLeft,
      paddingRight,
      color,
      fontSize,
      marginLeft,
      marginRight,
      className,
      required,
      password,
    } = this.props;
    const { error, touched } = meta;
    return (
      <div>
        <UITextInput
          value={input.value}
          invalid={!!meta.submitError}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          onChange={input.onChange}
          placeholder={placeholder}
          secure={secure}
          placeholderTextColor={placeholderTextColor}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          borderRadius={borderRadius}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          color={color}
          fontSize={fontSize}
          marginLeft={marginLeft}
          className={className}
          required={required}
          marginRight={marginRight}
          password={password}
        />
        {error && touched && <FormError meta={meta} />}
      </div>
    );
  }
}

FormTextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  secure: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  className: PropTypes.string,
  required: PropTypes.bool,
  password: PropTypes.bool,
};

export default FormTextInput;
