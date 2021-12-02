
const User = require('../models/user.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (email, password) => {
	try {
		const user = await User.findOne({email}).lean()
		if(!user){
			return {success: false ,message: 'user not found'}
		}
		if(await bcrypt.compare(password, user.password)){
			// creating a JWT token
			token = jwt.sign(user ,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '2h'})
			return {
				success: true ,
				token: token,
				message: 'user logged in successfully'
			}
		}
		return {
			success: false ,
			message: 'user details invalid'
		}
	} catch (error) {
		return { success: false, message: error.message };
	}
}


module.exports = {
    login
}