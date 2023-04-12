import {
  // getProductMockup,
  putProductMockup,
  putProductCompleteMockup,
  putProductCancelMockup,
} from "./productMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

// /** get product: call api or mockup */
// export const getProduct = async (options) => {
//   let isTest = false; // local variable Test => true
//   return isOnlyMockup || isTest
//     ? await getProductMockup(options)
//     : await request(options);
// };

/** put product: call api or mockup */
export const putProduct = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putProductMockup(options)
    : await request(options);
};

/** put product complete: call api or mockup */
export const putProductComplete = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putProductCompleteMockup(options)
    : await request(options);
};

/** put product cancel: call api or mockup */
export const putProductCancel = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putProductCancelMockup(options)
    : await request(options);
};
