var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let id = req.query.id;
  res.send('인자 확인 : ' + id);
});

module.exports = router;