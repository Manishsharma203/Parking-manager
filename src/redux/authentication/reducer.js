/** @format */

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_ADMIN_REQUEST,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILURE,
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE
} from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: true,
  error: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        isLoading: true,
        error: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        isAuth: true
      };
    case LOGIN_USER_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case LOGIN_ADMIN_REQUEST:
      return {
        isLoading: true,
        error: false
      };
    case LOGIN_ADMIN_SUCCESS:
      return {
        isLoading: false,
        isAuth: true
      };
    case LOGIN_ADMIN_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case REGISTER_ADMIN_REQUEST:
      return {
        isLoading: true,
        error: false
      };
    case REGISTER_ADMIN_SUCCESS:
      return {
        isLoading: false,
        isAuth: true
      };
    case REGISTER_ADMIN_FAILURE:
      return {
        isLoading: false,
        error: true
      };
    case LOGOUT_USER_REQUEST:
      return {
        isLoading: false,
        error: false
      };
    case LOGOUT_USER_SUCCESS:
      return {
        isAuth: false
      };
    case LOGOUT_USER_FAILURE:
      return {
        isLoading: false,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
