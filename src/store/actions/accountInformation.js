import {
  getAccountInformation,
  putAccountInformation,
} from "../../api/userInfo/accountInformation";

/** action : get account information */
// options
const getOptions = {
  url: "/api/accountInformation",
};
export const fetchAccountInformation = (params) => {
  return async () => {
    try {
      return await getAccountInformation({
        ...getOptions,
        params,
      });
    } catch (error) {
      console.log("Error");
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
      console.log("Error");
    }
  };
};
