
// Imports
const express = require('express');

// Variables 
const carRoutes = express.Router();

const {
    addCar
} = require('../controllers/car.controller');

carRoutes.post('/', addCar);

module.exports = carRoutes;