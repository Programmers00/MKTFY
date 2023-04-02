import { getDetailMockup, postCheckoutMockup } from "./detailMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get detail: call api or mockup */
export const getDetail = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getDetailMockup(options)
    : await request(options);
};

/** post checkout: call api or mockup */
export const postCheckout = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postCheckoutMockup(options)
    : await request(options);
};
