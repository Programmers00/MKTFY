// init create offer form
const initialState = {
  params: {
    productName: "",
    description: "",
    category: "",
    condition: "",
    price: 0,
    address: "",
    city: "",
    images: [],
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
          productName: action.payload.productName,
          description: action.payload.description,
          category: action.payload.category,
          condition: action.payload.condition,
          price: action.payload.price,
          address: action.payload.address,
          city: action.payload.city,
          images: [...state.params.images],
        },
      };
    // reset create offer: remove all data
    case "RESET_CREATE_OFFER":
      return {
        ...initialState,
        params: {
          ...initialState.params,
          images: [...initialState.params.images],
        },
      };
    default:
      return state;
  }
};
export default setCreateOffer;
