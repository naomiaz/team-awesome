import { put, takeEvery } from 'redux-saga/effects';
import { getClients, postClient, deleteClient } from '../services/team-awesome-api/api';
import {
  DELETE_CLIENT,
  deleteClientSuccess,
  REQUEST_CLIENTS,
  requestClientsSuccess,
  SAVE_CLIENT,
  saveClientSuccess
} from '../ducks/clients';

// Generator functions
export function* requestClientsGenerator() {
  const clients = yield getClients();
  yield put(requestClientsSuccess(clients));
}

export function* saveClientGenerator({ newClient }) {
  yield postClient(newClient);
  // const newClient = yield postClient(newClient);
  yield put(saveClientSuccess(newClient));
}

export function* deleteClientGenerator({ id }) {
  yield deleteClient(id);
  yield put(deleteClientSuccess(id));
}

// Watcher functions
export function* watchClients() {
  // takeEvery listens for dispatched actions and then runs generator functions
  yield takeEvery(DELETE_CLIENT, deleteClientGenerator);
  yield takeEvery(REQUEST_CLIENTS, requestClientsGenerator);
  yield takeEvery(SAVE_CLIENT, saveClientGenerator);
}
