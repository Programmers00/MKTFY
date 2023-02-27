// init create offer form
const initialState = {
  params: {
    productName: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    address: "",
    city: "",
    imagesId: [],
  },
};
/** set create offer reducer */
const setCreateOffer = (state = initialState, action) => {
  switch (action.type) {
    // set offer form
    case "SET_CREATE_OFFER":
      return {
        ...state,
        params: {
          ...state.params,
          productName: action.params.productName,
          description: action.params.description,
          category: action.params.category,
          condition: action.params.condition,
          price: action.params.price,
          address: action.params.address,
          city: action.params.city,
          imagesId: [...state.params.imagesId],
        },
      };
    // reset create offer: remove all data
    case "RESET_CREATE_OFFER":
      return {
        state: initialState,
      };
    default:
      return state;
  }
};
export default setCreateOffer;
