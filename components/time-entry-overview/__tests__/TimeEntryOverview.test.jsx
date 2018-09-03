import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimeEntryOverview from '../TimeEntryOverview';

it('renders correctly', () => {
  const wrapper = shallow(
    <TimeEntryOverview
      isFormSaving={false}
      isFormVisible={false}
      onDeleteTimeEntry={() => {}}
      onRequestTimeEntries={() => {}}
      onSaveTimeEntry={() => {}}
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
