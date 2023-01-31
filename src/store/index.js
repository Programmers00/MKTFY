/** All redux, react-redux stuff */
import { createStore, combineReducers } from "redux";
import { auth } from "./reducers";

const rootReducer = combineReducers({ auth });

export default createStore(rootReducer);
