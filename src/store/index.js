/** All redux, react-redux stuff */
import { createStore, combineReducers, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
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
  search,
  product,
} from "./reducers";
import thunk from "redux-thunk";

const storageConfig = {
  key: "root",
  storage: storageSession,
  blacklist: [],
};
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
  search,
  product,
});
const middlewares = [thunk];

let store = applyMiddleware(...middlewares)(createStore)(
  persistReducer(storageConfig, rootReducer)
);

export const persistor = persistStore(store);
// persistor.purge()
export default store;
