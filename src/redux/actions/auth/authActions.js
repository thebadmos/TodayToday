import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_RESET,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAILURE,
  } from "../../actionTypes/auth/authActionTypes";
  
  export const logout = () => {
    return {
      type: LOGIN_USER_RESET,
      payload: null,
    };
  };
  
  export const loginRequest = () => {
    return {
      type: LOGIN_USER_REQUEST,
    };
  };
  
  export const loginSuccess = (response) => {
    return {
      type: LOGIN_USER_SUCCESS,
      payload: response,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: LOGIN_USER_FAILURE,
      payload: error,
    };
  };
  
  export const loginReset = () => {
    return {
      type: LOGIN_USER_RESET,
      payload: null,
    };
  };
  