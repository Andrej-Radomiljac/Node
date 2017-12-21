var express = require('express');
var router  = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var accountant = require('../accountant');
var questionHandler = require('../questionHandler.js');
var rawData = fs.readFileSync('./Backend.js');
var parsedData = JSON.parse(rawData);
var points;

router.get('/',function(req,res,next){

	res.render('questions',{content:parsedData});
	
});

router.post('/',urlencodedParser,function(req,res,next){
	
	points = accountant.fCountPointsHardCode(parsedData,req.body);
	res.render('results',{jPoints : points.jediPoints, sPoints : points.sithPoints});
	
});

module.exports = router;