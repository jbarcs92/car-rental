import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                &nbsp; &nbsp;
                <Button href="/" variant="outline-light">Home</Button>
                &nbsp; &nbsp;
                <Button className="allVehiclesBtn" href="/cars" variant="outline-light">All Vehicles</Button>
                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <Form className="d-flex">
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" variant="outline-light">Submit</Button>
                    </Col>
                    </Row>
                </Form>
                <h1 className='headerText'>CAR RENTAL</h1>
            </Navbar>
        </>
    );
}

