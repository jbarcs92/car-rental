import { useState, useEffect } from 'react';
import './CarUpdateForm.css';
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
const CarUpdateForm = ({ onCarUpdated, carData }) => {
    const [formData, setFormData] = useState({
      carClass: '',
      description: '',
      model: '',
      year: '',
      rate: '',
      available: false,
      image: '',
    });

    useEffect(() => {
      // Populate the form with the car data when it becomes available
      if (carData) {
        setFormData(carData);
      }
    }, [carData]);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const inputVal = type === 'checkbox' ? checked : value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: inputVal,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send the form data to the server to update the car
      fetch(`/api/cars/${carData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Car updated:', data);
          onCarUpdated(data);
        })
        .catch((error) => console.error('Error updating car:', error));
    };
  
    return (
      <Row>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Sen:wght@500&display=swap');
        </style>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalClass">
            <Form.Label column sm={2}>
              Class:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="carClass"
                value={formData.carClass}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalModel">
            <Form.Label column sm={2}>
              Model:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalYear">
            <Form.Label column sm={2}>
              Year:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalRate">
            <Form.Label column sm={2}>
              Rate:
            </Form.Label>
            <Col sm={10}>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Col>
          </Form.Group>
  
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalAvailable"
          >
            <Form.Label column sm={2}>
              Available
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                // value={available}
                onChange={handleChange}
              >
                <option>Choose...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
            <Form.Label column sm={2}>
              Image:
            </Form.Label>
            <Col sm={10}>
              <InputGroup>
                <InputGroup.Text>URL</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Form.Group>
  
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalDescription"
          >
            <Form.Label column sm={4}>
              Description:
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows={3}
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
  
          <Button
            variant="primary"
            style={{
              backgroundColor: "gray",
              borderRadius: 30,
              padding: "18px 36px",
            }}
            type="submit"
          >
            Update Car Listing
          </Button>
        </Form>
      </Row>
    );
  };
  
export default CarUpdateForm;





  // return (
  //   <form className="car-update-form" onSubmit={handleSubmit}>
  //     <label>
  //         Class:
  //         <input
  //           type="text"
  //           name="carClass"
  //           value={formData.carClass}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Description:
  //         <input
  //           type="text"
  //           name="description"
  //           value={formData.description}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Model:
  //         <input
  //           type="text"
  //           name="model"
  //           value={formData.model}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Year:
  //         <input
  //           type="number"
  //           name="year"
  //           value={formData.year}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Rate:
  //         <input
  //           type="number"
  //           name="rate"
  //           value={formData.rate}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Available:
  //         <input
  //           type="checkbox"
  //           name="available"
  //           checked={formData.available}
  //           onChange={handleChange} 
  //         />
  //       </label>
  //       <label>
  //         Image URL:
  //         <input
  //           type="text"
  //           name="image"
  //           value={formData.image}
  //           onChange={handleChange}
  //         />
  //       </label>
  //     <button type="submit">Update Car</button>
  //   </form>
  // );