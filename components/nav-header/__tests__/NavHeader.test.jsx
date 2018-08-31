import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavHeader from '../NavHeader';

it('renders correctly', () => {
  const wrapper = shallow(
    <NavHeader
      siteName="Team Awesome"
      isMenuVisible={false}
      onToggleMenuVisibility={() => {}}
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
