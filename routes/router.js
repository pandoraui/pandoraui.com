//controller
var express = require('express');
var router = express.Router();
var app = express();

module.exports = function(app) {
  /* GET home page. */
  app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
};

//module.exports = router;
