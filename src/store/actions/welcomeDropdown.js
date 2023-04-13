import { getMyListingsCount } from "../../api/header/welcomeDropdown";

/** action : get my listings count */
// options
const options = {
  url: "/api/User/notifications/count",
};
export const fetchMyListingsCount = () => {
  return async () => {
    try {
      return await getMyListingsCount({ ...options });
    } catch (error) {
      console.error("#Fetch Notification Count Fail", error.response);
    }
  };
};
