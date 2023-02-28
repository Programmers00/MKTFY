// get faq data api
import { getFaq } from "../../api/help/faq";
/** actions : get faq data */
// options
const options = {
  url: "/api/user/faq",
};
export const fetchFaq = () => {
  return async () => {
    try {
      return await getFaq({ ...options });
    } catch (error) {
      console.log("#Error getFaq:", error);
    }
  };
};
