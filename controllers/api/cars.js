const Car = require('../../models/car');

module.exports = {
    create,
    index,
    details,
    deleteCar
}


async function create(req,res) {
    //add car to db
    try {
        const { carClass, description, model, year, rate, available } = req.body;
        const newCar = await Car.create({
            carClass,
            description,
            model,
            year,
            rate,
            available
        });
        res.json(newCar);
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).json({ message:'Server error' });
    }
}

async function index(req, res) {
    try {
        const cars = await Car.find({})
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Server error'});

    }
}

async function details(req, res) {
    try {
        const carId = req.params.carId;
        const car = await Car.findById(carId);
        if(!car) {
            return res.status(404).json({message: 'Car not found'});
        }
        return res.json(car);
    } catch (error) {
        console.error('Error fetching car:', error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
}

// Delete an item by ID
async function deleteCar(req,res) {
    try {
      const deletedCar = await Car.findByIdAndDelete(req.params.id);
      if (!deletedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json({ message: 'Car deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }

   // Update an existing item by ID
// const updateItem = async (req, res) => {
//     try {
//       const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       });
//       if (!updatedItem) {
//         return res.status(404).json({ error: 'Item not found' });
//       }
//       res.json(updatedItem);
//     } catch (error) {
//       res.status(500).json({ error: 'Something went wrong' });
//     }
//   };