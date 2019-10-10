import {combineReducers, createStore} from "redux";

import profile from "./stores/profile";

const rootReducer = combineReducers({
  profile
});

export default createStore(rootReducer);
