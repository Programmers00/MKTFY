import { resetPasswordCompleteMockup } from "./mockup/resetPasswordCompleteMockup";
// process api for request api
import { processApi } from "../utils/processApi.js";
// envs.isOnlyMockup for project mockup test
import envs from "../envs";

const isOnlyMockup = envs.isOnlyMockup;

/** getResetPasswordComplete: call api or mockup */
export const getResetPasswordComplete = async (options) => {
  let isTest = false; // if Test => true
  return isOnlyMockup || isTest
    ? await resetPasswordCompleteMockup(options)
    : await processApi(options);
};
