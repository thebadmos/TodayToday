import {
  TOGGLE_TRUE,
  TOGGLE_FALSE,
} from "../../actionTypes/dashboard/dashboardActionTypes";

const initialState = {
  isSideBarOpen: true,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TRUE:
      return {
        ...state,
        isSideBarOpen: action,
      };
    case TOGGLE_FALSE:
      return {
        ...state,
        isSideBarOpen: action,
      };

    default:
      return state;
  }
};

export default toggleReducer;
