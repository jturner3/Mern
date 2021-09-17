const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	set_up: String,
	punchline: String
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;