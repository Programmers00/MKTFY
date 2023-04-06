// init account information
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  // province: "",
  // country: "",
  id: "",
};
/** set account information reducer */
const setAccountInformation = (state = initialState, action) => {
  switch (action.type) {
    // set account information
    case "SET_ACCOUNT_INFORMATION":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        streetAddress: action.payload.address,
        city: action.payload.city,
        // province: action.informationAccount.province,
        // country: action.informationAccount.country,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
export default setAccountInformation;
