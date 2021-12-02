
const { StatusCodes } = require('http-status-codes')
const asyncWrapper = require('../middleware/async');
const { getUser, getUsers, addUser, updateUser, deleteUser } = require('../services/user.service');
const { findByEmail, filterByEmail, update } = require('../classes/user.class')

const getOneUser = async (request, response) => {
	const id = request.params.id;
	if(!id) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide id"})
	}
	const user = await getUser(id);
	response.status(StatusCodes.OK).json(user);
};

const getAllUsers = async (request, response) => {
	const users = await getUsers();
	response.status(StatusCodes.OK).json(users);
}

const createUser = async (request, response) => {
	const userCreate = request.body;
	if(!userCreate) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide user data."});
	}
	if(!userCreate.name) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide name."});
	}
	if(!userCreate.email) {
		response.status(StatusCodes.BAD_REQUEST).json({status: false, message: "provide email."});
	}
	const addResponse = await addUser(userCreate);
	response.status(StatusCodes.CREATED).json(addResponse);
};

const updateOneUser = async (request, response) => {
	const user = request.body;
	const id = request.params.id;
	if(!id) {
		response.status(StatusCodes.BAD_REQUEST).json({success: false, message: `provide id`});
	}
	// if(!user.name) {
	// 	response.status(StatusCodes.BAD_REQUEST).json({success: false, message: `provide name`});
	// }
	// if(!user.email) {
	// 	response.status(StatusCodes.BAD_REQUEST).json({success: false, message: `provide email`});
	// }
	const updateResponse = await updateUser(user, id);
	response.status(StatusCodes.CREATED).json(updateResponse);
}

const deleteOneUser = async (request, response) => {
	const id = request.params.id;
	if(id) {
		const deleteResponse = await deleteUser(id);
		response.status(StatusCodes.OK).json(deleteResponse);
	}
}

module.exports = {
	getOneUser,
	getAllUsers,
	createUser,
	updateOneUser,
	deleteOneUser,
}