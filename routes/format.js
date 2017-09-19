var express = require('express');
var router = express.Router();

/* GET format-number listing. */
router.post('/', function(req, res, next) {
  var numbers = req.body.numbers;
  console.log(numbers);
  //... (split the list and render template)
});

module.exports = router;
