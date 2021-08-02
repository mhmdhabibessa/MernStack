const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: String,
    price:  Number,
	desc: String 
}, { timestamps: true });


module.exports.Person = mongoose.model('Person', PersonSchema);


