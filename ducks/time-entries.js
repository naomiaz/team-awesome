const REQUEST_TIME_ENTRIES = 'REQUEST_TIME_ENTRIES';
const REQUEST_TIME_ENTRIES_SUCCESS = 'REQUEST_TIME_ENTRIES_SUCCESS';

export const initialState = {
  items: [],
  isFormLoading: false,
  isFormVisible: false,
  error: null
};

export function timeEntriesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TIME_ENTRIES:
      return { ...state, isFormLoading: true };
    case REQUEST_TIME_ENTRIES_SUCCESS:
      return { ...state, isFormLoading: false, items: action.timeEntries };
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

// const exampleAction = {type: 'ADD_TIME_ENTRY', payload: {}}
