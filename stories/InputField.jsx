import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputField from '../shared/components/input-field/InputField';

storiesOf('InputField', module)
  .add('empty', () => (
    <InputField
      onChange={action('input value')}
      required
      type="text"
    />
  ))
  .add('with placeholder', () => (
    <InputField
      onChange={action('input value')}
      placeholder="First name"
      required
      type="text"
    />
  ));
