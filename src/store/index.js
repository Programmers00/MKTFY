/** All redux, react-redux stuff */
import { createStore, combineReducers } from "redux";
import { auth, signup, createOffer } from "./reducers";

const rootReducer = combineReducers({ auth, signup, createOffer });

export default createStore(rootReducer);
