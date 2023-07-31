import { useState } from 'react';
import "./CarForm.css"

const CarForm = ({ onCarCreated }) => {
    const [formData, setFormData] = useState({
      carClass: '',
      description: '',
      model: '',
      year: '',
      rate: '',
      available: false,
      image: '',
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
            image: '',
          });
        })
        .catch((error) => console.error('Error creating car:', error));
    };
  
    return (
        <form className="car-form"onSubmit={handleSubmit}>
          <label>
            Class:
            <input
              type="text"
              name="carClass"
              value={formData.carClass}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Model:
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </label>
          <label>
            Year:
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </label>
          <label>
            Rate:
            <input
              type="number"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
            />
          </label>
          <label>
            Available:
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange} 
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create Car</button>
        </form>
      );
    };
    
    export default CarForm;