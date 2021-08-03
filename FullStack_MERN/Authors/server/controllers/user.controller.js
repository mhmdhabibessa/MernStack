const { request, response } = require('express');
const { Author } = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
      Author.create({
              name
    })
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}


module.exports.getAuthor =(request,response) => {
  Author.findOne({_id:request.params.id}) 
  .then(Author =>response.json(Author))
  .catch(err => response.json(err))
}



module.exports.getAllAuthore = (request, response) => {
  Author.find({})
        .then(Author => response.json(Author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateAuthor => response.json(updateAuthor))
        .catch(err => response.json(err))
}
module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
