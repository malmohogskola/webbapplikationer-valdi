var express = require('express');
var router = express.Router();

/* GET smycken page. */
router.get('/', function(req, res, next) {
  res.render('smycken', { title: 'Våra Smycken' });
});

module.exports = router;