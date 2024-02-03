import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Make API call to fetch car data
    axios.get('/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Cars List</h1>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            <img src={car.image} alt={car.name} />
            <p>Name: {car.name}</p>
            <p>Capacity: {car.capacity}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
