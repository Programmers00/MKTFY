import { resetPasswordVerificationMockup } from "./mockup/resetPasswordVerificationMockup";
// process api for request api
import { processApi } from "../utils/processApi.js";
// envs.isOnlyMockup for project mockup test
import envs from "../envs";

const isOnlyMockup = envs.isOnlyMockup;

/** getResetPasswordVerification: call api or mockup */
export const getResetPasswordVerification = async (options) => {
  let isTest = false; // if Test => true
  return isOnlyMockup || isTest
    ? await resetPasswordVerificationMockup(options)
    : await processApi(options);
};
