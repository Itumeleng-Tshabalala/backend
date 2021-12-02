const {
    add,
	remove,
	update,
	getOne,
	getAll
} = require('../services/car.service');

const { StatusCodes } = require('http-status-codes');

const addCar = async (request, response) => {
	const car = request.body;
	if(!car) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide car details"})
	}
	const carResponse = await addCar(car);
	response.status(StatusCodes.OK).json(carResponse);
}

module.exports = {
	addCar
}