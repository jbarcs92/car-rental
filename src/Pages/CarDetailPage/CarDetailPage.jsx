import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarUpdateForm from '../../components/CarUpdateForm/CarUpdateForm';

export default function CarDetailPage() {
  const [car, setCar] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const {carId } = useParams();

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(`/api/cars/${carId}`);
        if(!response.ok) {
          throw new Error('Car not found');
        }
        const { _id, carClass, description, model, year, rate, available, image } = await response.json();
        setCar({
            _id,
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

  const handleCarUpdated = (updatedCar) => {
    setCar(updatedCar);
    setEditMode(false);
  };

  if (!car) {
    return <div>Loading...</div> //You can add a loading indicator here
  }

  return (
    <>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel' : 'Edit Car'}
      </button>
      {editMode ? (
        <CarUpdateForm carData={car} onCarUpdated={handleCarUpdated} />
      ) : (
        <div className="car-details">
          <h2>{car.description} {car.model}</h2>
          {car.image && <img src={car.image} alt={`${car.description} ${car.model}`} />}
          <div className="info">
            <p>Year: {car.year}</p>
            <p>Rate: ${car.rate}/day</p>
            <p>Available: {car.available ? 'Yes' : 'No'}</p>
          </div>
        </div>
      )}
    </>
  );
}
