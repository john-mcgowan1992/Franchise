var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));


var personSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true
	},
	Email: {
		home: {type: mongoose.SchemaTypes.Email, required: true}
	},
	Education: {
		type: String,
		required: true
	},
	Investment: {
		type: String,
		// required: true
	},
	Experience: {
		type: [String],
		// required: true
	}
})

var Person = mongoose.model('Person', personSchema);

module.exports = {
	Person:Person
};