var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contato', { title: 'M&F Contato' });
});

module.exports = router;