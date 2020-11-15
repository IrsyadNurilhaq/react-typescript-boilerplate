import { combineReducers } from "redux";
import accountReducers from "./accountReducer";

export default combineReducers({
  account: accountReducers,
});
