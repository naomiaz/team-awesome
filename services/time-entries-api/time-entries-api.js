const endpointGet = 'http://localhost:3001/api/time-entries/?_sort=id&_order=desc';
const endpointPost = 'http://localhost:3001/api/time-entries';

export const timeEntriesGet = () => fetch(endpointGet)
  .then((response) => response.json());

export const timeEntriesPost = (newTimeEntry) => fetch(endpointPost, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTimeEntry)
});
