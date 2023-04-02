import { postContactUsMockup } from "./postContactUsMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** post contact us : call api or mockup */
export const postContactUs = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postContactUsMockup(options)
    : await request(options);
};
