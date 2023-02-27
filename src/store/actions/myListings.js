import { getMyListings } from "../../api/userInfo/myListings";

/** actions : get my listings */
export const fetchMyListings = (options) => {
  return async () => {
    try {
      return await getMyListings(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
