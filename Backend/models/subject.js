'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let subjectSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    qt: { type: String },
    students: [{ type: Schema.Types.ObjectId, ref: 'students' }]
});

let model = mongoose.model('subjects', subjectSchema);
model.modelName = 'subjects';
module.exports = model;
