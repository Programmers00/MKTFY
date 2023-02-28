import { getFaqMockup } from "./faqMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get faq: call api or mockup */
export const getFaq = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getFaqMockup(options)
    : await processApi(options);
};
