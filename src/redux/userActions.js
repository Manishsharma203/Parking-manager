/** @format */
import firebase from "./fbaseConfig";

export const ADD_USER1 = "ADD_USER1";
export const ADD_USER2 = "ADD_USER2";
export const CHANGE_PRICE = "CHANGE_PRICE";
export const ADD_CURRENT_USER = "ADD_CURRENT_USER";
export const ADD_CHECKOUT_USER = "ADD_CHECKOUT_USER";
export const CHECKOUT_USER = "CHECKOUT_USER";
export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";
export const TEMP = "TEMP";

const db = firebase.firestore();
const fBaseAllUsers = db.collection("allUsers");
const fBaseFloors = db.collection("totalFloors");

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

export const add1 = payload => ({
  type: ADD_USER1,
  payload
});
export const add2 = payload => ({
  type: ADD_USER2,
  payload
});
export const changePrice = payload => ({
  type: CHANGE_PRICE,
  payload
});
export const addCurrentUser = payload => ({
  type: ADD_CURRENT_USER,
  payload
});
export const addCheckoutUser = payload => ({
  type: ADD_CHECKOUT_USER,
  payload
});

export const checkout = payload => ({
  type: CHECKOUT_USER,
  payload
});

export const addCurrentUserFirebase = payload => {
  return dispatch => {
    dispatch(fetchItemsRequest());
    return fBaseAllUsers
      .doc(payload.vehicleNumber)
      .set({
        ...payload
      })
      .then(res => console.log(res.id))
      .catch(err => dispatch(fetchItemsFailure(err)));
  };
};

export const tempstorage = payload => ({
  type: TEMP,
  payload
});

export const addCheckoutUserFirebase = payload => {
  let x = {};
  return dispatch => {
    dispatch(fetchItemsRequest());

    fBaseAllUsers
      .where("uid", "==", payload.uid)
      .get()
      .then(res =>
        res.forEach(doc => {
          x = doc.data();
          fBaseAllUsers
            .doc(x.vehicleNumber)
            .update({
              checkIn: false,
              timeOut: payload.timeOut,
              amount:
                ((Number(payload.timeOut[0]) - Number(x.timeIn[0])) / 1000) *
                Number(x.floorPrice)
            })
            .then(() =>
              fBaseAllUsers
                .where("vehicleNumber", "==", x.vehicleNumber)
                .get()
                .then(res3 =>
                  res3.forEach(doc2 => dispatch(tempstorage(doc2.data())))
                )
            );
        })
      )
      .catch(err => dispatch(fetchItemsFailure(err)));
  };
};
export const updatefloor = payload => {
  return dispatch => {
    dispatch(fetchItemsRequest);
    fBaseFloors
      .doc("1234")
      .set({ totalFloors: payload })
      .then(res => console.log("res", res))
      .catch(err => console.log("errrr", err));
  };
};
