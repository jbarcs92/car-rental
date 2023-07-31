import { useState, useEffect } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import CarForm from '../../components/CarForm/CarForm';


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
        <ul className="car-grid" style={{listStyle:'none'}}>
          {cars?.length === 0 && <p>No cars found</p>}
            {cars.map((car, idx) => (
                <li key={idx}>
                    <CarCard car={car} />
                </li>
            ))}
        </ul>
    </>
  );
}

