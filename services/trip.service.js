const Trip = require('../models/trip.model');

const addTrip = async (trip) => {
	try {
			const createdTrip = await Trip.create(trip);
	return {
		success: true,
		trip: createdTrip,
		message: "trips added successfully"
	};
	} catch (error) {
			return { success: false, message: error.message };
	}
}

const getTrips = async (tripId) => {
	try {
			const trips = await Trip.find({});
			if(trips === null) {
		return {
			success: false,
			message: `no trips found`
		};
	}
	return {
		success: true,
		trips: trips,
		message: "trips fetched successfully"
	};
	} catch (error) {
			return { success: false, message: error.message };
	}
}

const getTripsByRiderId = async (riderId) => {
	try {
			const trips = await Trip.findOne({riderId: riderId});
			if(trips === null) {
		return {
			success: false,
			message: `no trips exist for user with id: ${riderId} `
		};
	}
	return {
		success: true,
		trips: trips,
		message: "trips fetched successfully"
	};
	} catch (error) {
			return { success: false, message: error.message };
	}
}

const getTripsByDriverId = async (driverId) => {
	try {
		const trips = await Trip.findOne({driverId: driverId});
		if(trips === null) {
			return {
				success: false,
				message: `no trips exist for user with id: ${driverId} `
			};
		}
		return {
			success: true,
			trips: trips,
			message: "trips fetched successfully"
		};
	} catch (error) {
			return { success: false, message: error.message };
	}
}

const getTripById = async (tripId) => {
	try {
		const trips = await Trip.findOne({_id: tripId});
		if(trips === null) {
			return {
				success: false,
				message: `no trips exist with id: ${tripId} `
			};
		}
		return {
			success: true,
			trips: trips,
			message: "trip fetched successfully"
		};
	} catch (error) {
			return { success: false, message: error.message };
	}
}

const updateTrip = async (trip, id) => {
	try {
		let updateTrip = await Trip.findById(id);
		if (updateTrip == null) {
			return { success: false, message: `Cannot find trip with id: ${id}` };
		}
		try {
			if(trip.status !== null) {
				updateTrip.status = trip.status;
			}
			const updatedTrip = await updateTrip.save();
			return {
				success: true,
				trip: updatedTrip,
				message: "Trip updated successfully"
			};
		} catch (error) {
			return { success: false ,message: error.message };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
}

module.exports = {
	addTrip,
	getTrips,
	updateTrip,
	getTripById,
	getTripsByRiderId,
	getTripsByDriverId
}