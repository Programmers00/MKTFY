// post upload images api
import { postUploadImages } from "../../api/userMain/createOffer";

/** set selected images action */
export const setSelectedImages = (selectedImages) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CREATE_OFFER_SELECTED_IMAGES",
      payload: selectedImages,
    });
  };
};

/** create upload images action */
// access token, request options for request upload images
const options = {
  url: "/api/Upload",
  method: "post",
};
export const createUploadImages = (images) => {
  return async () => {
    // create new FormData
    let data = new FormData();
    // append images data to formData
    for (let i = 0; i < images.length; i++) {
      data.append("image", images[i]);
    }
    try {
      // post upload images
      return await postUploadImages({
        data,
        ...options,
      });
    } catch (error) {
      console.error("#error Create Upload Images Fail", error.response);
    }
  };
};
