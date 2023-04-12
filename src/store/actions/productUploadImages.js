// post upload images api
import { postUploadImages } from "../../api/userMain/createOffer";

/** set selected images action */
export const setSelectedImages = (selectedImages) => {
  return (dispatch) => {
    dispatch({
      type: "SET_PRODUCT_SELECTED_IMAGES",
      selectedImages: selectedImages,
    });
  };
};

/** create upload images action: filter */
// options for request upload images
const options = {
  url: "/api/Upload",
  method: "post",
};
export const createUploadImages = (images) => {
  return async () => {
    // create new FormData
    const data = new FormData();
    const filteredImages = images.filter((image) => typeof image === "object");
    // append image data to formData
    for (let i = 0; i < filteredImages.length; i++) {
      data.append("image", filteredImages[i]);
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
