import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { ControlledCarousel } from "../../components/ControlledCarousel/ControlledCarousel";
export default function CarDetailPage() {
  const [car, setCar] = useState(null);
  const {carId } = useParams();

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(`/api/cars/${carId}`);
        if(!response.ok) {
          throw new Error('Car not found');
        }
        const carData = await response.json();
        setCar(carData);
      } catch (error) {
        console.error('Error fetching car:', error);
        setCar(null);

      }
    }
    fetchCar();
  }, [carId]);

  if (!car) {
    return <div>Loading...</div> //You can add a loading indicator here
  }

  return (
    <div className="car-details">
      <h2>{car.description} {car.model}</h2>
        {/* images={car.images} */} 
      <div className="info">
        <p>Make: {car.make}</p>
        <p>Year: {car.year}</p>
        <p>Rate: ${car.rate}/day</p>
        <p>Available: {car.available ? 'Yes' : 'No'}</p>
        <p>Description: {car.description}</p>
      </div>
    </div>

  );

}