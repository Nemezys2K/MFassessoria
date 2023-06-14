var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('usuario', { title: 'M&F-Usuário' });
});

module.exports = router;
