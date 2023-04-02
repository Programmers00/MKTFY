import {
  getProductMockup,
  putProductMockup,
  deleteProductMockup,
} from "./productMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get product: call api or mockup */
export const getProduct = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getProductMockup(options)
    : await request(options);
};

/** put product: call api or mockup */
export const putProduct = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putProductMockup(options)
    : await request(options);
};

/** delete product: call api or mockup */
export const deleteProduct = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await deleteProductMockup(options)
    : await request(options);
};
