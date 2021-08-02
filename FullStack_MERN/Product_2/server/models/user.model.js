const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	title: String,
	price: Number ,
	desc: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
