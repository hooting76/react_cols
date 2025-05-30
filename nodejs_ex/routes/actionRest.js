var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id/:name', function(req, res, next) {

  let id = req.params.id;
  let name = req.params.name;

  res.send(`인자 확인(id) : ${id} , 인자 확인(name) : ${name}`);
});

module.exports = router;