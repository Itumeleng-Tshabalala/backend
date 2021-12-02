const { StatusCodes } = require('http-status-codes')
const {
	add,
	remove,
	getOne,
	getAll,
	update
} = require('../services/notification.service');


const addNotification = async (request, response) => {
	const notification = request.body; 
	if (!notification) {
			response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide id"})
	}
	const notificationResponse = await add(notification);
	response.status(StatusCodes.OK).json(notificationResponse);
}

const getNotification = async (request, response) => {
	const id = request.params.id; 
	if (!id) {
			response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide id"})
	}
	const notificationResponse = await getOne(id);
	response.status(StatusCodes.OK).json(notificationResponse);
}


const getNotifications = async (request, response) => {
	const notificationResponse = await getAll();
	response.status(StatusCodes.OK).json(notificationResponse);
}

const updateNotification = async (request, response) => {
	const id = request.params.id; 
	const notification = request.body;
	if (!id) {
			response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide id"})
	}
	if(notification) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide notification details"})
	}
	const notificationResponse = await update(id, notification);
	response.status(StatusCodes.OK).json(notificationResponse);
}

module.exports = {
	addNotification,
	getNotification,
	getNotifications,
	updateNotification
}