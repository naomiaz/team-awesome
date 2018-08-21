const createIsoString = (date, time) => new Date(`${date} ${time}`).toISOString();

export const convertDateTimeToIso = (prevState) => {
  const { date, timeFrom, timeTo } = prevState.timeEntry;
  const dateFormatted = date.split('-').reverse().join('-');
  const timeFromFormatted = createIsoString(dateFormatted, timeFrom.replace('.', ':'));
  const timeToFormatted = createIsoString(dateFormatted, timeTo.replace('.', ':'));
  return {
    ...prevState.timeEntry,
    date: dateFormatted,
    timeFrom: timeFromFormatted,
    timeTo: timeToFormatted
  };
};

// ----
// export const convertDateToIso = (date) => {
//   const dateFormatted = date.split('-').reverse().join('-');
//   return dateFormatted;
// };
//
// export const convertTimeToIso = (time) => {
//   const timeFormatted = time.replace('.', ':');
//   return timeFormatted;
// };
// ----

export const checkIfToday = (dateOfEntry) => {
  if (new Date(dateOfEntry).toLocaleDateString() === new Date().toLocaleDateString()) {
    return '(Today)';
  } if (new Date(dateOfEntry).toLocaleDateString()
    === new Date(Date.now() - 86400000).toLocaleDateString()) {
    return '(Yesterday)';
  }
  return '';
};

export const calculateDuration = (timeFrom, timeTo) => new Date((Date.parse(timeTo)
- Date.parse(timeFrom) - 3600000)).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' });
