import {
  CLOSE_COMMENT_DIALOG,
  OPEN_COMMENT_DIALOG,
} from "../actions/commentDialogAction";

const initState = { isOpen: false };

const commentDialogReducer = (state = initState, action) => {
  switch (action.type) {
    case OPEN_COMMENT_DIALOG:
      return action.payload;
    case CLOSE_COMMENT_DIALOG:
      return { isOpen: action.payload.isOpen, id: null };
    default:
      return state;
  }
};

export default commentDialogReducer;
