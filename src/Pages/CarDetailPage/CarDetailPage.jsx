

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(`/api/cars/${carId}`);

        }
        // const carData = await response.json();
        const { carClass, description, model, year, rate, available, image } = await response.json();
        setCar({
            carClass,
            description,
            model,
            year,
            rate,
            available,
            image,
        });
      } catch (error) {

      }
    }
    fetchCar();
  }, [carId]);

  if (!car) {


  return (
    <div className="car-details">
      <h2>{car.description} {car.model}</h2>
      {car.image && <img src={car.image} alt={`${car.description} ${car.model}`} />}
        {/* images={car.images} */} 
      <div className="info">
        <p>Year: {car.year}</p>
        <p>Rate: ${car.rate}/day</p>
        <p>Available: {car.available ? 'Yes' : 'No'}</p>
      </div>
    </div>

  );


