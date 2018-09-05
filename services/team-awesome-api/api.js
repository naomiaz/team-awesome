const endpointTimeEntries = 'http://localhost:3001/api/time-entries';
const endpointTeamMembers = 'http://localhost:3001/api/team-members';

// TIME ENTRIES
export const getTimeEntries = () => fetch(endpointTimeEntries).then((response) => response.json());

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


// TEAM MEMBERS
export const getTeamMembers = () => fetch(endpointTeamMembers).then((response) => response.json());

export const postTeamMember = (newTeamMember) => fetch(endpointTeamMembers, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTeamMember)
}).then((response) => response.json());

export const deleteTeamMember = (id) => fetch(`${endpointTeamMembers}/${id}`, {
  method: 'DELETE'
}).then((response) => response.json());
