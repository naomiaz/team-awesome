import React from 'react';
import PropTypes from 'prop-types';

import './select-box.scss';

const SelectBox = ({ onFilterTimeEntries }) => (
  <select
    className="input-field filter-button"
    name="filterValue"
    id="select"
    onChange={({ target }) => onFilterTimeEntries(target.value)}
  >
    <option value="">All clients:</option>
    <option value="Port of Rotterdam">Port of Rotterdam</option>
    <option value="Saab">Saab</option>
    <option value="Mercedes">Mercedes</option>
    <option value="Audi">Audi</option>
  </select>
);

SelectBox.propTypes = {
  onFilterTimeEntries: PropTypes.func.isRequired
};

export default SelectBox;