import { postContactUsMockup } from "./postContactUsMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** post contact us : call api or mockup */
export const postContactUs = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postContactUsMockup(options)
    : await processApi(options);
};
