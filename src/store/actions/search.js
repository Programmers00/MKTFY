import { getSearch } from "../../api/header/search";
/** action: set search params */
export const setSearchParams = (data) => {
  return async (dispatch) => {
    dispatch({ type: "SET_SEARCH_PARAMS", payload: data });
  };
};

/** action : fetch search data */
// options
const options = {
  url: "/api/Product/search",
  method: "post",
};
export const fetchSearch = (data) => {
  return async () => {
    try {
      return await getSearch({
        ...options,
        data,
      });
    } catch (error) {
      console.error("#Fetch Search Fail", error.response);
    }
  };
};
