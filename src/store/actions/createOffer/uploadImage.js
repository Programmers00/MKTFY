// upload images api
// import { postCreateOfferData } from "../../api/userMain/createOffer";
/** actions : upload images */
import { postUploadImages } from "../../../api/userMain/createOffer";

/** access token, request options for request upload images*/
const accessToken = localStorage.getItem("accessToken");
const requestUploadImagesOptions = {
  url: "/api/uploadImage",
  method: "post",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "content-type": "multipart/form-data",
  },
};

// set selected images action
export const setSelectedImages = (selectedImages) => {
  return (dispatch) => {
    dispatch({ type: "SET_SELECTED_IMAGES", selectedImages: selectedImages });
  };
};

// rqeust upload images action
export const requestUploadImages = (images) => {
  return async (dispatch) => {
    // create new FormData
    const formData = new FormData();
    // append images data to formData
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      // post upload images
      return await postUploadImages({
        formData,
        ...requestUploadImagesOptions,
      });
    } catch (error) {}
  };
};
