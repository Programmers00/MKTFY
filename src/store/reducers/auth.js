const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case "authenticated":
      return { isAuthenticated: action.isAuthenticated };
    default:
      return state;
  }
};
export default auth;
