
const { StatusCodes } = require('http-status-codes')
const { 
    addTrip,
    getTrips,
    getTripById,
    getTripsByRiderId,
    getTripsByDriverId 
} = require('../services/trip.service');


const getTripByTripId = async (request, response) => {
	const id = request.params.id;
	if(!id) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide id"})
	}
    const tripResponse = await getTripById(id);
    response.status(StatusCodes.OK).json(tripResponse);
};

const createTrip = async (request, response) => {
    const trip = request.body;
    const createResponse = await addTrip(trip);
    response.status(StatusCodes.OK).json(createResponse);
};

const getAllTrips = async (request, response) => {
    const tripsResponse = await getTrips();
    response.status(StatusCodes.OK).json(tripsResponse);
}


module.exports = {
    createTrip,
    getTripByTripId,
    getAllTrips
}