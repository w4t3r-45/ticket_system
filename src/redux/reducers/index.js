import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";

const reducers = combineReducers({
  ui: mainReducer
});

export default reducers;
