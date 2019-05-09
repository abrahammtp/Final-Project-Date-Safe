const Validator = require("validator");
const isEmpty = require("isEmpty");
module.exports = function validateContactsInput(data) {
    let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.contactName = !isEmpty(data.contactName) ? data.contactName : "";
    data.contactNumber = !isEmpty(data.contactNumber) ? data.contactNumber : "";
    data.relationship = !isEmpty(data.relationship) ? data.relationship : "";
// contactName check
    if (Validator.isEmpty(data.contactName)) {
        errors.contactName = "Name field is required";
    }
// contactNumber check
    if (Validator.isEmpty(data.contactNumber)) {
        errors.contactNumber = "Phone Number field is required";
    }
// relationship check
    if (Validator.isEmpty(data.relationship)) {
        errors.relationship = "Contact relationship is required";
    } 
    return {
        errors,
        isValid: isEmpty(errors)
    };
};