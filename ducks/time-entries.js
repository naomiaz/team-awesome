// Action types
export const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
export const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';
export const SAVE_TIME_ENTRY = 'SAVE_TIME_ENTRY';
export const SAVE_TIME_ENTRY_SUCCESS = 'SAVE_TIME_ENTRY_SUCESS';
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = 'DELETE_TIME_ENTRY_SUCCESS';
export const SET_FORM_VISIBILITY = 'SET_FORM_VISIBILITY';

// State Selectors -> To be imported in Container Component
// export const getTimeEntriesSelector = (state) => state.timeEntries.items;
export const getTimeEntriesSelector = (state) => state.timeEntries.items.sort((a, b) => (new Date(b.date) - new Date(a.date)));
export const isFormSavingSelector = (state) => state.timeEntries.isFormSaving;
export const isFormVisibleSelector = (state) => state.timeEntries.isFormVisible;

// Initial State
export const initialState = {
  items: [],
  isLoading: false,
  isFormSaving: false,
  isFormVisible: false,
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

export const requestTimeEntries = () => ({ type: REQUEST_TIME_ENTRIES });

export const saveTimeEntry = (newTimeEntry) => ({
  type: SAVE_TIME_ENTRY,
  newTimeEntry
});
