import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { navHeaderReducer } from './nav-header';
import { timeEntriesReducer } from './time-entries';

import { watchTimeEntries } from '../sagas/time-entries';

export const rootReducer = combineReducers({
  navHeader: navHeaderReducer,
  timeEntries: timeEntriesReducer
});

export function* rootSaga() {
  yield all([
    watchTimeEntries()
  ]);
}
