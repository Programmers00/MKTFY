import { getMyPurchasesMockup } from "./myPurchasesMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get my purchases: call api or mockup */
export const getMyPurchases = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getMyPurchasesMockup(options)
    : await processApi(options);
};
