import { getListings } from "../../api/userMain/contents/deals";

/** action: get deals */
// options
const dealsOptions = {
  url: "/api/listings",
};
export const fetchDeals = (params) => async (dispatch) => {
  try {
    const response = await getListings({ ...dealsOptions, params });
    if (response.data.code === "SUCCESS") {
      // set data
      dispatch({ type: "SET_DEALS", response });
    }
  } catch (error) {
    console.log("#Error fetchDeals:", error);
  }
};

/** action: get cars vehicles */
// options
const carsVehiclesOptions = {
  url: "/api/listings",
};
export const fetchCarsVehicles = (params) => async (dispatch) => {
  try {
    const response = await getListings({ ...carsVehiclesOptions, params });
    // set data
    if (response.data.code === "SUCCESS") {
      dispatch({ type: "SET_CARSVEHICLES", response });
    }
  } catch (error) {
    console.log("#Error fetchCarsVehicles:", error);
  }
};

/** action: get furniture */
// options
const furnitureOptions = {
  url: "/api/listings",
};
export const fetchFurniture = (params) => async (dispatch) => {
  try {
    const response = await getListings({ ...furnitureOptions, params });
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
    const response = await getListings({ ...electronicsOptions, params });
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
    const response = await getListings({ ...realEstateOptions, params });
    // set data
    if (response.data.code === "SUCCESS") {
      dispatch({ type: "SET_REALESTATE", response });
    }
  } catch (error) {
    console.log("#Error fetchRealEstate:", error);
  }
};
