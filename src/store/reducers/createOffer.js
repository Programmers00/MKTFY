const createOfferForm = {
  productName: "",
  description: "",
  category: "",
  condition: "",
  price: "",
  address: "",
  city: "",
  images: [],
};

const createOffer = (
  state = {
    createOfferForm: createOfferForm,
  },
  action
) => {
  switch (action.type) {
    // upload image
    case "UPLOAD_IMAGE":
      return {
        ...state,
        createOfferForm: {
          ...state.createOfferForm,
          images: [...action.images],
        },
      };
    // init: remove all data
    case "INIT":
      return {
        createOfferForm,
      };
    default:
      return state;
  }
};
export default createOffer;
