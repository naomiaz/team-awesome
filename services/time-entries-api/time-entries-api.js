// const endpointGet = 'http://localhost:3001/api/time-entries/?_sort=id&_order=desc';
const endpoint = 'http://localhost:3001/api/time-entries';

export const GetTimeEntries = () => fetch(`${endpoint}?_sort=id&_order=desc`)
  .then((response) => response.json());

export const PostTimeEntry = (newTimeEntry) => fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTimeEntry)
}).then((response) => response.json());

export const DeleteTimeEntry = (id) => fetch(`${endpoint}/${id}`, {
  method: 'DELETE'
}).then((response) => response.json());
