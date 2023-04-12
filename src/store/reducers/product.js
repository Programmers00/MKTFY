// init create offer form
const initialState = {
  params: {
    id: "",
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
/** set product reducer */
const setProduct = (state = initialState, action) => {
  switch (action.type) {
    // set product
    case "SET_PRODUCT":
      return {
        ...state,
        params: {
          ...state.params,
          id: action.payload.id,
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
    case "RESET_PRODUCT":
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
export default setProduct;
