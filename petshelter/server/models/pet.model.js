const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required!"],
        minlength: [3, "The name must be at least three characters"],
        unique: [true, "The name must be unique"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Must be at least three characters"]
    },
    description: {
        type: String,
        required: [true, "Please give a brief description of the pet"],
        minlength: [3, "Description must be at least three characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    likes: {
        type: Number,
    }
    }, 
    { timestamps: true }
);



module.exports.Pet = mongoose.model('Pet', PetSchema);