// create offer api
import { postCreateOfferData } from "../../api/userMain/createOffer";
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
// request create offer acction
export const requestCreateOffer = (createOfferForm) => {
  return async (dispatch) => {
    // dispatch({ type: "REQUEST_CREATE_OFFER" });
    try {
      return await postCreateOfferData(createOfferForm);
    } catch (error) {
      console.log("##error", error);
    }
  };
};
