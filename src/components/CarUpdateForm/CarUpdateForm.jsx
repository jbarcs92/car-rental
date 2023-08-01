import { useState, useEffect } from 'react';
import "./CarUpdateForm.css"

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
      <form className="car-update-form" onSubmit={handleSubmit}>
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
        <button type="submit">Update Car</button>
      </form>
    );
  };
  
export default CarUpdateForm;
