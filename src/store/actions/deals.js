import { getListings } from "../../api/userMain/contents/deals";

/** action: get deals */
// options
const dealsOptions = {
  url: "/api/listings",
};
export const fetchDeals = (params) => {
  return async () => {
    try {
      return await getListings({ ...dealsOptions, params });
    } catch (error) {
      console.log("#Error fetchDeals:", error);
    }
  };
};

/** action: get cars vehicles */
// options
const carsVehiclesOptions = {
  url: "/api/listings",
};
export const fetchCarsVehicles = (params) => {
  return async () => {
    try {
      return await getListings({ ...carsVehiclesOptions, params });
    } catch (error) {
      console.log("#Error fetchCarsVehicles:", error);
    }
  };
};

/** action: get furniture */
// options
const furnitureOptions = {
  url: "/api/listings",
};
export const fetchFurniture = (params) => {
  return async () => {
    try {
      return await getListings({ ...furnitureOptions, params });
    } catch (error) {
      console.log("#Error fetchFurniture:", error);
    }
  };
};

/** action: get electronics */
// options
const electronicsOptions = {
  url: "/api/listings",
};
export const fetchElectronics = (params) => {
  return async () => {
    try {
      return await getListings({ ...electronicsOptions, params });
    } catch (error) {
      console.log("#Error fetchElectronics:", error);
    }
  };
};

/** action: get real estate */
// options
const realEstateOptions = {
  url: "/api/listings",
};
export const fetchRealEstate = (params) => {
  return async () => {
    try {
      return await getListings({ ...realEstateOptions, params });
    } catch (error) {
      console.log("#Error fetchRealEstate:", error);
    }
  };
};
