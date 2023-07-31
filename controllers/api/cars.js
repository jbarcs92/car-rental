const Car = require('../../models/car');

module.exports = {
    create,
    index,
    details
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
