// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/action/carsAction';
import DefaultLayout from '../components/DefaultLayout';
import { Button, Row, Col } from 'antd';
import Spinner from '../components/Spinner';

const Home = () => {
  const { cars, loading } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars()); // Invoke the function here
  }, [dispatch]);

  if (loading) {
    return <><Spinner/></>;
  }

  return (
    <DefaultLayout>
      {loading==true &&<Spinner/>}
      <Row justify="center" gutter={16} className='md-5'>
        {cars.map((car) => (
          <Col lg={5} sm={24} xs={24} key={car.id}>
            <div className='car p-2 bs1 mt-3'>
          
              <img src={car.image} alt="carImage" className='carimg'/>
            </div>
           <div className='car-content d-flex align-items-center justify-content-between mr-2'>
           <div >
              <p>{car.make}</p>
              <p>{car.rental_price} Rent Per Hour/-</p>
            </div>
            <div>
              <button className='btn1'>Book Now</button>
            </div>
           </div>
          </Col>
        ))}
      </Row>
     
    </DefaultLayout>
  );
};

export default Home;
