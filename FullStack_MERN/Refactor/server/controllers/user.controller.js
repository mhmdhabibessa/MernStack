const { Person } = require('../models/user.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { title, price,desc } = request.body;
    Person.create({
              title,price,desc
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}



module.exports.getPerson = (request, response) => {
  Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}


module.exports.getAllpeople = (request, response) => {
  Person.find({})
        .then(people => response.json(people))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
  Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}
module.exports.deletePerson = (request, response) => {
  Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
