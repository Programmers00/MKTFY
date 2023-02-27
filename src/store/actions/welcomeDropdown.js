import { getMyListingsCountData } from "../../api/header/welcomeDropdown";

/** actions : get my listings count data */
export const getMyListingsCount = (options) => {
  return async () => {
    try {
      return await getMyListingsCountData(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
