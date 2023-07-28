const Car = require('../../models/car');

module.exports = {
    create,
}


async function create(req,res) {
    //add car to db
    try {
        const car = await Car.create(req.body);
        res.json(car);
    } catch {
        res.status(400).json(err);
    }
}
