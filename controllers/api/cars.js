const Car = require('../../models/car');

module.exports = {
    create,
    index,
    details,
    update,
    deleteCar,

}

async function update(req, res) {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.carId, req.body, {new: true});
        if(!updatedCar) {
            return res.status(404).json({message: 'Car not found'});
        }
        return res.json(updatedCar);
    } catch (error) {
        console.error('Error updating car:', error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
}

async function create(req,res) {
    //add car to db
    try {
        const { carClass, description, model, year, rate, available, image } = req.body;
        const newCar = await Car.create({
            carClass,
            description,
            model,
            year,
            rate,
            available,
            image
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

async function deleteCar(req, res) {
    try {
        const deletedCar = await Car.findByIdAndRemove(req.params.carId);
        if(!deletedCar) {
            return res.status(404).json({message: 'Car not found'});
        }
        return res.status(200).json({message: 'Car deleted successfully'});
    } catch (error) {
        console.error('Error deleting car:', error);
        return res.status(500).json({message: 'Internal Server Error'});
    }
}