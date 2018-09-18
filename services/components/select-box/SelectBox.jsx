import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  className, defaultValue, name, onChange, options
}) => (
  <select
    className={`select-box ${className}`}
    name={name}
    onChange={onChange}
    value={defaultValue}
  >
    {options.map((currentOption) => (
      <option
        key={currentOption.value}
        value={currentOption.value}
      >
        {currentOption.title}
      </option>
    ))}
  </select>
);

SelectBox.defaultProps = {
  className: '',
  name: ''
};

SelectBox.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SelectBox;
