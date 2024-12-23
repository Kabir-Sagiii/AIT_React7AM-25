import { legacy_createStore, applyMiddleware } from "redux";
import userReducer from "../reducers/userReducer";
import logger from "redux-logger";

let store = legacy_createStore(userReducer, applyMiddleware(logger));

export default store;
