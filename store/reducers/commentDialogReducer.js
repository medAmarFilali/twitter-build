import { TOGGLE_COMMENT_DIALOG } from "../actions/commentDialogAction";

const initState = false;

const commentDialogReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_COMMENT_DIALOG:
      const newState = !state;
      return newState;
    default:
      return state;
  }
};

export default commentDialogReducer;
