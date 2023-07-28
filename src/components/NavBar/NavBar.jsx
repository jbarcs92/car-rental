import {Link} from 'react-router-dom'; 

export default function NavBar() {

    return (
        <nav>
            <Link to="/cars">Cars History</Link>
            &nbsp; | &nbsp;
            <Link to="/cars/new">New Car</Link>


        </nav>
    );
}