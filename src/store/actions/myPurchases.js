import { getMyPurchases } from "../../api/userInfo/myPurchases";

/** action : get my purchase */
// options
const options = {
  url: "/api/user/myPurchases",
};
export const fetchMyPurchases = (params) => {
  return async () => {
    try {
      return await getMyPurchases({ ...options, params });
    } catch (error) {
      console.log("#Error getMyPurchases:", error);
    }
  };
};
