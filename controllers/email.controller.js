const { StatusCodes } = require('http-status-codes');

const {
    sendWelcomeEmail,
    sendGoodbyeEmail,
    sendSuccessPaymentEmail,
    sendFailedPaymentEmail
} = require('../services/email.service')

const welcome = async (request, response) => {
    const {
        to,
        message,
        subject
    } = request.body;
    welcomeResponse = await sendWelcomeEmail(to, message, subject);
    response.status(StatusCodes.OK).json(welcomeResponse);
}

module.exports = {
    welcome
}