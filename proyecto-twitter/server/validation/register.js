const Validator = require('validator')

module.exports = function(data) {
    let errors = {}

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required here'
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }
    if (Validator.isEmpty(data.login)) {
        errors.login = 'Login is required here'
    }
    if (!Validator.isLength(data.login, { min:4, max: 30})) {
        errors.login = 'Error, Login must be between 4 and 30 characters'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required in this field'
    }
    if (!Validator.isLength(data.password, { min:6, max: 30})) {
        errors.password = 'Error, password must be between 6 and 30 characters'
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password is required in this field'
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match to confirm'
    }
    return {
        errors,
        isValid: Object.keys(errors).length ===0
    }
}