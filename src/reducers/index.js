import { combineReducers } from "redux";
import itemsReducer from "./items/reducer";
import errorReducer from "./error/reducer";
import loadingReducer from "./loading/reducer";

export default combineReducers({
  items: itemsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
