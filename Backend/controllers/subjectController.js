'use strict';

const Subject = require('../models/subject'),
    Student = require('../models/student'),
    ApiHelper = require('../helpers/api');

exports.findAllSubjects = (req, res) => ApiHelper.findAllModels(req, res, Subject);

exports.findAllSubjectsPopulation = (req, res) => {
    let population = { path: Student.modelName };
    ApiHelper.findAllModelsPopulate(res, res, Subject, population);
};

exports.addSubject = (req,res) => {
    ApiHelper.addModel(req, res, Subject)
}

exports.updateSubjectById = (req, res) => {
    ApiHelper.updateModelById(req, res, Subject)
}