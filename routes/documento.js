var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('regulatorio', { title: 'M&F Regulatorio' });
});

module.exports = router;