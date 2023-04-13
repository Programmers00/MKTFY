import { getMyPurchases } from "../../api/userInfo/myPurchases";

/** action : get my purchase */
// options
const options = {
  url: "/api/User/purchases",
};
export const fetchMyPurchases = () => {
  return async () => {
    try {
      return await getMyPurchases({ ...options });
    } catch (error) {
      console.log("#Error get My Purchases:", error);
    }
  };
};
