// redux/action/carImageUploadAction.js

import axios from "axios";

export const setCarsImage = (carImage) => ({
  type: 'SET_CARS_IMAGE',
  payload: carImage,
});

export const fetchCarsImage = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars/');
      dispatch(setCarsImage(response.data));
    } catch (error) {
      console.error('Error fetching cars:', error);
      // Optionally, dispatch an action to handle the error in Redux state
    }
  };
};

export const uploadCarImage = (imageSrc) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cars/up', {
        image: imageSrc,
      });

      console.log('Server Response:', response.data);

      // Optionally, dispatch an action to handle the successful upload in Redux state
    } catch (error) {
      console.error('Error uploading image:', error);
      // Optionally, dispatch an action to handle the error in Redux state
    }
  };
};
