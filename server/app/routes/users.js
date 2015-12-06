var express = require('express')
var router = express.Router();
var models = require('../../db/models/');
var Person = models.Person;
module.exports = router;

router.get('/', function (req, res, next) {
	res.render('newuser.html')

});



router.post('/submit', function (req, res, next) {
		//allows you to post a new page
	    var newPerson = new Person({
	    	Name: req.body.name,
	    	Email: req.body.email,
	    	Education: req.body.education,
	    	Investment: req.body.optradio,
	    	Experience: req.body.experience
        });
        console.log(newPerson.Experience);
        newPerson.save()
        .then(function (newPerson) {
        	res.send(newPerson)
        }).then(null, function(err) {
        	console.log(err);
        })
        next();
});


