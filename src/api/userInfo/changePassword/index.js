import {
  getManagementApiAccessTokenMockup,
  putChangePasswordMockup,
} from "./changePasswordMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get management api access token: call api or mockup */
export const getManagementApiAccessToken = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getManagementApiAccessTokenMockup(options)
    : await request(options);
};

/** put change password : call api or mockup */
export const putChangePassword = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putChangePasswordMockup(options)
    : await request(options);
};
