import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer, rootSaga } from './ducks';

const sagaMiddleware = createSagaMiddleware();

const initializeStore = (initialState) => {
  const store = createStore(
    rootReducer, // combineert alle reducers uit ducks
    initialState, // default waardes
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    // dev tools worden beschikbaar, en saga is om asyc acties te timen
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return store;
};

export default initializeStore;
