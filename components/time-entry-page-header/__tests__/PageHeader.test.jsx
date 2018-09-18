import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageHeader from '../PageHeader';

it('renders correctly', () => {
  const wrapper = shallow(
    <PageHeader
      pageTitle="Timesheet"
      unitCount={12}
      unit="entries"
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
