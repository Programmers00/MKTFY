// init loading
const initialState = {
  isLoading: false,
  title: "",
};
/** loading reducer */
const loading = (state = initialState, action) => {
  switch (action.type) {
    // set loading true
    case "SET_LOADING_TRUE":
      return {
        ...state,
        isLoading: true,
        title: action.title,
      };
    // set loading false
    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
        title: initialState.title,
      };
    default:
      return state;
  }
};
export default loading;
