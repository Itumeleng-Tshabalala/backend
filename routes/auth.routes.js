const express = require('express');
const { signIn } = require('../controllers/auth.controller');

const authRoutes = express.Router();


authRoutes.post('/login', signIn);


module.exports = authRoutes;