// init token
const initialState = {
  accessToken: null,
};
/** set token reducer */
const token = (state = initialState, action) => {
  switch (action.type) {
    // set product
    case "SET_TOKEN":
      return {
        ...state,
        accessToken: action.accessToken,
      };
    // reset token: remove all data
    case "RESET_TOKEN":
      return {
        ...initialState,
        accessToken: initialState.accessToken,
      };
    default:
      return state;
  }
};
export default token;
