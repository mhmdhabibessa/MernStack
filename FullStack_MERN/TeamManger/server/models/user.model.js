const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type:String ,
        require :[true, "name connot be empty"],
		minlength: [2, "The min length should be more than 3"]
    },
    positions: {
        type:String ,
        require :[true, " positions connot be empty"],
    }
    
    
	
}, { timestamps: true });


module.exports.Player = mongoose.model('Play', PlayerSchema);


