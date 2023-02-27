import {
  getAccountInformation,
  putAccountInformation,
} from "../../api/userInfo/accountInformation";

/** actions : get account information data */
export const fetchAccountInformation = (options) => {
  return async () => {
    try {
      return await getAccountInformation(options);
    } catch (error) {
      console.log("Error");
    }
  };
};

/** actions: update account information */
export const updateAccountInformation = (options) => {
  return async () => {
    try {
      return await putAccountInformation(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
