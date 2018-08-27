import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { navHeaderReducer } from './nav-header';
import { timeEntriesReducer } from './time-entries';

import { watchGetTimeEntries, watchPostTimeEntry, watchDeleteTimeEntry } from '../sagas/time-entries';

export const rootReducer = combineReducers({
  navHeader: navHeaderReducer,
  timeEntries: timeEntriesReducer
});

export function* rootSaga() {
  yield all([
    watchGetTimeEntries(),
    watchPostTimeEntry(),
    watchDeleteTimeEntry()
  ]);
}
