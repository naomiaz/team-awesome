import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectBox from '../shared/components/select-box/SelectBox';

storiesOf('SelectBox', module)
  .add('with options', () => (
    <SelectBox
      selectedValue="Design"
      onChange={action('selectbox clicked')}
      options={[
        { title: 'Design', value: 'Design' },
        { title: 'Development', value: 'Development' },
        { title: 'Meeting', value: 'Meeting' },
        { title: 'Traveling', value: 'Traveling' }
      ]}
    />
  ));
