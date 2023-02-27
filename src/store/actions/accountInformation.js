import { getAccountInformationData } from "../../api/header";

/** actions : get account information data */
export const getAccountInformation = (options) => {
  return async () => {
    try {
      return await getAccountInformationData(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
