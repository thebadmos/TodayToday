import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_RESET,
} from "../../actionTypes/auth/authActionTypes";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

const loginReduer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        isLoading: false,
        user: null,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGIN_USER_RESET:
      return {
        isLoading: false,
        user: action.payload,
        isLoggedIn: false,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReduer;
