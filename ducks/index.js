import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { timeEntriesReducer } from './time-entries';

export const rootReducer = combineReducers({
  timeEntries: timeEntriesReducer
});

export function* rootSaga() {
  yield all([]);
}
