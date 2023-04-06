import { getDeals, getCategory } from "../../api/userMain/contents/deals";

// max result count of data
const MAX_RESULTS = 20;
/** action: get deals */
// options
const dealsOptions = {
  url: "/api/Product/deals",
};
export const fetchDeals = (data) => async () => {
  try {
    return await getDeals({
      ...dealsOptions,
      url: `${dealsOptions.url}?maxResults=${MAX_RESULTS}`,
      data,
    });
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
export const fetchCategory = (data) => async () => {
  // console.log("##category", data);
  try {
    return await getCategory({
      ...categoryOptions,
      url: `${categoryOptions.url}?maxResults=${MAX_RESULTS}`,
      data,
    });
  } catch (error) {
    console.error(`#Fetch Category Fail`, error.response);
  }
};
