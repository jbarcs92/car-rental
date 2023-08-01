import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        &nbsp; | &nbsp;
        <Button href="/" variant="outline-light">Home</Button>
        &nbsp; | &nbsp;
        <Button className="allVehiclesBtn" href="/cars" variant="outline-light">All Vehicles</Button>
        &nbsp; | &nbsp;
        &nbsp; | &nbsp;
        <h1 className="headerText">CAR RENTAL</h1>
      </Navbar>
    </>
  );
}


//where is the code?

// import { Link } from 'react-router-dom';

// export default function NavBar() {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             &nbsp; | &nbsp;
//             <Link to="/cars">All Cars</Link>
//         </nav>
//     )
// }