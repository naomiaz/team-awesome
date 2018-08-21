const endpoint = 'http://localhost:3001/api/time-entries';

export const timeEntriesGet = () => fetch(endpoint)
  .then((response) => response.json());

export const timeEntriesPost = (newTimeEntry) => fetch(endpoint, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTimeEntry)
});
