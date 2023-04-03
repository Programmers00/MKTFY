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
      const response = await postAccountInformation({
        ...postOptions,
        data,
      });
      // success
      if (response.status === 200) {
        console.log("#Create Account Information Success", response);
        sessionStorage.removeItem("signupForm");
      }
    } catch (error) {
      // fail
      console.error("#Create Account Information Fail", error.response);
    }
  };
};

/** action : get account information */
// options
const getOptions = {
  url: "/api/User",
};
// data <= id
export const fetchAccountInformation = (data) => {
  return async (dispatch) => {
    try {
      const response = await getAccountInformation({
        ...getOptions,
        url: `${getOptions.url}/${data}`,
      });
      if (response.status === 200) {
        console.log("#Fetch Account Information Success", response);
        dispatch({
          type: "SET_ACCOUNT_INFORMATION",
          informationAccount: response.data,
        });
      }
    } catch (error) {
      // fail
      console.error("#Fetch Account Information Fail", error.response);
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
