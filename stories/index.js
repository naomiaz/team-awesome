import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectBox from '../shared/components/select-box/SelectBox';

storiesOf('SelectBox', module)
  .add('with options', () => (
    <SelectBox
      // className="time-entry-form__input"
      selectedValue="Design"
      // name="clientId"
      onChange={action('selectbox clicked')}
      options={[
        { title: 'Design', value: 'Design' },
        { title: 'Development', value: 'Development' },
        { title: 'Meeting', value: 'Meeting' },
        { title: 'Traveling', value: 'Traveling' }
      ]}
    />
  ));
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ));
