import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectBox from '../shared/components/select-box/SelectBox';

const selectStyle = {
  marginLeft: '10px',
  marginTop: '10px',
  width: '200px'
};

storiesOf('SelectBox', module)
  .add('with options', () => (
    <div style={selectStyle}>
      <SelectBox
        selectedValue="Design"
        onChange={action('selectbox value')}
        options={[
          { title: 'Design', value: 'Design' },
          { title: 'Development', value: 'Development' },
          { title: 'Meeting', value: 'Meeting' },
          { title: 'Traveling', value: 'Traveling' }
        ]}
      />
    </div>
  ));
