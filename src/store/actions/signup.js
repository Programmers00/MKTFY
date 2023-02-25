/** actions : signup */
// signup action
export const signup = (signupForm) => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP", signupForm });
  };
};
// create password action
export const createPassword = (password) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_PASSWORD",
      password,
    });
  };
};
// reset create offer action
export const resetSignup = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_SIGNUP" });
  };
};
