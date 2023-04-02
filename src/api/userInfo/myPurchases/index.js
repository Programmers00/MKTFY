import { getMyPurchasesMockup } from "./myPurchasesMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get my purchases: call api or mockup */
export const getMyPurchases = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getMyPurchasesMockup(options)
    : await request(options);
};
