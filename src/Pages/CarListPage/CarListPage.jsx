import { useState, useEffect } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import CarForm from '../../components/CarForm/CarForm';
import ListGroup from 'react-bootstrap/ListGroup';


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
    <>
        <CarForm onCarCreated={handleCarCreated} />
        {['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
          <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
            <ListGroup.Item>Year</ListGroup.Item>
            <ListGroup.Item>Make</ListGroup.Item>
            <ListGroup.Item>Model</ListGroup.Item>
            <ListGroup.Item>Rate</ListGroup.Item>
            <ListGroup.Item>Available</ListGroup.Item>
          </ListGroup>
        ))}
        <ul className="car-grid" style={{listStyle:'none'}}>
          
            {cars.map((car, idx) => (
                <li key={idx}>
                    <CarCard car={car} />
                </li>
            ))}
        </ul>
    </>
  );
}

