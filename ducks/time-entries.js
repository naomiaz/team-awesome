const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
const SAVE_TIME_ENTRY = 'SAVE_TIME_ENTRY';
const SAVE_TIME_ENTRY_SUCCESS = 'SAVE_TIME_ENTRY_SUCESS';

export const getTimeEntries = (state) => state.timeEntries.items;

export const initialState = {
  items: [],
  isLoading: false,
  isSaving: false,
  isFormVisible: false,
  error: null
};

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TIME_ENTRIES:
      return { ...state, isLoading: true };
    case REQUEST_TIME_ENTRIES_SUCCESS:
      return { ...state, isLoading: false, items: action.timeEntries };
    case SAVE_TIME_ENTRY:
      return { ...state, isSaving: true };
    case SAVE_TIME_ENTRY_SUCCESS:
      return { ...state, isSaving: false, items: [action.newTimeEntry, ...state.items] };
    default:
      return state;
  }
}

export const requestTimeEntries = () => ({
  type: REQUEST_TIME_ENTRIES
});

export const requestTimeEntriesSuccess = (timeEntries) => ({
  type: REQUEST_TIME_ENTRIES_SUCCESS,
  timeEntries
});

export const saveTimeEntry = () => ({
  type: SAVE_TIME_ENTRY
});

export const saveTimeEntrySuccess = (newTimeEntry) => ({
  type: SAVE_TIME_ENTRY_SUCCESS,
  newTimeEntry
});

// const exampleAction = {type: 'ADD_TIME_ENTRY', payload: {}}
