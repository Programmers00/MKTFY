/** All redux, react-redux stuff */
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  auth,
  signup,
  uploadImages,
  createOffer,
  deals,
  carsVehicles,
  furniture,
  electronics,
  realEstate,
} from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({
  auth,
  signup,
  uploadImages,
  createOffer,
  deals,
  carsVehicles,
  furniture,
  electronics,
  realEstate,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
