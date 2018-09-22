import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  className, disabled, onClick, type, value
}) => (
  <button
    className={`button ${className}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {value}
  </button>
);

Button.defaultProps = {
  className: '',
  disabled: null,
  onClick: () => ''
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
