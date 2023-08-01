import { useState, useEffect } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import CarForm from '../../components/CarForm/CarForm';
import { Row, Col, Container } from 'react-bootstrap';
import "./CarListPage.css"



export default function CarListPage() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    //fetch cars from API when comp mounts
    fetch('/api/cars')
        .then((response) => response.json())
        .then((data) => setCars(data))
        .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  const handleCarCreated = (newCar) => {
    // Add the new car to the existing car list state
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const handleDeleteCar = async (carId) => {
    try {
      const response = await fetch(`/api/cars/${carId}`, { method: 'DELETE' });
      const data = await response.json();
  
      if (response.ok) {
        // remove deleted car from state
        setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
      } else {
        console.error('Error deleting car:', data.message);
      }
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };


  return (
    <Container>
    <Row>
      <Col md={4}>
        <CarForm onCarCreated={handleCarCreated} />
        </Col>
        <Col md={8}>
          <Row>
        <ul className="car-grid" style={{listStyle:'none'}}>
            {cars.map((car, idx) => (
              <Col md={6} key={car._id}>
                 <li key={idx}>
                    <CarCard car={car} onDeleteCar={handleDeleteCar}/>
                </li>
              </Col>
            ))}
        </ul>
          </Row>
        </Col>
      </Row>  
    </Container>
  );
}


/* <CarForm onCarCreated={handleCarCreated} />
        <ul className="car-grid" style={{listStyle:'none'}}>
            {cars.map((car, idx) => (
                <li key={idx}>
                    <CarCard car={car} onDeleteCar={handleDeleteCar} />
                </li>
            ))}
        </ul> */