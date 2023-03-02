/** action : reset search params: category, searchWord*/
export const resetSearchParams = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_SEARCH_PARAMS" });
  };
};
