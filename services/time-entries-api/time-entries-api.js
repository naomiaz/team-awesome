import environments from './environments';


const endpointTimeEntries = `${environments}/time-entries`;
const endpointTeamMembers = `${environments}/team-members`;

export const getTimeEntries = () => fetch(endpointTimeEntries)
  .then((response) => response.json());

export const postTimeEntry = (newTimeEntry) => fetch(endpointTimeEntries, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTimeEntry)
}).then((response) => response.json());

export const deleteTimeEntry = (id) => fetch(`${endpointTimeEntries}/${id}`, {
  method: 'DELETE'
}).then((response) => response.json());
