import { getMyPurchases } from "../../api/userInfo/myPurchases";

/** actions : get account information data */
export const fetchMyPurchases = (options) => {
  return async () => {
    try {
      return await getMyPurchases(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
