'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let phoneSchema = new mongoose.Schema({
    name: { type: String },
    phoneNumber: { type: String }
});


let model = mongoose.model('phones', phoneSchema);
model.modelName = 'phone';
module.exports = model;
