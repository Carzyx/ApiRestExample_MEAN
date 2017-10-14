'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let examSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    title: { type: String },
    mark: { type: Number },
    subject: {
        type: String, enum:
            ['Maths', 'History', 'English', 'Catalan']
    }
});

module.exports = mongoose.model('exams', examSchema);
