/** action : reset search params: category, search*/
export const resetSearchParams = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_SEARCH_PARAMS" });
  };
};
