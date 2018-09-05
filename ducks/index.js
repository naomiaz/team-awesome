import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { navHeaderReducer } from './nav-header';
import { timeEntriesReducer } from './time-entries';
import { teamMembersReducer } from './team-members';

import { watchTimeEntries } from '../sagas/time-entries';
import { watchTeamMembers } from '../sagas/team-members';

export const rootReducer = combineReducers({
  navHeader: navHeaderReducer,
  timeEntries: timeEntriesReducer,
  teamMembers: teamMembersReducer
});

export function* rootSaga() {
  yield all([
    watchTimeEntries(),
    watchTeamMembers()
  ]);
}
