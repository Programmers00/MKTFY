import {
  // getManagementApiAccessTokenMockup,
  postChangePasswordMockup,
} from "./changePasswordMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

// /** get management api access token: call api or mockup */
// export const getManagementApiAccessToken = async (options) => {
//   let isTest = true; // local variable Test => true
//   return isOnlyMockup || isTest
//     ? await getManagementApiAccessTokenMockup(options)
//     : await request(options);
// };

/** put change password : call api or mockup */
export const postChangePassword = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postChangePasswordMockup(options)
    : await request(options);
};
