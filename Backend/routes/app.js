'use strict';

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

let router = express.Router();
app.use(router);

//Implements CORS
router.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");

    res.header('Access-Control-Allow-Headers', "Content-Type, Authorization, Content-Length, X-Requested-With,X-Custom-Header,Origin");
    res.header('Access-Control-Allow-Credentials', "true");
    if ('OPTIONS' === req.method) {
        res.status(200).send();
    }
    else {
        next();
    }
});

// Import Controllers
let studentCtrl = require('../controllers/studentController');
let subjectCtrl = require('../controllers/subjectController');

// API routes


router.route('/subject')
    .get(subjectCtrl.findAllSubjectsPopulation)
    .post(subjectCtrl.addSubject)
    .put(subjectCtrl.updateSubjectById);

router.route('/student')
    .get(studentCtrl.findAllStudents)
    .post(studentCtrl.addStudent);




module.exports = app;
