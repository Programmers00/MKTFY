import {
  getProduct,
  putProduct,
  deleteProduct,
} from "../../api/userInfo/product";

/** get options */
const getOptions = {
  url: "/api/product",
};

/** action : get product */
export const fetchProduct = (params) => {
  return async () => {
    try {
      return await getProduct({ ...getOptions, params });
    } catch (error) {
      console.log("Error");
    }
  };
};

/** action : set product */
export const setProduct = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_PRODUCT", params });
  };
};
/** actio : set product images id */
export const setProductImagesId = (imagesId) => {
  console.log("#imagesId2=>", imagesId);

  return (dispatch) => {
    dispatch({ type: "SET_PRODUCT_IMAGES_ID", imagesId });
  };
};

/** action : reset product */
export const resetProduct = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_PRODUCT" });
  };
};

/** put options */
const putOptions = {
  url: "/api/product",
  method: "put",
};

/** action : put product */
export const updateProduct = (params) => {
  console.log("#update params", params);
  return async () => {
    try {
      return await putProduct({ ...putOptions, params });
    } catch (error) {
      console.log("Error");
    }
  };
};

/** delete options */
const deleteOptions = {
  url: "/api/product",
  method: "delete",
};

/** action : delete product */
export const removeProduct = (params) => {
  return async () => {
    try {
      return await deleteProduct({ ...deleteOptions, params });
    } catch (error) {
      console.log("Error");
    }
  };
};
