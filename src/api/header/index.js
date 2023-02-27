import { accountInformationMockup } from "./accountInformationMockup";
// process api for request api
import { processApi } from "../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get account information data: call api or mockup */
export const getAccountInformationData = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await accountInformationMockup(options)
    : await processApi(options);
};
