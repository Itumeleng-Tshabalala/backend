
const userMock = require('../mock/user.mock');

const USERS = userMock;

const add = (user) => {
	return USERS.push(user);
}
const getAll = () => {
	return USERS;
}

const findByEmail = (email) => {
	return USERS.find(user => {return user.email === email});
}

const filterByEmail = (email) => {
	return USERS.filter(user => {return user.email !== email});
}

const update = (user, email) => {
	return USERS.map(mockUser => {
		if(mockUser.email === email) {
			mockUser = {
				id: user.id,
				email: user.email,
				name: user.name,
				phone: user.phone,
				photoUrl: user.photoUrl,
				isPhoneVerified: user.isPhoneVerified
			}
		}
		return mockUser;
	})
}

module.exports = {
	add,
    findByEmail,
    filterByEmail,
    update,
	getAll,
};