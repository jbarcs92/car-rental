// definitely need pic for background, haven't been able to get it to work yet
import { Link } from 'react-router-dom';
import "./CarCard.css";

const CarCard = ({ car }) => {
    return (
        <Link to={`/${car._id}`} className="car-card">
            <div
            className="car-card-poster"
            style={{backgroundImage: `url(${car.image})`}}
            ></div>
            <h3 className="car-title">{car.description} {car.model}</h3>
            <p className="car-rate">${car.rate}/day</p>
        </Link>
    );
};

export default CarCard;