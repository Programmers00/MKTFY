/** initial state */
const initialState = {
  selectedImages: [],
};
/** set selected images */
const setSelectedImages = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_SELECTED_IMAGES":
      return {
        ...state,
        selectedImages: action.selectedImages,
      };
    default:
      return state;
  }
};

export default setSelectedImages;
