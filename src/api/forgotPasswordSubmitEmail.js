import { forgotPasswordSubmitEmailMockup } from "./mockup/forgotPasswordSubmitEmailMockup";
// process api for request api
import { processApi } from "../utils/processApi.js";
// envs.isOnlyMockup for project mockup test
import envs from "../envs";

const isOnlyMockup = envs.isOnlyMockup;

/** getForgotPasswordSubmitEmail: call api or mockup */
export const getForgotPasswordSubmitEmail = async (options) => {
  let isTest = false; // if Test => true
  return isOnlyMockup || isTest
    ? await forgotPasswordSubmitEmailMockup(options)
    : await processApi(options);
};
