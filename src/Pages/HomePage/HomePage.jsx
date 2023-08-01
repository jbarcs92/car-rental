import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel";
import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <div className="homePageImage">
                <img src="../../public/images/highway.jpeg" alt="highway" />
            </div>
            <ControlledCarousel /> 
        </>
    );
}