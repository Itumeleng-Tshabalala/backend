const { StatusCodes } = require('http-status-codes');
const { login } = require('../services/auth.service');

const signIn = async (request, response) => {
    const {email, password} = request.body;
    if(!email) {

    }
    if(!password) {
        
    }
    const loginResponse = await login(email, password);
    response.status(StatusCodes.OK).json(loginResponse);
}


module.exports = {
    signIn
}