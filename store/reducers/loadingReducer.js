import {
  CLOSE_LIGHT_LOADING,
  OPEN_LIGHT_LOADING,
} from "../actions/loadingActions";

const initState = {
  light: false,
  normal: false,
};

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case OPEN_LIGHT_LOADING:
      return action.payload;
    case CLOSE_LIGHT_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
