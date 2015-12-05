var mongoose = require('mongoose');

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