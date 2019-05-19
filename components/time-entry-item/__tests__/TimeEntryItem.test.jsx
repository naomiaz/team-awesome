import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimeEntryItem from '../TimeEntryItem';

it('renders correctly', () => {
  const wrapper = shallow(
    <TimeEntryItem
      client="Port of Rotterdam"
      date="2018-08-30"
      id={1}
      timeFrom="2018-08-30T12:00:00.000Z"
      timeTo="2018-08-30T14:00:00.000Z"
      onEntryDelete={() => {}}
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
