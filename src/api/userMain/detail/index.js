import { getDetailMockup, postCheckoutMockup } from "./detailMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get detail: call api or mockup */
export const getDetail = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getDetailMockup(options)
    : await processApi(options);
};

/** post checkout: call api or mockup */
export const postCheckout = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postCheckoutMockup(options)
    : await processApi(options);
};
