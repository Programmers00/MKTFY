import { getDetail, putCheckout } from "../../api/userMain/detail"; // api

/** actions : get detail  */
// options
const detailOptions = {
  url: "/api/Product",
};
export const fetchDetail = (data) => {
  return async () => {
    try {
      return await getDetail({
        ...detailOptions,
        url: `${detailOptions.url}/${data.id}`,
      });
    } catch (error) {
      console.error("#Error fetchDetail:", error);
    }
  };
};

/** post checkout action */
// options
const checkoutOptions = {
  url: "/api/Product/checkout",
  method: "put",
};
export const updateCheckout = (data) => {
  return async () => {
    try {
      return await putCheckout({
        ...checkoutOptions,
        url: `${checkoutOptions.url}/${data.id}`,
      });
    } catch (error) {
      console.log("#Error putCheckout:", error);
    }
  };
};
