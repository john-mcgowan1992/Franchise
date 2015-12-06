var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

function checkBox(){
    return [].slice.apply(document.querySelectorAll("input[type=checkbox]"))
           .filter(function(c){ return c.checked; })
           .map(function(c){ return c.value; });
}

var personSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true
	},
	Email: {
		type: String
	},
	Education: {
		type: String,
		required: true
	},
	Investment: {
		type: String,
		required: true
	},
	Experience: {
		type: String
	}
})

var Person = mongoose.model('Person', personSchema);

module.exports = {
	Person:Person
};

