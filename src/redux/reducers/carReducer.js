//redux/reducer/carsReducer.js


import {
  FETCH_CARS_FAILURE,
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
} from "../action/carsAction";

const initialState = {
  loading: false,
  cars: [],
  error: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: null,
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        cars: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
