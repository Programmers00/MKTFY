import { getDealsMockup, getCategoryMockup } from "./dealsMockup";
// request api
import request from "../../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get Deals: call api or mockup */
export const getDeals = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getDealsMockup(options)
    : await request(options);
};

/** get Category: call api or mockup */
export const getCategory = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getCategoryMockup(options)
    : await request(options);
};
