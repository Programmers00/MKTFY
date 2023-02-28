import { getMyListingsCount } from "../../api/header/welcomeDropdown";

/** action : get my listings count */
// options
const options = {
  url: "/api/user/myListingsCount",
  params: {},
};
export const fetchMyListingsCount = (params) => {
  return async () => {
    try {
      return await getMyListingsCount({ ...options, params });
    } catch (error) {
      console.log("#Error getMyListingsCount:", error);
    }
  };
};
