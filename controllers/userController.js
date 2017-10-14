'use strict';

const User = require('../db/schemas/user');

//GET - Return all users in the DB
exports.findAllUsers = function (req, res) {
	console.log("Executed GET/user")

	User.find()
		.then((users) => res.status(200).jsonp(users))
		.catch(err => res.status(500).send(`There was an error searching users. Please try again later: ${err.message}`))
};

exports.findById = function (req, res) {
	console.log('GET')
	console.log(req.query);

	User.findById(req.query.id)
		.then((resp) => res.status(200).jsonp(resp))
		.catch(err => res.status(500).send(`error: ${err.message}`))
};

//POST - Insert a new user in the DB
exports.addUser = function (req, res) {
	console.log('POST')
	console.log(req.body);

	let user = new User(req.body);

	user.save()
		.then(resp => res.status(200).send({ message: `user successfully created.`, user: resp }))
		.catch(err => res.send(500, `There was an error creating user. Please try again later: ${err.message}`));
};

exports.deleteUserById = function (req, res) {
	console.log('DELETE')
	console.log(req.body);

	User.findByIdAndRemove(req.body.id)
		.then(resp => res.status(200).send({ message: `user successfully removed.`, user: resp }))
		.catch(err => res.status(500).send(500, `There was an error removing user. Please try again later: ${err.message}`));
};

exports.updateUser = function (req, res) {
	console.log('UPDATE')
	console.log(req.query.id)
	console.log(req.body);

	User.findById(req.query.id).exec()
		.then((user, error) => {
			if (error) return res.status(200).send(`User not found with id: ${req.query.id}`)
			if (user) {
				console.log(`User found, user: ${user}`);
				user.password = req.body.password || user.password,
					user.email = req.body.email || user.email,
					user.firstName = req.body.firstName || user.firstName,
					user.lastName = req.body.lastName || user.lastName,
					user.age = req.body.age || user.age,
					user.country = req.body.age || user.age;

				user.save()
					.then(resp => res.status(200).send({ message: `user successfully updated.`, user: resp }))
			}
		})
		.catch(err => res.status(500).send(`There was an error updating user. Please try again later: ${err.message}`))

};

exports.findByIdAndUpdate = function (req, res) {
	console.log('UPDATE')
	console.log(req.query)
	console.log(req.body);

	User.findByIdAndUpdate(req.query.id, req.body)
		.then(resp => res.status(200).send({ message: `user successfully updated.`, user: resp }))
		.catch(err => res.send(500, `There was an error updating user. Please try again later: ${err.message}`));
};