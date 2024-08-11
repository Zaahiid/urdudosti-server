const { default: mongoose } = require("mongoose");


const shayarSchema = new mongoose.Schema({
    nameUR :{
        type: String,
        required: true
    },
    nameEN :{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    image :{
        type: String,
    },
    dateOfBirthGregorian :{
        type: String,
    },
    dateOfBirthHijri :{
        type: String,
    },
    placeOfBirth :{
        type: String,
    },
    dateOfDeathGregorian :{
        type: String,
    },
    dateOfDeathHijri :{
        type: String,
    },
})