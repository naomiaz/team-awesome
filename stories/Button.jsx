import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../shared/components/button/Button';

const buttonStyle = {
  marginLeft: '10px',
  marginTop: '10px',
  minWidth: '200px'
};

storiesOf('Button', module)
  .add('enabled', () => (
    <div style={buttonStyle}>
      <Button
        onClick={action('button clicked')}
        type="button"
        value="Click here"
      />
    </div>
  ))
  .add('disabled', () => (
    <div style={buttonStyle}>
      <Button
        disabled
        onClick={action('button clicked')}
        type="button"
        value="Click here"
      />
    </div>
  ));
