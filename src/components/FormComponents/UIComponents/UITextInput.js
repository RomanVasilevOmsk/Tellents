import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UITextInput extends Component {
  render() {
    const {
      onBlur,
      onFocus,
      onChange,
      value,
      placeholder,
      secure,
      invalid,
      disableKeyboard,
      placeholderTextColor,
      backgroundColor,
      width,
      height,
      borderRadius,
      paddingLeft,
      paddingRight,
      color,
      fontSize,
      shadowOpacity,
      keyboardTypeNumber,
      marginLeft,
      marginRight,
      className,
      required,
      password,
    } = this.props;

    return (
      <input
        type={password ? 'password' : 'text'}
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    );
  }
}

UITextInput.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  secure: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  invalid: PropTypes.bool,
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

export default UITextInput;
