/** action : set token */
export const setToken = (accessToken) => {
  return (dispatch) => {
    dispatch({ type: "SET_TOKEN", accessToken });
  };
};

/** action : reset token */
export const resetToken = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_TOKEN" });
  };
};
