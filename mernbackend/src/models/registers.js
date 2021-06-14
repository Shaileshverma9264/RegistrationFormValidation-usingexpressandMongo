const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,

    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    countryCode: {
        type: Number,
        required: true,
        unique: true

    },
    phone: {
        type: Number,
        required: true,
        unique: true

    },
    email: {
        type: String,
        required: true
    },
    psw: {
        type: String,
        required: true
    },
    confirmpsw: {
        type: String,
        required: true
    },

})
// now we create a collection
const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;