import { getMyListings } from "../../api/userInfo/myListings";

/** action : get my listings */
// options
const options = {
  url: "/api/user/myListings",
};
export const fetchMyListings = (params) => {
  return async () => {
    try {
      return await getMyListings({ ...options, params });
    } catch (error) {
      console.log("#Error getMyListings:", error);
    }
  };
};
