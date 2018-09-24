import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({
  className, selectedValue, name, onChange, options
}) => (
  <div className="select-box select-box__button-arrow">
    <select
      className={`select-box__select ${className}`}
      name={name}
      onChange={onChange}
      value={selectedValue}
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
  </div>
);

SelectBox.defaultProps = {
  className: '',
  name: ''
};

SelectBox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  selectedValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SelectBox;
