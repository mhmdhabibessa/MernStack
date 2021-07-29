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
