var express = require('express')
var router = express.Router();
var models = require('../models');
var Person = models.Person;
module.exports = router;

router.get('/', function (req, res, next) {
	//Displays all the posts

});



router.post('/submit', function (req, res, next) {
		//allows you to post a new page
		console.log(req.body)
	    var newPerson = new Person({
	    	comment: req.body.comment,
	    	name: req.body.name

        });
        console.log(newPost);
        newPost.save()
        .then(function (newPost) {
			res.send(newPost);
        }).then(null, function(err) {
        	console.log(err);
        })

});


