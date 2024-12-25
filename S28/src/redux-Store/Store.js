import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import cityReducer from "../reducers/cityReducer";
import logger from "redux-logger";

let cb = combineReducers({ user: userReducer, city: cityReducer });
let store = legacy_createStore(cb, applyMiddleware(logger));

export default store;
