import { createSelector } from 'reselect';
import { clientNameSelector } from './clients';

// Action types
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const FILTER_TIME_ENTRIES = 'FILTER_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
export const SAVE_TIME_ENTRY = 'SAVE_TIME_ENTRY';
export const SAVE_TIME_ENTRY_SUCCESS = 'SAVE_TIME_ENTRY_SUCESS';
export const SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY';


// State Selectors -> To be imported in Container Component
const timeEntriesRootSelector = (state) => state.timeEntries;

const timeEntriesSelector = createSelector(
  // extract items form the timeEntriesRootSelector
  timeEntriesRootSelector,
  (timeEntries) => timeEntries.items
);

export const timeEntriesActiveFilterSelector = createSelector(
  timeEntriesRootSelector,
  (timeEntries) => timeEntries.activeFilter
);

export const getTimeEntriesSelector = createSelector(
  [clientNameSelector, timeEntriesSelector, timeEntriesActiveFilterSelector],
  (clients, items, activeFilter) => (
    items
      .filter((item) => !activeFilter || item.client === activeFilter)
      .map((item) => ({
        ...item,
        clientLabel: clients.find((client) => client.value === item.clientId).title
      }))
      .sort((a, b) => (new Date(b.date) - new Date(a.date)))
  )
);

export const isFormSavingSelector = (state) => state.timeEntries.isFormSaving;
export const isFormVisibleSelector = (state) => state.timeEntries.isFormVisible;

// Initial State
export const initialState = {
  items: [],
  isLoading: false,
  isFormSaving: false,
  isFormVisible: false,
  activeFilter: '',
  error: null
};


// Action Reducers
export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TIME_ENTRY:
      return { ...state, isFormSaving: true };
    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        isFormSaving: false,
        items: state.items.filter((item) => item.id !== action.id)
      };
    case FILTER_TIME_ENTRIES:
      return { ...state, activeFilter: action.filterValue };
    case REQUEST_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case REQUEST_TIME_ENTRIES_SUCCESS:
      return { ...state, isLoading: false, items: action.timeEntries };
    case SAVE_TIME_ENTRY:
      return { ...state, isFormSaving: true };
    case SAVE_TIME_ENTRY_SUCCESS:
      return { ...state, isFormSaving: false, items: [action.newEntry, ...state.items] };
    case SET_FORM_VISIBILITY:
      return { ...state, isFormVisible: action.isFormVisible };
    default:
      return state;
  }
}


// Action Creators -> To be called in Component (and are watched by rootSaga)
export const toggleFormVisibility = (isFormVisible) => ({
  type: SET_FORM_VISIBILITY,
  isFormVisible
});

export const deleteTimeEntry = (id) => ({
  type: DELETE_TIME_ENTRY,
  id
});
export const deleteTimeEntrySuccess = (id) => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  id
});

export const filterTimeEntries = (filterValue) => ({
  type: FILTER_TIME_ENTRIES,
  filterValue
});

export const requestTimeEntries = () => ({ type: REQUEST_TIME_ENTRIES });
export const requestTimeEntriesSuccess = (timeEntries) => ({
  type: REQUEST_TIME_ENTRIES_SUCCESS,
  timeEntries
});

export const saveTimeEntry = (newTimeEntry) => ({
  type: SAVE_TIME_ENTRY,
  newTimeEntry
});
export const saveTimeEntrySuccess = (newEntry) => ({
  type: SAVE_TIME_ENTRY_SUCCESS,
  newEntry
});
