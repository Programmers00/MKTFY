// get faq data api
import { getFaq } from "../../api/userMain/faq";
/** actions : get faq data */
/** get faq action*/
export const fetchFaq = (options) => {
  return async () => {
    try {
      return await getFaq(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
