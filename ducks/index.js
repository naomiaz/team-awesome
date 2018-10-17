import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { timeEntriesReducer } from './time-entries';
import { teamMembersReducer } from './team-members';
import { clientsReducer } from './clients';
import { loginReducer } from './login';

import { watchTimeEntries } from '../sagas/time-entries';
import { watchTeamMembers } from '../sagas/team-members';
import { watchClients } from '../sagas/clients';

export const rootReducer = combineReducers({
  timeEntries: timeEntriesReducer,
  teamMembers: teamMembersReducer,
  clients: clientsReducer,
  loginData: loginReducer
});

export function* rootSaga() {
  yield all([
    watchTimeEntries(),
    watchTeamMembers(),
    watchClients()
  ]);
}
