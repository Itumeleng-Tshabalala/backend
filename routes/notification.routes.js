// Imports
const express = require('express');

const {
	addNotification,
	getNotification,
	getNotifications,
	updateNotification
} = require('../controllers/notification.controller');

// Variables 
const notificationRoutes = express.Router();


notificationRoutes.post('/', addNotification);


notificationRoutes.get('/', getNotifications);


notificationRoutes.get('/:id', getNotification);


notificationRoutes.put('/id', updateNotification);

module.exports = notificationRoutes;