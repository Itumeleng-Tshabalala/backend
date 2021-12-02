// Imports
const express = require('express');
const { createTrip, getTripByTripId, getAllTrips } = require('../controllers/trip.controller')

// Variables 
const tripRoutes = express.Router();

tripRoutes.get('/', getAllTrips);

tripRoutes.get('/:id', getTripByTripId);

tripRoutes.put('/:id', (request, response) => {
    
})

tripRoutes.delete('/:id', (request, response) => {
    
})

tripRoutes.post('/', createTrip);

// tripRoutes.get('/:userId', getOneTrips);


module.exports = tripRoutes;
