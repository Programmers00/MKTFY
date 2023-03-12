// set loading false actions
/** action : set isLoading fasle */
export const setLoadingTrue = (title) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_TRUE", title: title });
  };
};

/** set loading true action */
export const setLoadingFalse = () => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_FALSE" });
  };
};
