var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('farmacia', { title: 'M&F Abertura de Farmácia' });
});

module.exports = router;