// const endpointGet = 'http://localhost:3001/api/time-entries/?_sort=id&_order=desc';
const endpoint = 'http://localhost:3001/api/time-entries';

export const getTimeEntries = () => fetch(endpoint)
  .then((response) => response.json());

export const postTimeEntry = (newTimeEntry) => fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTimeEntry)
}).then((response) => response.json());

export const deleteTimeEntry = (id) => fetch(`${endpoint}/${id}`, {
  method: 'DELETE'
}).then((response) => response.json());
