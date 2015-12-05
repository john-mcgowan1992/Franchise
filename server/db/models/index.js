var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Michael');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));


var personSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true
	},
	Education: {
		type: String,
		required: true
	},
	Investment: {
		type: Number,
		required: true,
		unique: true
	},
	Experience: {
		type: [String],
		required: true
	}
})

var Person = mongoose.model('Person', personSchema);

module.exports = {
	Person:Person
};