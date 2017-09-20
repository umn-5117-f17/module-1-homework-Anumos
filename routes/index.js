var express = require('express');
var router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET format-number listing. */
router.post('/format-numbers', function(req, res, next) {
  var numbers = req.body.numbers;
  // console.log(numbers);
  var split = numbers.split(', ');
  // console.log(split);
  // ... (split the list and render template)
  res.render('format', { foo: split});
});

module.exports = router;
