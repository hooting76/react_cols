var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
    <h1>테스트</h1>
    `);
});

module.exports = router;
