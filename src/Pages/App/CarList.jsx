import { useState, useEffect } from 'react';
import { Car } from '../models/Car';
import { Link } from 'react-router-dom';

export default function CarList({ category }) {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const filter = { category }; 
      const cars = await Car.find(filter);
      setCars(cars);
    }

    fetchCars();
  }, [category]);

  return (
    <div>
      <h1>{category} Cars</h1>
      
      <div className="cars-list">
        {cars.map(car => (
          <Link to={`/cars/${car._id}`} key={car._id}>
          <CarCard car={car} key={car._id} />
          </Link>
        ))}
      </div>
    </div>
  );

}
