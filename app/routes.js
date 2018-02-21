// main controller 
var express= require('express');
var router = express.Router();
var mainController = require('./controllers/main.controller');

module.exports = router;

router.get('/', mainController.showHome);