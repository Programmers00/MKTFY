import { getMyListingsCountMockup } from "./myListingsCountMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get my listings count data: call api or mockup */
export const getMyListingsCount = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getMyListingsCountMockup(options)
    : await request(options);
};
