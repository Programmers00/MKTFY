/** action : set search params*/
export const setSearchParams = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_PARAMS", params });
  };
};
