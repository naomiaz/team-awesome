import React from 'react';
import { ClientNameModel } from '../../../ducks/clients';
import './select-box.scss';

export interface SelectBoxProps {
  className?: string;
  name?: string;
  onChange;
  options: ClientNameModel[];
  selectedValue: string;
}

const SelectBox: React.SFC<SelectBoxProps> = ({
  className, selectedValue, name, onChange, options
}: SelectBoxProps) => (
  <div className="select-box__button-arrow">
    <select
      className={`select-box ${className}`}
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

export default SelectBox;
