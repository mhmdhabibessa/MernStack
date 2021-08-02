const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {

  const [title,price,desc] =req.body;

  User.create({title,price,desc})
    .then(user => res.json( user ))
    .catch(err => res.json(err));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
