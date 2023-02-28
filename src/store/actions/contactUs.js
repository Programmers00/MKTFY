import { postContactUs } from "../../api/help/contactUs";

/** actions : post contact us */
// post contact us action
export const createContactUs = (requestOptions) => {
  return async () => {
    try {
      return await postContactUs(requestOptions);
    } catch (error) {
      console.log("Error");
    }
  };
};
