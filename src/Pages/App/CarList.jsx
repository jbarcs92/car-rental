import { useState, useEffect } from 'react';
import { Car } from '../models/Car';
import CarCard from '../../components/CarCard';


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
      <CarCard cars={cars} />
    </div>
  );

}
