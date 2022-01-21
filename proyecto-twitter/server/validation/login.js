const Validator = require('validator')

module.exports = function (data) {
	let errors = {}

	if (Validator.isEmpty(data.email)) {
		errors.email = 'Email field is required here'
	}

	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid, try again'
	}

	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password field is required here'
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = 'Password must between 6 and 30 characters'
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0
	}
}