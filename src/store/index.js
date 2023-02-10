/** All redux, react-redux stuff */
import { createStore, combineReducers } from "redux";
import { auth, signup } from "./reducers";

const rootReducer = combineReducers({ auth, signup });

export default createStore(rootReducer);
