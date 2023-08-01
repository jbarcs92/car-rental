// definitely need pic for background, haven't been able to get it to work yet
import { Link } from 'react-router-dom';
import "./CarCard.css";

const CarCard = ({ car, onDeleteCar }) => {
    const handleDelete = () => {
        onDeleteCar(car._id);
    };

    return (
        <div className="car-card">
            <Link to={`/${car._id}`}
            className="car-card-poster"
            style={{backgroundImage: `url(${car.image})`}}
            ></Link>
            <h3 className="car-title">{car.description} {car.model}</h3>
            <p className="car-rate">${car.rate}/day</p>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
        
    );
};

export default CarCard;