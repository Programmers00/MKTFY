import { getDealsData } from "../../api/userMain/contents/deals";

/** actions : get deals data, depending on params */
// get deals action
export const getDeals = (requestOptions) => {
  return async () => {
    try {
      return await getDealsData(requestOptions);
    } catch (error) {
      console.log("Error");
    }
  };
};
