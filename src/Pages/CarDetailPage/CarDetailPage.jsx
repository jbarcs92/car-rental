import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CarDetailPage.css";


export default function CarDetailPage() {
  const [car, setCar] = useState(null);
  const { carId } = useParams();

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(`/api/cars/${carId}`);
        if (!response.ok) {
          throw new Error("Car not found");
        }
        const carData = await response.json();
        setCar(carData);
      } catch (error) {
        console.error("Error fetching car:", error);
        setCar(null);
      }
    }
    fetchCar();
  }, [carId]);

  if (!car) {
    return <div>Loading...</div>; //You can add a loading indicator here
  }

  return (
    <div className="car-info">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Sen:wght@500&display=swap');
      </style>
      <h2>
        {car.class} {car.model} {car.year}
      </h2>
      <p className="car-description">{car.description}</p>
      
      <div className="car-img">images{car.images}</div>

      <div className="car-rate">
        <p>Rate: ${car.rate}/day</p>
        <p>Available: {car.available ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
