var express = require('express');
var router = express.Router();

/* GET greetings */
router.get('/sayhello', function(req, res, next) {
  res.send('hello from the microservice');
});

module.exports = router;
