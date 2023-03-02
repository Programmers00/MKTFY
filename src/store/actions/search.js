// redux actions
import {
  fetchDeals,
  fetchCarsVehicles,
  fetchFurniture,
  fetchElectronics,
  fetchRealEstate,
} from "./deals";

/** action : set search params*/
export const setSearchParams = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_PARAMS", params });

    switch (params.category) {
      case "deals":
        dispatch(fetchDeals(params));
        dispatch(fetchCarsVehicles(params));
        dispatch(fetchFurniture(params));
        dispatch(fetchElectronics(params));
        dispatch(fetchRealEstate(params));
        break;
      case "carsVehicles":
        dispatch(fetchCarsVehicles(params));
        break;
      case "furniture":
        dispatch(fetchFurniture(params));
        break;
      case "electronics":
        dispatch(fetchElectronics(params));
        break;
      case "realEstate":
        dispatch(fetchRealEstate(params));
        break;
      default:
        break;
    }
  };
};
