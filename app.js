var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var userCtrl = require('./controllers/userController');
var examCtrl = require('./controllers/examController')

var router = express.Router();

router.get('/', function (req, res) {
  res.send("Hello World!");
});

// API routes
router.route('/user')
  .get(userCtrl.findAllUsers)
  .post(userCtrl.addUser)
  .delete(userCtrl.deleteUserById)
  .put(userCtrl.updateUser);

router.route('/exam')
  .get(examCtrl.findAllExams)
  .post(examCtrl.addExam);

router.route('/exam/byUsername')
  .get(examCtrl.findExamsByUsername);
  router.route('/exam/byUser')
  .get(examCtrl.findExamsByUser);

router.route('/test')
  .put(userCtrl.findByIdAndUpdate)
  .get(userCtrl.findById);

app.use(router);

module.exports = app;



