// Actions
const SAVE_LOGIN_DATA = 'SAVE_LOGIN_DATA';

// State Selectors
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

// Action Creators
export const saveLoginData = (loginData) => ({
  type: SAVE_LOGIN_DATA,
  loginData
});
