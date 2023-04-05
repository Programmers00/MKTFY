import { getDeals, getCategory } from "../../api/userMain/contents/deals";

// max result count of data
const MAX_RESULTS = 20;
/** action: get deals */
// options
const dealsOptions = {
  url: "/api/Product/deals",
};
export const fetchDeals = (data) => async (dispatch) => {
  try {
    const response = await getDeals({
      ...dealsOptions,
      url: `${dealsOptions.url}?maxResults=${MAX_RESULTS}`,
      data,
    });
    if (response.status === 200) {
      console.log("#Fetch Deals Success", response);
      // set data
      dispatch({ type: "SET_DEALS", payload: response.data });
    }
  } catch (error) {
    console.error("#Fetch Deals Fail", error.response);
  }
};

/** action: get category */
// options
const categoryOptions = {
  url: "/api/Product/category",
  method: "post",
};
export const fetchCategory = (data) => async (dispatch) => {
  // console.log("##category", data);
  try {
    const response = await getCategory({
      ...categoryOptions,
      url: `${categoryOptions.url}?maxResults=${MAX_RESULTS}`,
      data,
    });
    if (response.status === 200) {
      console.log("#Fetch Category Success", response);
      // set data
      dispatch({ type: `SET_${data.category}`, payload: response.data });
    }
  } catch (error) {
    console.error(`#Fetch Category Fail`, error.response);
  }
};
