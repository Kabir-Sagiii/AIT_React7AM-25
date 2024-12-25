import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import logger from "redux-logger";
import productReducer from "../reducers/productReducer";

let store = legacy_createStore(
  combineReducers({ productReducer, userReducer }),
  applyMiddleware(logger)
);

export default store;
