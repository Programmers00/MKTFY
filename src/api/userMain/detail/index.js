import { detailMockup } from "./detailMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** getDetail: call api or mockup */
export const getDetail = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await detailMockup(options)
    : await processApi(options);
};
