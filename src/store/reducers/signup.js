const signupForm = {
  connection: "Username-Password-Authentication",
  email: "",
  password: "",
  name: "",
  // nickname: "",
  // picture: "http://example.org/jdoe.png",
  user_metadata: {
    firstName: "",
    lastName: "",
    phone: "",
    streetAddress: "",
    city: "",
    province: "",
    country: "",
  },
};

const signup = (
  state = {
    signupForm: signupForm,
  },
  action
) => {
  switch (action.type) {
    // sign up
    case "SIGNUP":
      return {
        ...state,
        signupForm: {
          ...state.signupForm,
          email: action.signupForm.email,
          name: action.signupForm.lastName + action.signupForm.firstName,
          user_metadata: {
            ...state.signupForm.user_metadata,
            firstName: action.signupForm.firstName,
            lastName: action.signupForm.lastName,
            phone: action.signupForm.phone,
            streetAddress: action.signupForm.streetAddress,
            city: action.signupForm.city,
            province: action.signupForm.province,
            country: action.signupForm.country,
          },
        },
      };
    // new password
    case "CREATE_PASSWORD":
      return {
        ...state,
        signupForm: {
          ...state.signupForm,
          password: action.password,
        },
      };
    // init: remove all data
    case "INIT":
      return {
        signupForm,
      };
    default:
      return state;
  }
};
export default signup;
