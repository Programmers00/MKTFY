/** initialize state */
const initailState = {
  params: {
    category: "",
    searchWord: "",
    city: "",
  },
};

// search
const search = (state = initailState, action) => {
  switch (action.type) {
    case "SET_SEARCH_PARAMS":
      return {
        ...state,
        params: action.params,
      };
    default:
      return state;
  }
};

export default search;
