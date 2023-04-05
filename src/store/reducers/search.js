/** initialize state */
const initailState = {
  params: {
    category: null,
    search: "",
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
        params: action.payload,
      };
    // reset search params(category, search word)
    case "RESET_SEARCH_PARAMS":
      return {
        ...state,
        params: {
          ...state.params,
          category: initailState.params.category,
          search: initailState.params.search,
        },
      };
    default:
      return state;
  }
};

export default search;
