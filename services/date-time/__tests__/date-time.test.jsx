import {
  calculateDuration,
  calculateDurationPerDay,
  convertDateToIso,
  convertIsoToDate,
  convertIsoToMonthYear,
  convertTimeToIso,
  createIsoString,
  getRelativeDay
} from '../date-time';

test('Split, reverse, and join NL date notation to EN date notation', () => {
  expect(convertDateToIso('19-10-2018')).toEqual('2018-10-19');
});

test('Convert ISO string to NL date notation', () => {
  expect(convertIsoToDate('2018-10-19T08:00:00.000Z')).toEqual('2018-10-19');
});

test('Convert ISO string to EN date with month and year', () => {
  expect(convertIsoToMonthYear('2018-10-19T08:00:00.000Z')).toEqual('October 2018');
});

test('Convert NL time notation(.) to EN time notation(:)', () => {
  expect(convertTimeToIso('10.00')).toEqual('10:00');
});

test('Convert NL date and time notation to ISO timestamp', () => {
  expect(createIsoString(convertDateToIso('19-10-2018'), convertTimeToIso('10.00'))).toEqual('2018-10-19T08:00:00.000Z');
});

test('Return (today) or (yesterday) or nothing, based on the time entry date', () => {
  expect(getRelativeDay('2018-09-06')).toEqual('(Today)');
});

test('Calculate the duration per entry in ms', () => {
  expect(calculateDuration('2018-10-19T08:30:00.000Z', '2018-10-19T08:00:00.000Z')).toEqual(-5400000);
});

test('Calculate the total duration per day in ms', () => {
  const timeEntriesArray = [{
    date: '2018-08-22',
    timeFrom: '2018-08-22T08:00:00.000Z',
    timeTo: '2018-08-22T13:04:00.000Z'
  },
  {
    date: '2018-10-19',
    timeFrom: '2018-10-19T08:00:00.000Z',
    timeTo: '2018-10-19T08:30:00.000Z'
  },
  {
    date: '2018-10-19',
    timeFrom: '2018-10-19T07:05:00.000Z',
    timeTo: '2018-10-19T08:30:00.000Z'
  }];

  expect(calculateDurationPerDay(timeEntriesArray, '2018-10-19')).toEqual(3300000);
});
