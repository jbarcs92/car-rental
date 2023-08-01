import { useState, useEffect } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import CarForm from '../../components/CarForm/CarForm';
import { Navbar } from 'react-bootstrap';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import './CarListPage.css';



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
                    <CarCard car={car} />
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



