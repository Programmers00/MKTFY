const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return { isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
};
export default auth;
