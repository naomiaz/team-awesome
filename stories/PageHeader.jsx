import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PageHeader from '../shared/components/page-header/PageHeader';

storiesOf('PageHeader', module)
  .add('without filter', () => (
    <PageHeader
      pageTitle="Time Entries"
      unitCount={2}
      unitSingular="Entry"
      unitPlural="Entries"
    />
  ))
  .add('with filter', () => (
    <PageHeader
      pageTitle="Time Entries"
      selectBox={[{
        onChange: action('changed filter value'),
        options: [
          { title: 'All clients:', value: '' },
          { title: 'Albert Heijn', value: 'Albert Heijn' },
          { title: 'Hike One', value: 'Hike One' },
          { title: 'Port of Rotterdam', value: 'Port of Rotterdam' }
        ],
        selectedValue: ''
      }]}
      unitCount={1}
      unitSingular="Entry"
      unitPlural="Entries"
    />
  ));
