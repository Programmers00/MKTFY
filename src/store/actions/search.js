import { getSearch } from "../../api/header/search";

/** action : set search params*/
const options = {
  url: "/api/Product/search",
  method: "post",
};
export const setSearchParams = (data) => {
  console.log("#data", data);
  return async (dispatch) => {
    dispatch({ type: "SET_SEARCH_PARAMS", payload: data });
    switch (data.category) {
      case null:
        const categories = [
          null,
          "VEHICLES",
          "FURNITURE",
          "ELECTRONICS",
          "REAL_ESTATE",
        ];
        categories.forEach(async (category) => {
          const response = await getSearch({
            ...options,
            data: {
              ...data,
              category,
            },
          });
          response.status === 200 &&
            dispatch({
              type: `SET_${category}`,
              payload: response.data,
            });
        });
        break;
      case data.category:
        const response = await getSearch({ ...options, data });
        response.status === 200 &&
          dispatch({ type: `SET_${data.category}`, payload: response.data });
        break;
      default:
        break;
    }
  };
};
