var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Bem-vindo Usuário');
});

module.exports = router;
