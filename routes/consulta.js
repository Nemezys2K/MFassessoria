var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('consulta', { title: 'M&F Consultoria' });
});

module.exports = router;