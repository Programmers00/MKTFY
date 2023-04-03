import {
  postAccountInformation,
  getAccountInformation,
  putAccountInformation,
} from "../../api/userInfo/accountInformation";

/** action : post account information */
// options
const postOptions = {
  url: "/api/User/register",
  method: "post",
};
export const createAccountInformation = (data) => {
  return async () => {
    try {
      return await postAccountInformation({
        ...postOptions,
        data,
      });
    } catch (error) {
      return error.response;
    }
  };
};

/** action : get account information */
// options
const getOptions = {
  url: "/api/accountInformation",
};
export const fetchAccountInformation = (params) => {
  return async (dispatch) => {
    try {
      const response = await getAccountInformation({
        ...getOptions,
        params,
      });
      response.data.code === "SUCCESS" &&
        dispatch({
          type: "SET_ACCOUNT_INFORMATION",
          informationAccount: response.data.accountInformation,
        });

      // return response;
    } catch (error) {
      console.log("#Error getAccountInformation:", error);
    }
  };
};

/** action: update account information */
// options
const updateOptions = {
  url: "/api/accountInformation",
  method: "post",
};
export const updateAccountInformation = (params) => {
  return async () => {
    try {
      return await putAccountInformation({ ...updateOptions, params });
    } catch (error) {
      console.log("#Error putAccountInformation:", error);
    }
  };
};
