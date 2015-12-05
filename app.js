var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
module.exports = app;

//Allow retrieval of static filters
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
// app.engine('html', swig.renderFile);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use('/test', require('./routes/test'));

app.get('/', function (req, res) {
   res.render('./frontend/index');
});


app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});
