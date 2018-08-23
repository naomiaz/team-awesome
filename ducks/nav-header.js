// Actions
const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

// State Selectors -> To be imported in Container Component
export const isMenuVisibleSelector = (state) => state.navHeader.isMenuVisible;

// Initial State
export const initialState = {
  isMenuVisible: false,
  error: null
};

// Action Reducers
export function navHeaderReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return { ...state, isMenuVisible: action.isMenuVisible };
    default:
      return state;
  }
}

// Action Creators -> To be used in Component
export const onToggleMenuVisibility = (isMenuVisible) => ({
  type: TOGGLE_MENU_VISIBILITY,
  isMenuVisible
});
