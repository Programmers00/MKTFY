import { getMyListings } from "../../api/userInfo/myListings";

/** action : get my listings */
// options
const options = {
  url: "/api/User/products",
};
export const fetchMyListings = () => {
  return async () => {
    try {
      return await getMyListings({ ...options });
    } catch (error) {
      console.error("#Error getMyListings:", error);
    }
  };
};
