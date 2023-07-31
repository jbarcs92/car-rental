import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CarForm = ({ onCarCreated }) => {
    const [formData, setFormData] = useState({
      carClass: '',
      description: '',
      model: '',
      year: '',
      rate: '',
      available: false,
    });
  
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
      // Send the form data to the server to create a new car
      fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('New car created:', data);
          onCarCreated(data);
          setFormData({
            carClass: '',
            description: '',
            model: '',
            year: '',
            rate: '',
            available: false,
          });
        })
        .catch((error) => console.error('Error creating car:', error));
    };
  
    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label>
            Class:
            </Form.Label>
            <Form.Control
              type="text"
              name="carClass"
              value={formData.carClass}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>
            Description:
            </Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>
            Model:
            </Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>
            Year:
            </Form.Label>
            <Form.Control
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>
            Rate:
            </Form.Label>
            <Form.Control
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
            />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              // checked={available}
              onChange={handleChange} 
              type="checkbox"
              label="Available"
            />
          </Form.Group>

      
         <Button variant="primary" type="submit">
              Create Car
         </Button>
      </Form>

    );
  }

    
    export default CarForm;