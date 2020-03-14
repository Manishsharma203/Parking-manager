/** @format */
import firebase from "../fbaseConfig";
import {
  REGISTER_ADMIN_REQUEST,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_ADMIN_REQUEST,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor";

const db = firebase.firestore();
db.collection("totalFloors");

export const fetchItemsRequest = payload => ({
  type: FETCH_ITEMS_REQUEST,
  payload
});

export const fetchItemsFailure = payload => ({
  type: FETCH_ITEMS_FAILURE,
  payload
});

export const fetchItemsSuccess = payload => ({
  type: FETCH_ITEMS_SUCCESS,
  payload
});

export const fetchItems = () => {
  return dispatch => {
    dispatch(fetchItemsRequest());
    return db
      .collection("totalFloors")
      .get()
      .then(query => {
        const array = [];
        query.forEach(doc => {
          array.push(doc.data());
        });
        dispatch(fetchItemsSuccess(array[0]));
      })
      .catch(err => dispatch(fetchItemsFailure(err)));
  };
};

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  error: payload
});

export const loginUser = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("/login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch(() => dispatch(loginUserFailure()));
  };
};

export const loginAdminRequest = () => ({
  type: LOGIN_ADMIN_REQUEST
});

export const loginAdminSuccess = payload => ({
  type: LOGIN_ADMIN_SUCCESS,
  payload
});

export const loginAdminFailure = payload => ({
  type: LOGIN_ADMIN_FAILURE,
  error: payload
});

export const loginAdmin = payload => {
  const { email, password } = payload;
  return dispatch => {
    dispatch(loginAdminRequest());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        dispatch(loginAdminSuccess(res.data));
      })
      .catch(() => dispatch(loginAdminFailure()));
  };
};

export const registerAdminRequest = () => ({
  type: REGISTER_ADMIN_REQUEST
});

export const registerAdminSuccess = payload => ({
  type: REGISTER_ADMIN_SUCCESS,
  payload
});

export const registerAdminFailure = payload => ({
  type: REGISTER_ADMIN_FAILURE,
  error: payload
});

export const registerAdmin = payload => {
  const { email, password } = payload;
  return dispatch => {
    dispatch(registerAdminRequest());
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(() => dispatch(registerAdminFailure()));
  };
};
export const logoutUserRequest = payload => ({
  type: LOGOUT_USER_REQUEST,
  payload
});

export const logoutUserSuccess = payload => ({
  type: LOGOUT_USER_SUCCESS,
  payload
});

export const logoutUserFailure = payload => ({
  type: LOGOUT_USER_FAILURE,
  error: payload
});

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserRequest());
    return axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: payload.token
          }
        }
      )
      .then(res => {
        dispatch(logoutUserSuccess(res));
      })
      .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};
