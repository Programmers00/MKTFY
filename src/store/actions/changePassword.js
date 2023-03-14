// post create offer api
import {
  getManagementApiAccessToken,
  putChangePassword,
} from "../../api/userInfo/changePassword";

let yourMgmtApiAccessToken = "";
/** actions : change password */

// change password action
// options
const managementApiAccessTokenOptions = {
  url: "/v1/api/getManagementApiAccessToken",
  // etc...
};
const changePasswordOptions = {
  method: "PATCH",
  url: `https://dev-ebwghc3efkan16do.us.auth0.com/api/v2/users/%7BuserId%7D`,
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${yourMgmtApiAccessToken}`,
  },
  data: { password: "newPassword", connection: "connectionName" },
  // etc...
};
export const changePassword = (params) => {
  changePasswordOptions.data.password = params.password;
  return async () => {
    try {
      // 1. get management access token
      const response = await getManagementApiAccessToken({
        ...managementApiAccessTokenOptions,
      });
      // 2. change password auth0 directly
      if (response.data.code === "SUCCESS") {
        yourMgmtApiAccessToken = response.data.yourMgmtApiAccessToken;
        return await putChangePassword({ ...changePasswordOptions });
      }
    } catch (error) {
      console.log("#Error postContactUs:", error);
    }
  };
};
