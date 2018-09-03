import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TimeEntryForm from '../TimeEntryForm';

test('is the initial state loaded in the component', () => {
  const timeEntryForm = shallow(
    <TimeEntryForm
      onEntrySubmit={() => {}}
      isFormSaving={false}
      isFormVisible={false}
      onToggleFormVisibility={() => {}}
      timeEntries={[]}
    />
  );

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

it('renders correctly', () => {
  const wrapper = shallow(
    <TimeEntryForm
      onEntrySubmit={() => {}}
      isFormSaving={false}
      isFormVisible={false}
      onToggleFormVisibility={() => {}}
      timeEntries={[{
        client: 'Mercedes',
        activity: 'Design',
        date: '2018-08-27',
        timeFrom: '2018-08-27T08:00:00.000Z',
        timeTo: '2018-08-27T12:00:00.000Z',
        id: 11
      }]}
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
