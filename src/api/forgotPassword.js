import { forgotPasswordMockup } from "./mockup/forgotPasswordMockup";
// process api for request api
import { processApi } from "../utils/processApi.js";
// envs.isOnlyMockup for project mockup test
import envs from "../envs";

const isOnlyMockup = envs.isOnlyMockup;

/** getForgotPassword: call api or mockup */
export const getForgotPassword = async (options) => {
  let isTest = false; // if Test => true
  return isOnlyMockup || isTest
    ? await forgotPasswordMockup(options)
    : await processApi(options);
};
