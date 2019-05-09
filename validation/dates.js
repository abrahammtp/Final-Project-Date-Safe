const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateDatesInput
(data) {
    let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.dateName = !isEmpty(data.dateName) ? data.dateName : "";
    data.dateNumber = !isEmpty(data.dateNumber) ? data.dateNumber : "";
    data.metThrough = !isEmpty(data.metThrough) ? data.metThrough : "";
    data.dateDescription = !isEmpty(data.dateDescription) ? data.dateDescription : "";
// dateName check
    if (Validator.isEmpty(data.dateName)) {
        errors.dateName = "Name field is required";
    }
    if (Validator.isEmpty(data.dateNumber)) {
        errors.dateNumber = "Phone Number field is required";
    }
    if (Validator.isEmpty(data.metThrough)) {
        errors.metThrough = "How you met your date field is required";
    }
    if (Validator.isEmpty(data.dateDescription)) {
        errors.dateDescription = "Date description field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};