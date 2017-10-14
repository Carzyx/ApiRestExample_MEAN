'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    country: { type: String }
    /* allergies: {type: String, enum:
     ['Peanut', 'Lactose', 'Gluten']
     }*/
});

module.exports = mongoose.model('users', userSchema);
