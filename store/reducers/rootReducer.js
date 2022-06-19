import { combineReducers } from "redux";
import commentDialogReducer from "./commentDialogReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  commentDialog: commentDialogReducer,
  loading: loadingReducer,
});

export default rootReducer;
