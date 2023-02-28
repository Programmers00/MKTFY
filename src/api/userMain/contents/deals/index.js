import { getListingsMockup } from "./dealsMockup";
// process api for request api
import { processApi } from "../../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get listings: call api or mockup */
export const getListings = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getListingsMockup(options)
    : await processApi(options);
};
