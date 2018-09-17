import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  className, defaultValue, name, onChangeFunction, options
}) => (
  <select
    className={`select-box ${className}`}
    name={name}
    onChange={onChangeFunction}
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
  className: ''
  // name: ''
};

SelectBox.propTypes = {
  className: PropTypes.string,
  onChangeFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }).isRequired
  ).isRequired
};

export default SelectBox;
