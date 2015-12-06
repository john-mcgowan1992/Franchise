var express = require('express')
var router = express.Router();
var models = require('../../db/models/');
var Person = models.Person;
module.exports = router;

router.get('/', function (req, res, next) {
        Person.find().then(function (data) {
                res.render(data, {users: data})
        })

});


router.post('/submit', function (req, res, next) {
		//allows you to post a new page

});

