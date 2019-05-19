const REGISTER = 'REGISTER';


export const loginDataSelector = (state) => state.loginData.loginData;


export const initialState = {
  loginData: {},
  error: null
};


export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state, loginData: action.loginData };
    default:
      return state;
  }
}


export const register = (loginData) => ({
  type: REGISTER,
  loginData
});
