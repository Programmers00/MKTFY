import { getProductMockup } from "./productMockup";
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
