// definitely need pic for background, haven't been able to get it to work yet
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    return (
        <Link to={`/${car._id}`} className="car-card">
            <h3>{car.description} {car.model}</h3>
        </Link>
    );
};

export default CarCard;