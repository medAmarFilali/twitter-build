export const OPEN_COMMENT_DIALOG = "OPEN_COMMENT_DIALOG";
export const CLOSE_COMMENT_DIALOG = "CLOSE_COMMENT_DIALOG";

export const openCommentDialog = (id) => {
  return {
    type: OPEN_COMMENT_DIALOG,
    payload: {
      isOpen: true,
      id: id,
    },
  };
};

export const closeCommentDialog = () => {
  return {
    type: CLOSE_COMMENT_DIALOG,
    payload: {
      isOpen: false,
    },
  };
};
