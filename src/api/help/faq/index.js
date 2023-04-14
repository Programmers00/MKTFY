import { getFaqMockup } from "./faqMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get faq: call api or mockup */
export const getFaq = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getFaqMockup(options)
    : await request(options);
};
