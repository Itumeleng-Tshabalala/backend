// Imports
const express = require('express');
const { getOneUser, getAllUsers, createUser, updateOneUser, deleteOneUser } = require('../controllers/user.controller');

// Variables 
const userRoutes = express.Router();

/** 
	* @swagger
	* /users:
	*  get:
	*   description: Get all users
	*   responses:
	*    200:
	*    description: Return all userRoutes
	*/
userRoutes.get('/', getAllUsers)


/**
 * @swagger
 * /users:
 *   post:
 *     parameters:
 *      - in: body
 *        name: Create User
 *        description: Create a new user
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            phone:
 *              type: string
*            password:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
userRoutes.post('/', createUser);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *     description: Get a catchphrase by id
 *     responses:
 *       200:
 *         description: Returns the requested catachphrase
 */
userRoutes.get('/:id', getOneUser);


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *      - in: body
 *        name: catchphrase
 *        description: Update catchphrase
 *        schema:
 *          type: object
 *          properties:
 *            movieName:
 *              type: string
 *            catchphrase:
 *              type: string
 *            movieContext:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
userRoutes.put('/:id', updateOneUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *     description: Delete a catchphrase by id
 *     responses:
 *       200:
 *         description: Returns the requested catachphrase
 */
userRoutes.delete('/:id', deleteOneUser);


module.exports = userRoutes;

