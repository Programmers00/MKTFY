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
          imagesId: [...state.params.imagesId],
        },
      };
    // reset create offer: remove all data
    case "RESET_PRODUCT":
      return {
        ...initialState,
        params: {
          ...initialState.params,
          imagesId: [...initialState.params.imagesId],
        },
      };
    default:
      return state;
  }
};
export default setProduct;
