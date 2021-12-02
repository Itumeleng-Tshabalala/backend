const User = require('../models/user.model');
// const { add, findByEmail, filterByEmail, update, getAll } = require('../classes/user.class')

const getUser = async (id) => {
	try {
		const user = await User.findById(id);
		if(user === null) {
			return {
				success: false,
				message: "User doesn't exist"
			};
		}
		return {
			success: true,
			user: user,
			message: "User fetched successfully"
		};
	}
	catch (error) {
		return { success: false, message: error.message };
	}
};

const getUsers = async () => {
	try {
		const users = await User.find({});
		return {
			success: true,
			users: users,
			message: "Users fetched successfully"
		};
	}
	catch (err) {
		return { success: false, message: error.message };
	}
};

const addUser = async (user) => {
	const findUser = await User.findOne({email: user.email});
	if(findUser) {
		return {
			success: false,
			message: "User already exist"
		};
	}
	const createdUser = await User.create(user);
	return {
		success: true,
		user: createdUser,
		message: "User created successfully"
	};
}

const updateUser = async (user, id) => {
	try {
		let updateUser = await User.findById(id);
		if (updateUser == null) {
			return { success: false, message: `Cannot find user with id: ${id}` };
		}
		try {
			updateUser.name = user.name;
			updateUser.email = user.email;
			updateUser.photoUrl =  user.photoUrl;
			const updated = await updateUser.save();
			return {
				success: true,
				user: updated,
				message: "User updated successfully"
			};
		} catch (error) {
			return { success: false ,message: error.message };
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
}

const deleteUser =async (id) => {
	try {
		const findUser = await User.findById(id);
		console.log(findUser)
		if(findUser == null) {
			return {
				success: false,
				user: findUser,
				message: "User doesn't exist"
			}
		}
		const user = await User.findByIdAndRemove({_id: id});
		return {
			success: true,
			user: user,
			message: "User deleted successfully"
		};
	}
	catch (err) {
		return { success: false, message: error.message };
	}
}

module.exports = {
	addUser,
	getUser,
	getUsers,
	updateUser,
	deleteUser
}