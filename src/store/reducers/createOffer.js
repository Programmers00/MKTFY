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
  console.log("##action", action.type);
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
    // create offer form
    case "CREATE_OFFER_FORM":
      return {
        ...state,
        createOfferForm: {
          ...state.createOfferForm,
          productName: action.createOfferForm.productName,
          description: action.createOfferForm.description,
          category: action.createOfferForm.category,
          condition: action.createOfferForm.condition,
          price: action.createOfferForm.price,
          address: action.createOfferForm.address,
          city: action.createOfferForm.city,
          images: [...state.createOfferForm.images],
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
