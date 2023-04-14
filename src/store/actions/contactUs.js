import { postContactUs } from "../../api/help/contactUs";

/** action : post contact us */
// options
const options = {
  url: "/api/help/contactUs",
};
export const createContactUs = (params) => {
  return async () => {
    try {
      return await postContactUs({ ...options, params });
    } catch (error) {
      console.error("#Error postContactUs:", error);
    }
  };
};
