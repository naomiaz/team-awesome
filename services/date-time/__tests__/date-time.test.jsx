import React from 'react';
import { shallow } from 'enzyme';

import { createIsoString, convertDateToIso, convertTimeToIso } from '../date-time';

test('does the createIsoString service work', () => {
  expect(createIsoString(convertDateToIso('19-10-2018'), convertTimeToIso('10.00'))).toEqual('2018-10-19T08:00:00.000Z');
});
