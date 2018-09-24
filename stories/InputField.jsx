import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputField from '../shared/components/input-field/InputField';

const inputStyle = {
  marginLeft: '10px',
  marginTop: '10px',
  width: '200px'
};

storiesOf('InputField', module)
  .add('empty', () => (
    <div style={inputStyle}>
      <InputField
        onChange={action('input value')}
        required
        type="text"
      />
    </div>
  ))
  .add('with placeholder', () => (
    <div style={inputStyle}>
      <InputField
        onChange={action('input value')}
        placeholder="First name"
        required
        type="text"
      />
    </div>
  ));
