// definitely need pic for background, haven't been able to get it to work yet
import { Link } from 'react-router-dom';
import "./CarCard.css";

const CarCard = ({ car }) => {
    return (
        <Link to={`/${car._id}`} className="car-card">

        </Link>
    );
};

export default CarCard;