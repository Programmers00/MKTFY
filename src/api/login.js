import { loginMockup } from "./mockup/loginMockup";
// process api for request api
import { processApi } from "../utils/processApi.js";
// envs.isOnlyMockup for project mockup test
import envs from "../envs";

const isOnlyMockup = envs.isOnlyMockup;

/** getLogin: call api or mockup */
export const getLogin = async (options) => {
  let isTest = false; // if Test => true
  return isOnlyMockup || isTest
    ? await loginMockup(options)
    : await processApi(options);
};
