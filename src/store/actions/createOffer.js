/** actions : create offer */
// uploade image action
export const uploadImage = (files) => {
  return (dispatch) => {
    dispatch({ type: "UPLOAD_IMAGE", images: files });
  };
};
// create offer form data action
export const createOfferFormData = (createOfferForm) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_OFFER_FORM_Data", createOfferForm });
  };
};
// reset create offer action
export const resetCreateOffer = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_CREATE_OFFER" });
  };
};
