var express = require('express');
var router = express.Router();

/* GET Om oss page. */
router.get('/', function(req, res, next) {
  res.render('omoss', { title: 'Om oss' });
});

module.exports = router;