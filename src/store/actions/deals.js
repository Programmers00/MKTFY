import { getDeals, getCategory } from "../../api/userMain/contents/deals";

// max length of data
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
      dispatch({ type: "SET_DEALS", response });
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
  try {
    const response = await getCategory({
      ...categoryOptions,
      url: `${categoryOptions.url}?maxResults=${MAX_RESULTS}`,
      data,
    });
    if (response.status === 200) {
      console.log("#Fetch Category Success", response);
      // set data
      dispatch({ type: `SET_${data.category}`, response });
    }
  } catch (error) {
    console.error(`#Fetch Category Fail`, error.response);
  }
};

/** action: get cars vehicles */
// options
const carsVehiclesOptions = {
  url: "/api/product/category",
};
export const fetchCarsVehicles = (data) => async (dispatch) => {
  try {
    const response = await getCategory({ ...carsVehiclesOptions, data });
    // set data
    if (response.status === 200) {
      console.log("#Fetch Vehicles Success", response);
      // set data
      dispatch({ type: "SET_VEHICLES", response });
    }
  } catch (error) {
    console.error("#Fetch Vehicles Fail", error.response);
  }
};

/** action: get furniture */
// options
const furnitureOptions = {
  url: "/api/listings",
};
export const fetchFurniture = (params) => async (dispatch) => {
  try {
    const response = await getCategory({ ...furnitureOptions, params });
    // set data
    if (response.data.code === "SUCCESS") {
      dispatch({ type: "SET_FURNITURE", response });
    }
  } catch (error) {
    console.log("#Error fetchFurniture:", error);
  }
};

/** action: get electronics */
// options
const electronicsOptions = {
  url: "/api/listings",
};
export const fetchElectronics = (params) => async (dispatch) => {
  try {
    const response = await getCategory({ ...electronicsOptions, params });
    // set data
    if (response.data.code === "SUCCESS") {
      dispatch({ type: "SET_ELECTRONICS", response });
    }
  } catch (error) {
    console.log("#Error fetchElectronics:", error);
  }
};

/** action: get real estate */
// options
const realEstateOptions = {
  url: "/api/listings",
};
export const fetchRealEstate = (params) => async (dispatch) => {
  try {
    const response = await getCategory({ ...realEstateOptions, params });
    // set data
    if (response.data.code === "SUCCESS") {
      dispatch({ type: "SET_REAL_ESTATE", response });
    }
  } catch (error) {
    console.log("#Error fetchRealEstate:", error);
  }
};
