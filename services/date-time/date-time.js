export const createIsoString = (date, time) => new Date(`${date} ${time}`).toISOString();

export const convertDateToIso = (date) => date.split('-').reverse().join('-');

export const convertTimeToIso = (time) => time.replace('.', ':');

export const getRelativeDay = (dateOfEntry) => {
  if (new Date(dateOfEntry).toLocaleDateString() === new Date().toLocaleDateString()) {
    return '(Today)';
  } if (new Date(dateOfEntry).toLocaleDateString()
    === new Date(Date.now() - 86400000).toLocaleDateString()) {
    return '(Yesterday)';
  }
  return '';
};

export const calculateDuration = (timeFrom, timeTo) => {
  const timeDifference = Date.parse(timeTo) - Date.parse(timeFrom) - 3600000;
  return new Date(timeDifference).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' });
};
