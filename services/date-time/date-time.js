export const createIsoString = (date, time) => new Date(`${date} ${time}`).toISOString();

export const convertDateToIso = (date) => date.split('-').reverse().join('-');
export const convertIsoToDate = (date) => new Date(date).toLocaleDateString();

export const convertTimeToIso = (time) => time.replace('.', ':');

export const getRelativeDay = (dateOfEntry) => {
  if (convertIsoToDate(dateOfEntry) === new Date().toLocaleDateString()) {
    return '(Today)';
  } if (convertIsoToDate(dateOfEntry) === new Date(Date.now() - 86400000).toLocaleDateString()) {
    return '(Yesterday)';
  }
  return '';
};

export const calculateDuration = (timeFrom, timeTo) => {
  const timeDifference = (Date.parse(timeTo) - Date.parse(timeFrom));
  return timeDifference - 3600000;
};

export const calculateDurationPerDay = (timeEntries, date) => (timeEntries
  .filter((timeEntry) => (timeEntry.date === date))
  .reduce((accumulator, timeEntry) => accumulator
    + (Date.parse(timeEntry.timeTo) - Date.parse(timeEntry.timeFrom)), 0)
  - 3600000);
