var express = require('express');
var router = express.Router();

/* GET kontakt page. */
router.get('/', function(req, res, next) {
  res.render('kontakt', { title: 'Kontakta oss' });
});

module.exports = router;