const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

router.delete('/:id', carsCtrl.deleteCar);

module.exports = router;