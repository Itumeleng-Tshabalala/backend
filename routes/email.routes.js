const express = require('express');
const {
    welcome
} = require('../controllers/email.controller')
// Variables 
const emailRoutes = express.Router();

emailRoutes.post('/welcome', welcome);

module.exports = emailRoutes;