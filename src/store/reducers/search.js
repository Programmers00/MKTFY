/** initialize state */
const initailState = {
  params: {
    category: "all",
    searchWord: "",
    city: "calgary",
  },
};

// search
const search = (state = initailState, action) => {
  switch (action.type) {
    // set search params
    case "SET_SEARCH_PARAMS":
      return {
        ...state,
        params: action.params,
      };
    // reset search params(category, search word)
    case "RESET_SEARCH_PARAMS":
      return {
        ...state,
        params: {
          ...state.params,
          category: initailState.params.category,
          searchWord: initailState.params.searchWord,
        },
      };
    default:
      return state;
  }
};

export default search;
