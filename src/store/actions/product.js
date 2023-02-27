import { getProduct } from "../../api/userInfo/product";

/** actions : get product data */
export const fetchProduct = (options) => {
  return async () => {
    try {
      return await getProduct(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
