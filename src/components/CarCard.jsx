import { Link } from 'react-router-dom';


const CarCard = ({ car }) => {
    return (
        <Link to={`/cars/${car._id}`} key={car._id}>
        <div className="car-card">
        <h2>{car.model} {car.make}</h2>
        <p>Year: {car.year}</p>
        <p>Rate: ${car.rate}/day</p>
        <p>Available: {car.available ? 'Yes' : 'No'}</p>
        </div>
        </Link>
    );
};

export default CarCard;
