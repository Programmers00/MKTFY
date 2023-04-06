/** initial state */
const initialState = {
  selectedImages: [],
};
/** set selected images */
const setSelectedImages = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CREATE_OFFER_SELECTED_IMAGES":
      return {
        ...state,
        selectedImages: action.payload,
      };
    default:
      return state;
  }
};

export default setSelectedImages;
