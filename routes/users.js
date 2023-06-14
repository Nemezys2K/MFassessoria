var express = require('express');
var router = express.Router();

var userController = require('../controllers/usersConstroller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userController);
});

module.exports = router;
