/** @format */

import {
  ADD_USER1,
  ADD_USER2,
  CHANGE_PRICE,
  ADD_CURRENT_USER,
  ADD_CHECKOUT_USER,
  CHECKOUT_USER,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  TEMP
} from "./userActions";

const initialState = {
  totalFloors: [],
  isLoading: false,
  floorIdentifier: [],
  currentUser: {
    name: "",
    userCategory: "",
    mobile: "",
    vehicleNumber: "",
    vehicleType: "",
    timeIn: [],
    floorSelected: "",
    floorPrice: "",
    slotSelected: "",
    uid: "",
    checkIn: true
  },
  checkoutUser: {},
  allUsers: [],
  temp: {}
};

const userreducers = (state = initialState, action) => {
  const currentUserNew = state.currentUser;
  const currentUserNew2 = state.currentUser;
  const { totalFloors } = state;
  const allUsersList = state.allUsers;
  const floorsList = state.totalFloors;
  let checkoutList = state.checkoutUser;
  let identifier = state.floorIdentifier;
  let amt = 0;
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        totalFloors: [...action.payload.totalFloors],
        isLoading: false
      };

    case FETCH_ITEMS_FAILURE:
      return { ...state, ...action.payload, isLoading: false };
    case ADD_USER1: {
      identifier = [];
      for (let i = 0; i < floorsList.length; i += 1) {
        if (floorsList[i].floors[2] === action.payload.vehicleType) {
          identifier.push(floorsList[i]);
        }
      }

      return {
        ...state,
        currentUser: {
          ...currentUserNew,
          name: action.payload.name,
          userCategory: action.payload.userCategory,
          mobile: action.payload.mobile,
          vehicleNumber: action.payload.vehicleNumber,
          vehicleType: action.payload.vehicleType,
          uid: action.payload.uid
        },
        floorIdentifier: identifier
      };
    }

    case ADD_USER2: {
      for (let i = 0; i < floorsList.length; i += 1) {
        if (Number(action.payload.floorSelected) - 1 === i) {
          for (let j = 0; j < floorsList[i].Pslots.length; j += 1) {
            if (action.payload.slotSelected === floorsList[i].Pslots[j].slot) {
              floorsList[i].Pslots[j].available = false;
            }
          }
        }
      }
      return {
        ...state,
        currentUser: {
          ...currentUserNew2,
          timeIn: action.payload.timeIn,
          floorSelected: action.payload.floorSelected,
          floorPrice: action.payload.floorPrice,
          slotSelected: action.payload.slotSelected
        },
        totalFloors: [...floorsList]
      };
    }

    case CHANGE_PRICE: {
      const enteredFloor = Number(action.payload.floorNo);
      const newPrice = Number(action.payload.floorPrice);
      const updatedFloors = totalFloors.map((ele, index) => {
        if (index === enteredFloor - 1) {
          const x = ele;
          x.floors[1] = newPrice;
          return x;
        }
        return ele;
      });
      return {
        ...state,
        totalFloors: [...updatedFloors]
      };
    }
    case ADD_CURRENT_USER: {
      return {
        ...state,
        allUsers: [...allUsersList, action.payload]
      };
    }
    case ADD_CHECKOUT_USER:
      for (let i = 0; i < allUsersList.length; i += 1) {
        if (allUsersList[i].vehicleNumber === action.payload.vehicleNumber) {
          checkoutList = { ...allUsersList[i] };
          break;
        }
      }
      checkoutList.timeOut = action.payload.timeOut;
      checkoutList.amount = 0;
      amt =
        ((Number(checkoutList.timeOut[0]) - Number(checkoutList.timeIn[0])) /
          1000) *
        Number(checkoutList.floorPrice);
      return {
        ...state,
        checkoutUser: {
          ...checkoutList,
          amount: amt
        }
      };
    case CHECKOUT_USER:
      checkoutList.checkIn = false;
      for (let i = 0; i < allUsersList.length; i += 1) {
        if (allUsersList[i].vehicleNumber === checkoutList.vehicleNumber) {
          allUsersList[i] = checkoutList;
          break;
        }
      }
      for (let i = 0; i < floorsList.length; i += 1) {
        if (floorsList[i].floors[0] === action.payload.floorSelected) {
          for (let j = 0; j < floorsList[i].Pslots.length; j += 1) {
            if (floorsList[i].Pslots[j].slot === action.payload.slotSelected) {
              floorsList[i].Pslots[j].available = true;
            }
          }
        }
      }
      return {
        ...state,
        totalFloors: floorsList,
        allUsers: allUsersList
      };
    case TEMP: {
      return {
        ...state,
        temp: action.payload
      };
    }
    default:
      return state;
  }
};

export default userreducers;
