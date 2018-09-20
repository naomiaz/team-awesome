import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
<<<<<<< HEAD
  className, defaultValue, name, onChangeFunction, options
=======
  className, selectedValue, name, onChange, options
>>>>>>> master
}) => (
  <select
    className={`select-box ${className}`}
    name={name}
<<<<<<< HEAD
    onChange={(event) => onChangeFunction(event.target.value)}
    value={defaultValue}
=======
    onChange={(event) => onChange(event.target.value)}
    value={selectedValue}
>>>>>>> master
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
<<<<<<< HEAD
  onChangeFunction: PropTypes.func.isRequired,
  name: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
=======
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  selectedValue: PropTypes.string.isRequired,
>>>>>>> master
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SelectBox;
