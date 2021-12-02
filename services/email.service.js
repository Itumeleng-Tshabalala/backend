

const sendWelcomeEmail = async (to, subject, message) => {
	console.log(
		to,
		message,
		subject,
	);
}

const sendGoodbyeEmail = async (to, subject, message) => {

}

const sendSuccessPaymentEmail = async (to, subject, message) => {

}

const sendFailedPaymentEmail = async (to, subject, message) => {

}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail,
    sendSuccessPaymentEmail,
    sendFailedPaymentEmail
}