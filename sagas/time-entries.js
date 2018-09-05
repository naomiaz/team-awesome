import { put, takeEvery } from 'redux-saga/effects';
import { getTimeEntries, postTimeEntry, deleteTimeEntry } from '../services/team-awesome-api/api';
import {
  DELETE_TIME_ENTRY,
  deleteTimeEntrySuccess,
  REQUEST_TIME_ENTRIES,
  requestTimeEntriesSuccess,
  SAVE_TIME_ENTRY,
  saveTimeEntrySuccess
} from '../ducks/time-entries';

// Generator functions
export function* requestTimeEntriesGenerator() {
  const timeEntries = yield getTimeEntries();
  yield put(requestTimeEntriesSuccess(timeEntries));
}

export function* saveTimeEntryGenerator({ newTimeEntry }) {
  const newEntry = yield postTimeEntry(newTimeEntry);
  yield put(saveTimeEntrySuccess(newEntry));
}

export function* deleteTimeEntryGenerator({ id }) {
  yield deleteTimeEntry(id);
  yield put(deleteTimeEntrySuccess(id));
}

// Watcher functions
export function* watchTimeEntries() {
  // takeEvery listens for dispatched actions and then runs generator functions
  yield takeEvery(DELETE_TIME_ENTRY, deleteTimeEntryGenerator);
  yield takeEvery(REQUEST_TIME_ENTRIES, requestTimeEntriesGenerator);
  yield takeEvery(SAVE_TIME_ENTRY, saveTimeEntryGenerator);
}
