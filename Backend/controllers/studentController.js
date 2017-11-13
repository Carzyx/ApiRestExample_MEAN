'use strict';

const Student = require('../models/student'),
    ApiHelper = require('../helpers/api');

exports.findAllStudents = (req, res) => ApiHelper.findAllModels(req, res, Student);

exports.findAllStudentsPopulation = (req, res) => {
    let population = { path: Student.modelName };
    ApiHelper.findAllModelsPopulate(res, res, Student, population);
};

exports.addStudent = (req, res) => {
    ApiHelper.addModel(req, res, Student);
}
exports.removeStudent = (req, res) => {
    ApiHelper.deleteModelById(req, res, Student);
}