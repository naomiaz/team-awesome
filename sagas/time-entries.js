import { put, takeEvery } from 'redux-saga/effects';
import { getTimeEntries, postTimeEntry, deleteTimeEntry } from '../services/time-entries-api/time-entries-api';
import {
  REQUEST_TIME_ENTRIES,
  REQUEST_TIME_ENTRIES_SUCCESS,
  SAVE_TIME_ENTRY,
  SAVE_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY,
  DELETE_TIME_ENTRY_SUCCESS
} from '../ducks/time-entries';

// Generators
export function* requestTimeEntriesGenerator() {
  const timeEntries = yield getTimeEntries();
  yield put({ type: REQUEST_TIME_ENTRIES_SUCCESS, timeEntries });
}

export function* saveTimeEntryGenerator({ newTimeEntry }) {
  const newEntry = yield postTimeEntry(newTimeEntry);
  yield put({ type: SAVE_TIME_ENTRY_SUCCESS, newEntry });
}

export function* deleteTimeEntryGenerator({ id }) {
  yield deleteTimeEntry(id);
  yield put({ type: DELETE_TIME_ENTRY_SUCCESS, id });
}

// Watcher functions
// takeEvery is a helper function that listens for dispatched REQUEST_TIME_ENTRIES actions
// and runs requestTimeEntries() each time.
export function* watchGetTimeEntries() {
  yield takeEvery(REQUEST_TIME_ENTRIES, requestTimeEntriesGenerator);
}

export function* watchPostTimeEntry() {
  yield takeEvery(SAVE_TIME_ENTRY, saveTimeEntryGenerator);
}

export function* watchDeleteTimeEntry() {
  yield takeEvery(DELETE_TIME_ENTRY, deleteTimeEntryGenerator);
}
