const express = require('express');
const router = express.Router();
const carsCtrl = require('../../controllers/api/cars');

//ALL paths start w/ /api/cars

//GET /api/cars (retrieve all cars)
// router.get('/', carsCtrl.index);

//GET /api/cars/:id (retrieve details of a specific car)
// router.get('/:id', carsCtrl.details);

//DELETE /api/cars/:id (delete a specific car)
// router.delete('/:id', carsCtrl.delete);

//PUT /api/cars/:id (update a specific car)
// router.put('/:id', carsCtrl.update);

//POST /api/cars (create a car)
// router.post('/', carsCtrl.create);


module.exports = router;