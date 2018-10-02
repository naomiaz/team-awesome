import { createSelector } from 'reselect';
import { ClientNameModel, clientNamesSelector } from './clients';

// Action types
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const FILTER_TIME_ENTRIES = 'FILTER_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
export const SAVE_TIME_ENTRY = 'SAVE_TIME_ENTRY';
export const SAVE_TIME_ENTRY_SUCCESS = 'SAVE_TIME_ENTRY_SUCESS';
export const SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY';


export interface TimeEntryModel {
  activity: string;
  clientId: string;
  clientLabel?: string;
  date: string;
  id?: number;
  timeFrom: string;
  timeTo: string;
}

interface TimeEntryState {
  items: TimeEntryModel[];
  isLoading: boolean;
  isFormSaving: boolean;
  isFormVisible: boolean;
  activeFilter: string;
  error: object;
}

// State Selectors -> To be imported in Container Component
const timeEntriesRootSelector = (state) => state.timeEntries;

export const timeEntriesSelector = createSelector(
  // extract items form the timeEntriesRootSelector
  timeEntriesRootSelector,
  (timeEntries: TimeEntryState) => timeEntries.items
);

export const timeEntriesActiveFilterSelector = createSelector(
  timeEntriesRootSelector,
  (timeEntries: TimeEntryState) => timeEntries.activeFilter
);

export const getTimeEntriesSelector = createSelector(
  [clientNamesSelector, timeEntriesSelector, timeEntriesActiveFilterSelector],
  (clientNames: ClientNameModel[], items: TimeEntryState['items'], activeFilter: TimeEntryState['activeFilter']) => (
    items
      .filter((item) => !activeFilter || item.clientId === activeFilter)
      .map((item) => ({
        ...item,
        clientLabel: clientNames.find((clientName) => clientName.value === item.clientId).title
      }))
      .sort((a, b) => (new Date(b.date) - new Date(a.date)))
  )
);

// SELECTORS HERSCHRIJVEN
export const isFormSavingSelector = (state) => state.timeEntries.isFormSaving;
export const isFormVisibleSelector = (state) => state.timeEntries.isFormVisible;

// Initial State
export const initialState: TimeEntryState = {
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
export const toggleFormVisibility = (isFormVisible: TimeEntryState['isFormVisible']) => ({
  type: SET_FORM_VISIBILITY,
  isFormVisible
});

export const deleteTimeEntry = (id: TimeEntryModel['id']) => ({
  type: DELETE_TIME_ENTRY,
  id
});
export const deleteTimeEntrySuccess = (id: TimeEntryModel['id']) => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  id
});

export const filterTimeEntries = (filterValue: TimeEntryState['activeFilter']) => ({
  type: FILTER_TIME_ENTRIES,
  filterValue
});

export const requestTimeEntries = () => ({ type: REQUEST_TIME_ENTRIES });
export const requestTimeEntriesSuccess = (timeEntries: TimeEntryModel[]) => ({
  type: REQUEST_TIME_ENTRIES_SUCCESS,
  timeEntries
});

export const saveTimeEntry = (newTimeEntry: TimeEntryModel) => ({
  type: SAVE_TIME_ENTRY,
  newTimeEntry
});
export const saveTimeEntrySuccess = (newEntry: TimeEntryModel) => ({
  type: SAVE_TIME_ENTRY_SUCCESS,
  newEntry
});
