import { useState, useEffect } from 'react';
import { Car } from '../models/Car';

export default function CarDetails({ carId }) {

  const [car, setCar] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      const car = await Car.findById(carId).populate('category');
      setCar(car);
    }

    fetchCar();
  }, [carId]);

  return (
    <div className="car-details">
      <h2>{car.model} {car.make}</h2>

      <div className="gallery">
        {car.images.map(photo => (
            <img src={photo.url} alt={photo.description} key={photo._id} />
        ))}
      </div>

      <div className="info">
        <p>{car.description}</p> 
        <p>Year: {car.year}</p>
        <p>Rate: ${car.rate}/day</p>
        <p>Available: {car.available ? 'Yes' : 'No'}</p>
        <p>Category: {car.category.name}</p>
        </div>
    </div>

  );

}