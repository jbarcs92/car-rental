

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(`/api/cars/${carId}`);

        }
        const carData = await response.json();
        setCar(carData);
      } catch (error) {

      }
    }
    fetchCar();
  }, [carId]);

  if (!car) {

