'use strict'

const Exam = require('../db/schemas/exam');

exports.addExam = function (req, res) {
    console.log('POST')
    console.log(req.body)

    let exam = new Exam(req.body);

    exam.save()
        .then(resp => res.status(200).send({ message: `user successfully created.`, exam: resp }))
        .catch(err => res.status(500).send(`There was an error creating user. Please try again later: ${err.message}`));
};

exports.findAllExams = function (req, res) {
    console.log('GET')

    Exam.find().populate('user', 'username firsName lastName')
        .then(resp => res.status(200).jsonp(resp))
        .catch(err => res.status(500).send(`There was an error creating user. Please try again later: ${err.message}`));
};

exports.findExamsByUsername = function (req, res) {
    console.log('GET')

    Exam.find().populate({ path: 'user', match: { username: req.query.username }, select: 'username firsName lastName' })
        .then(resp => res.status(200).jsonp(resp))
        .catch(err => res.status(500).send(`There was an error creating user. Please try again later: ${err.message}`));
};

exports.findExamsByUser = function (req, res) {
    console.log('GET')
    console.log(req.query.username);

    Exam.find().populate({ path: 'user', match: { username: req.query.username }, select: 'username firsName lastName' })
        .then(resp => res.status(200).jsonp(resp))
        .catch(err => res.status(500).send(`There was an error creating user. Please try again later: ${err.message}`));
};