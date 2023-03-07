// init account information
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  province: "",
  country: "",
};
/** set account information reducer */
const setAccountInformation = (state = initialState, action) => {
  switch (action.type) {
    // set account information
    case "SET_ACCOUNT_INFORMATION":
      return {
        ...state,
        firstName: action.informationAccount.firstName,
        lastName: action.informationAccount.lastName,
        email: action.informationAccount.email,
        phone: action.informationAccount.phone,
        streetAddress: action.informationAccount.streetAddress,
        city: action.informationAccount.city,
        province: action.informationAccount.province,
        country: action.informationAccount.country,
      };
    default:
      return state;
  }
};
export default setAccountInformation;
