import React from 'react';
import PropTypes from 'prop-types';

import './input-field.scss';

const InputField = ({
  className, name, onBlur, onChange, pattern, placeholder, required, type, value
}) => (
  <input
    className={`input-field__input ${className}`}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    pattern={pattern}
    placeholder={placeholder}
    required={required}
    type={type}
    value={value}
  />
);

InputField.defaultProps = {
  className: '',
  name: '',
  onBlur: () => '',
  pattern: null,
  placeholder: '',
  value: '',
  required: null
};

InputField.propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired
};

export default InputField;
