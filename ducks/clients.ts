import { createSelector } from 'reselect';


// Action types
export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'REQUEST_CLIENTS_SUCCESS';
export const SAVE_CLIENT = 'SAVE_CLIENT';
export const SAVE_CLIENT_SUCCESS = 'SAVE_CLIENT_SUCCESS';
export const SORT_CLIENTS_BY = 'SORT_CLIENTS_BY';
export const SORT_CLIENTS_DIRECTION = 'SORT_CLIENTS_DIRECTION';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';

export interface ClientNameModel {
  title: string;
  value: string;
}

export interface ClientModel {
  clientName: string;
  address: string;
  zip: string;
  city: string;
  chamberOfCommerce: string;
  email: string;
  phone: string;
  website: string;
  avatar: string;
  remarks: string;
  id?: string;
}

interface ClientState {
  clients: ClientModel[];
  isLoading: boolean,
  isFormSaving: boolean,
  sortBy: string,
  sortDirection: string,
  error: object;
}

// State Selectors -> To be imported in Container Component
const clientsRootSelector = (state) => state.clients;

export const clientsSelector = createSelector(
  // extract clients form the clientsRootSelector
  clientsRootSelector,
  (clients: ClientState) => clients.clients
);

export const clientsSortBySelector = createSelector(
  clientsRootSelector,
  (clients: ClientState) => clients.sortBy
);

export const clientsSortDirectionSelector = createSelector(
  clientsRootSelector,
  (clients: ClientState) => clients.sortDirection
);

export const getClientsSelector = createSelector(
  [clientsSelector, clientsSortBySelector, clientsSortDirectionSelector],
  (clients: ClientState['clients'], sortBy: ClientState['sortBy'], sortDirection: ClientState['sortDirection']) => (
    !sortBy
      ? clients
      : [...clients].sort((a, b) => {
        const clientA = a[sortBy].toUpperCase();
        const clientB = b[sortBy].toUpperCase();
        if (clientA < clientB) { return sortDirection === 'ascending' ? -1 : 1; }
        if (clientA > clientB) { return sortDirection === 'ascending' ? 1 : -1; }
        return 0;
      })
  )
);

export const clientNamesSelector = createSelector(
  clientsSelector,
  (clients: ClientState['clients']) => clients.reduce((accumulator, currentValue) => ([
    ...accumulator,
    { title: currentValue.clientName, value: currentValue.id }
  ]), [])
);

export const isFormSavingSelector = createSelector(
  clientsRootSelector,
  (clients: ClientState) => clients.isFormSaving
);


// Initial State
export const initialState: ClientState = {
  clients: [],
  isLoading: false,
  isFormSaving: false,
  sortBy: '',
  sortDirection: 'ascending',
  error: null
};


// Action Reducers
export function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_CLIENT:
      return { ...state, isFormSaving: true };
    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        isFormSaving: false,
        clients: state.clients.filter((client) => client.id !== action.id)
      };
    case REQUEST_CLIENTS:
      return { ...state, isLoading: true };
    case REQUEST_CLIENTS_SUCCESS:
      return { ...state, isLoading: false, clients: action.clients };
    case SAVE_CLIENT:
      return { ...state, isFormSaving: true };
    case SAVE_CLIENT_SUCCESS:
      return { ...state, isFormSaving: false, clients: [action.newClient, ...state.clients] };
    case SORT_CLIENTS_BY:
      return { ...state, sortBy: action.sortBy };
    case SORT_CLIENTS_DIRECTION:
      return { ...state, sortDirection: action.sortDirection };
    default:
      return state;
  }
}


// Action Creators -> To be called in Component (and are watched by rootSaga)
export const deleteClient = (id: ClientModel['id']) => ({
  type: DELETE_CLIENT,
  id
});

export const deleteClientSuccess = (id: ClientModel['id']) => ({
  type: DELETE_CLIENT_SUCCESS,
  id
});

export const sortClientsBy = (sortBy: ClientState['sortBy']) => ({
  type: SORT_CLIENTS_BY,
  sortBy
});
export const sortClientsDirection = (sortDirection: ClientState['sortDirection']) => ({
  type: SORT_CLIENTS_DIRECTION,
  sortDirection
});

export const requestClients = () => ({ type: REQUEST_CLIENTS });

export const requestClientsSuccess = (clients: ClientModel[]) => ({
  type: REQUEST_CLIENTS_SUCCESS,
  clients
});

export const saveClient = (newClient: ClientModel) => ({
  type: SAVE_CLIENT,
  newClient
});

export const saveClientSuccess = (newClient: ClientModel) => ({
  type: SAVE_CLIENT_SUCCESS,
  newClient
});
