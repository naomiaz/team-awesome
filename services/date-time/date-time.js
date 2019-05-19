export const createIsoString = (date, time) => new Date(`${date} ${time}`).toISOString();

export const convertDateToIso = (date) => date.split('-').reverse().join('-');
export const convertIsoToDate = (isoString) => new Date(isoString).toLocaleDateString('nl-NL');
export const convertIsoToMonthYear = (isoString) => new Date(isoString).toLocaleDateString('en-Us', { month: 'long', year: 'numeric' });

export const convertTimeToIso = (time) => time.replace('.', ':');

export const getRelativeDay = (isoString) => {
  if (convertIsoToDate(isoString) === new Date().toLocaleDateString('nl-NL')) {
    return '(Today)';
  } if (convertIsoToDate(isoString) === new Date(Date.now() - 86400000).toLocaleDateString()) {
    return '(Yesterday)';
  }
  return '';
};

export const calculateDuration = (isoStringTimeFrom, isoStringTimeTo) => {
  const timeDifference = (Date.parse(isoStringTimeTo) - Date.parse(isoStringTimeFrom));
  return timeDifference - 3600000;
};

export const calculateDurationPerDay = (timeEntries, date) => (timeEntries
  .filter((timeEntry) => (timeEntry.date === date))
  .reduce((accumulator, timeEntry) => accumulator
    + (Date.parse(timeEntry.timeTo) - Date.parse(timeEntry.timeFrom)), 0)
  - 3600000);
