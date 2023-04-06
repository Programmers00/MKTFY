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
/** set product reducer */
const setProduct = (state = initialState, action) => {
  switch (action.type) {
    // set product
    case "SET_PRODUCT":
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
