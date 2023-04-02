import { getMyListingsMockup } from "./myListingsMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get my listings: call api or mockup */
export const getMyListings = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getMyListingsMockup(options)
    : await request(options);
};
