'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let studentSchema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    phone: [{
        name: { type: String },
        phoneNumber: { type: String }
    }]
});

let model = mongoose.model('students', studentSchema);
model.modelName = 'students';
module.exports = model;