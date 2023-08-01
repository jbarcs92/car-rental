import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarUpdateForm from '../../components/CarUpdateForm/CarUpdateForm';
import './CarDetailPage.css'

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
      <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel' : 'Edit Car'}
      </button>
      {editMode ? (
        <CarUpdateForm carData={car} onCarUpdated={handleCarUpdated} />
      ) : (
        <div className="car-info">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Sen:wght@500&display=swap');
          </style>
          <h2>{car.model} {car.year}</h2>
          <p className="car-description">{car.description}</p>
          <div className="car-img">{car.image && <img src={car.image} alt={`${car.model}`} />}</div>

          <div className="car-rate">
            <p>Rate: ${car.rate}/day</p>
            <p>Available: {car.available ? "Yes" : "No"}</p>
          </div>
        </div>
      )}
    </>
  );
}

//class for {truck, suv, etc etc}
//model for specific type: Tesla Modek 3, Ford F150
//Description -> any info that should go w car/ maybe explaining some features idk
//rate -> how much does it cost/day
//available -> is it currently available to rent? or is it checked out