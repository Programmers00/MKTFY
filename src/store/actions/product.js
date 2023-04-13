import {
  getProductById,
  putProduct,
  putProductComplete,
  putProductCancel,
} from "../../api/userInfo/product";

/** get options */
const getOptions = {
  url: "/api/Product",
};

/** action : get product */
export const fetchProductById = (data) => {
  return async () => {
    try {
      return await getProductById({
        ...getOptions,
        url: `${getOptions.url}/${data.id}`,
      });
    } catch (error) {
      console.error("#Fetch Product By Id Fail", error.response);
    }
  };
};

/** action : set product */
export const setProduct = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_PRODUCT", payload: params });
  };
};

/** action : reset product */
export const resetProduct = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_PRODUCT" });
  };
};

/** action: put product */
/** put options */
const options = {
  url: "/api/Product",
  method: "put",
};
export const updateProduct = (data) => {
  return async () => {
    try {
      return await putProduct({
        ...options,
        data,
      });
    } catch (error) {
      console.error("#Update Product Fail", error.response);
    }
  };
};

/** action : put product complete*/
/** put options */
const completeOptions = {
  url: "/api/Product/complete",
  method: "put",
};
export const updateProductComplete = (data) => {
  return async () => {
    try {
      return await putProductComplete({
        ...completeOptions,
        url: `${completeOptions.url}/${data.id}`,
      });
    } catch (error) {
      console.error("#Update Product Complete Fail", error.response);
    }
  };
};

/** action : delete product */
/** cancel options */
const cancelOptions = {
  url: "/api/Product/cancel",
  method: "put",
};
export const updateProductCancel = (data) => {
  return async () => {
    try {
      return await putProductCancel({
        ...cancelOptions,
        url: `${cancelOptions.url}/${data.id}`,
      });
    } catch (error) {
      console.error("#Update Product Cancel Fail", error.response);
    }
  };
};

/** action : delete product */
/** cancel options */
const cancelsaleOptions = {
  url: "/api/Product/cancelsale",
  method: "put",
};
export const updateProductCancelsale = (data) => {
  return async () => {
    try {
      return await putProductCancel({
        ...cancelsaleOptions,
        url: `${cancelsaleOptions.url}/${data.id}`,
      });
    } catch (error) {
      console.error("#Update Product Cancel Sale Fail", error.response);
    }
  };
};
