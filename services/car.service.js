const Car = require('../models/car.model');

const add = async (car) => {
	try {
			const createdCar = await Car.create(car);
	return {
		success: true,
		Car: createdCar,
		message: "car added successfully"
	};
	} catch (error) {
			return { success: false, message: error.message };
	}
}

const remove = async (id) => {
	try {
		const deletedCar = await Car.findByIdAndRemove({_id: id});
		return {
			success: true,
			Car: deletedCar,
			message: "car removed successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const update = async (car, id) => {
	try {
		let UpdateCar = await Notification.findById({_id: id});
		if (UpdateCar == null) {
			return { success: false, message: `Cannot find car with id: ${id}` };
		}
		try {
			const UpdatedCar= await UpdateCar.save();
			return {
				success: true,
				car: UpdatedCar,
				message: "car updated successfully"
			};
		} catch (error) {
			return { success: false ,message: error.message };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const getAll = async () => {
	try {
		const cars = await Car.find({});
		return {
			success: true,
			cars: cars,
			message: "notifications fetched successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const getOne = async (id) => {
	try {
		const car = await Car.findById({_id: id});
		return {
			success: true,
			car: car,
			message: "car fetched successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

module.exports = {
	add,
	remove,
	update,
	getOne,
	getAll
}