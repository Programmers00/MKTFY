import { dealsMockup } from "./dealsMockup";
// process api for request api
import { processApi } from "../../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** getDeals: call api or mockup */
export const getDealsData = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await dealsMockup(options)
    : await processApi(options);
};