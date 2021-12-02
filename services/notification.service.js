// Imports
const Notification = require('../models/notification.model');

const add = async (notification) => {
	try {
		const createdNotification = await Notification.create(notification);
		return {
			success: true,
			notification: createdNotification,
			message: "notification added successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const remove = async (id) => {
	try {
		const deletedNotification = await Notification.findByIdAndRemove({_id: id});
		return {
			success: true,
			notification: deletedNotification,
			message: "notification removed successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const getOne = async (id) => {
	try {
		const notification = await Notification.findById({_id: id});
		return {
			success: true,
			notification: notification,
			message: "notification fetched successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const getAll = async () => {
	try {
		const notifications = await Notification.find({});
		return {
			success: true,
			notifications: notifications,
			message: "notifications fetched successfully"
		};
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const update = async (notification) => {
	try {
		let UpdateNotification = await Notification.findById({_id: id});
		if (UpdateNotification == null) {
			return { success: false, message: `Cannot find trip with id: ${id}` };
		}
		try {
			if(trip.status !== null) {
				updateTrip.status = trip.status;
			}
			const UpdatedNotification = await UpdateNotification.save();
			return {
				success: true,
				notification: UpdatedNotification,
				message: "notification updated successfully"
			};
		} catch (error) {
			return { success: false ,message: error.message };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
}
module.exports = {
	add,
	remove,
	getOne,
	getAll,
	update
}