// Actions
const SAVE_LOGIN_DATA = 'SAVE_LOGIN_DATA';

// State Selectors -> To be imported in Container Component
export const loginDataSelector = (state) => state.loginData.loginData;

// Initial State
export const initialState = {
  loginData: {},
  error: null
};

// Action Reducers
export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LOGIN_DATA:
      return { ...state, loginData: action.loginData };
    default:
      return state;
  }
}

// Action Creators -> To be used in Component
export const saveLoginData = (loginData) => ({
  type: SAVE_LOGIN_DATA,
  loginData
});
