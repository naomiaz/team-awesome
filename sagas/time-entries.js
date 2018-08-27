import { put, takeEvery } from 'redux-saga/effects';
import { getTimeEntries, postTimeEntry, deleteTimeEntry } from '../services/time-entries-api/time-entries-api';
import {
  REQUEST_TIME_ENTRIES,
  SAVE_TIME_ENTRY,
  DELETE_TIME_ENTRY,
  requestTimeEntriesSuccess,
  saveTimeEntrySuccess,
  deleteTimeEntrySuccess
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
// takeEvery = helper function that listens for dispatched actions and then runs generator functions
export function* watchGetTimeEntries() {
  yield takeEvery(REQUEST_TIME_ENTRIES, requestTimeEntriesGenerator);
}

export function* watchPostTimeEntry() {
  yield takeEvery(SAVE_TIME_ENTRY, saveTimeEntryGenerator);
}

export function* watchDeleteTimeEntry() {
  yield takeEvery(DELETE_TIME_ENTRY, deleteTimeEntryGenerator);
}
