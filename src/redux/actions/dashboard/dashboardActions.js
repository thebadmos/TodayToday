import {
    TOGGLE_TRUE,
    TOGGLE_FALSE,
  } from "../../actionTypes/dashboard/dashboardActionTypes";
  
  export const handleToggleTrue = (toggle) => {
    return {
      type: TOGGLE_TRUE,
      payload: toggle,
    };
  };
  
  export const handleToggleFalse = (toggle) => {
    return {
      type: TOGGLE_FALSE,
      payload: toggle,
    };
  };
  