import { getDetail, postCheckout } from "../../api/userMain/detail"; // api

/** actions : get detail  */
// options
const detailOptions = {
  url: "/detail",
};
export const fetchDetail = (params) => {
  return async () => {
    try {
      return await getDetail({ ...detailOptions, params });
    } catch (error) {
      console.log("#Error fetchDetail:", error);
    }
  };
};

/** post checkout action */
// options
const checkoutOptions = {
  url: "/checkout",
  method: "post",
};
export const createCheckout = (params) => {
  return async () => {
    try {
      return await postCheckout({ ...checkoutOptions, params });
    } catch (error) {
      console.log("#Error postCheckout:", error);
    }
  };
};
