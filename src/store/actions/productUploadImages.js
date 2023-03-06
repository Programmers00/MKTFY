// post upload images api
import { postUploadImages } from "../../api/userMain/createOffer";

// access token, request options for request upload images
const accessToken = localStorage.getItem("accessToken");
const options = {
  url: "/api/uploadImage",
  method: "post",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "content-type": "multipart/form-data",
  },
};

/** set selected images action */
export const setSelectedImages = (selectedImages) => {
  return (dispatch) => {
    dispatch({
      type: "SET_PRODUCT_SELECTED_IMAGES",
      selectedImages: selectedImages,
    });
  };
};

/** create upload images action */
export const createUploadImages = (images) => {
  return async () => {
    // create new FormData
    const formData = new FormData();
    const filteredImages = images.filter((image) => typeof image === "object");
    // append image data to formData
    for (let i = 0; i < filteredImages.length; i++) {
      formData.append("image", filteredImages[i]);
    }
    try {
      // post upload images
      return await postUploadImages({
        formData,
        ...options,
      });
    } catch (error) {}
  };
};
