import { combineReducers } from "redux";
import commentDialogReducer from "./commentDialogReducer";

const rootReducer = combineReducers({
  commentDialog: commentDialogReducer,
});

export default rootReducer;
