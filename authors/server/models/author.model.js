const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must enter an author name"],
        minLength: [3, "Author name must be minimum 3 characters"],
        unique: [true, "Author name must be unique"]
    }
}, { timestamps: true });

AuthorSchema.plugin(uniqueValidator, { message: 'Yo, {PATH} needs to be unique!' });

module.exports = mongoose.model('Author', AuthorSchema);