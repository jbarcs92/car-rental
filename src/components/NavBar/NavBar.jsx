import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/cars">All Cars</Link>
            &nbsp; | &nbsp;
            <Link to="/cars/new">Add a Car</Link>
        </nav>
    )
}