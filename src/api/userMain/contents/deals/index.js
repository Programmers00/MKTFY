import { getListingsMockup } from "./dealsMockup";
// request api
import request from "../../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get listings: call api or mockup */
export const getListings = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getListingsMockup(options)
    : await request(options);
};
