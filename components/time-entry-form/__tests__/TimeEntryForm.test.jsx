import React from 'react';
import { shallow } from 'enzyme';

import TimeEntryForm from '../TimeEntryForm';

test('is the initial state loaded in the component', () => {
  const timeEntryForm = shallow(<TimeEntryForm
    onEntrySubmit={() => {}}
    isFormSaving={false}
    isFormVisible={false}
    onToggleFormVisibility={() => {}}
    timeEntries={[]}
  />);

  expect(timeEntryForm.state()).toEqual({
    timeEntry: {
      client: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      timeFrom: '',
      timeTo: ''
    },
    validity: {
      date: true,
      timeFrom: true,
      timeTo: true
    }
  });
});
