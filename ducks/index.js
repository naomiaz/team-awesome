import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { navHeaderReducer } from './nav-header';
import { timeEntriesReducer } from './time-entries';
import { teamMembersReducer } from './team-members';
// import { clientsReducer } from './clients';

import { watchTimeEntries } from '../sagas/time-entries';
import { watchTeamMembers } from '../sagas/team-members';
// import { watchClients } from '../sagas/clients';

export const rootReducer = combineReducers({
  navHeader: navHeaderReducer,
  timeEntries: timeEntriesReducer,
  teamMembers: teamMembersReducer,
  // clients: clientsReducer
});

export function* rootSaga() {
  yield all([
    watchTimeEntries(),
    watchTeamMembers(),
    // watchClients()
  ]);
}
