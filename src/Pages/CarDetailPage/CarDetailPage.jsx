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
        // const carData = await response.json();
        const { carClass, description, model, year, rate, available, image } = await response.json();
        setCar({
            carClass,
            description,
            model,
            year,
            rate,
            available,
            image,
        });
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
      {car.image && <img src={car.image} alt={`${car.description} ${car.model}`} />}
        {/* images={car.images} */} 
      <div className="info">
        <p>Year: {car.year}</p>
        <p>Rate: ${car.rate}/day</p>
        <p>Available: {car.available ? 'Yes' : 'No'}</p>
      </div>
    </div>

  );

}