import {
  // getProduct,
  putProduct,
  putProductComplete,
  putProductCancel,
} from "../../api/userInfo/product";

// /** get options */
// const getOptions = {
//   url: "/api/product",
// };

// /** action : get product */
// export const fetchProduct = (params) => {
//   return async () => {
//     try {
//       return await getProduct({ ...getOptions, params });
//     } catch (error) {
//       console.log("Error");
//     }
//   };
// };

/** action : set product */
export const setProduct = (params) => {
  console.log("##", params);
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
      console.log("Error", error.response);
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
      console.log("Error", error.response);
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
      console.log("Error", error.response);
    }
  };
};
