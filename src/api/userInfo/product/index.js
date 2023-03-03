import {
  getProductMockup,
  putProductMockup,
  deleteProductMockup,
} from "./productMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get product: call api or mockup */
export const getProduct = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getProductMockup(options)
    : await processApi(options);
};

/** put product: call api or mockup */
export const putProduct = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putProductMockup(options)
    : await processApi(options);
};

/** delete product: call api or mockup */
export const deleteProduct = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await deleteProductMockup(options)
    : await processApi(options);
};
