import { getMyListingsCountMockup } from "./myListingsCountMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get my listings count data: call api or mockup */
export const getMyListingsCount = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getMyListingsCountMockup(options)
    : await processApi(options);
};
