const { request, response } = require('express');
const { Player } = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { name ,positions} = request.body;

  Player.create({
              name,positions
    })
        .then(Player => response.json(Player))
        .catch(err => response.status(400).json(err));
}


module.exports.getPlayer =(request,response) => {
  Player.findOne({_id:request.params.id}) 
  .then(Player =>response.json(Player))
  .catch(err => response.json(err))
}



module.exports.getAllPlayer = (request, response) => {
  Player.find({})
        .then(Player => response.json(Player))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updatestatus = (request, response) => {
  Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}