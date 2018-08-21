export const timeEntriesGet = () => fetch('http://localhost:3001/api/time-entries')
  .then((response) => response.json());

export const timeEntriesPost = (newTimeEntry) => fetch('http://localhost:3001/api/time-entries', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTimeEntry)
});
