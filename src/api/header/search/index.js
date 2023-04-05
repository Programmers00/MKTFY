import { postSearchMockup } from "./searchMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** post search data: call api or mockup */
export const getSearch = async (options) => {
  console.log("#options", options);
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postSearchMockup(options)
    : await request(options);
};
