//redux/action/carsAction.js

import axios from "axios";

export const FETCH_CARS_REQUEST = "FETCH_CARS_REQUEST";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CARS_FAILURE = "FETCH_CARS_FAILURE";

export const fetchCars = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CARS_REQUEST });
    try {
      const response = await axios.get("http://localhost:3005/cars");
      dispatch({ type: FETCH_CARS_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: FETCH_CARS_FAILURE, payload: error.message });
    }
  };
};
