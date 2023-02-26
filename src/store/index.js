/** All redux, react-redux stuff */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { auth, signup, uploadImages, createOffer } from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({
  auth,
  signup,
  uploadImages,
  createOffer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
