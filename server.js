var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var BooksController = require('./controllers/books.js');

var app = express();

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/books'
mongoose.connect(mongoURI);

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));

app.get('/', function(req, res) {
    res.redirect('/home')
});

app.use('/books', BooksController);

app.listen(process.env.PORT || 3000, function() {
  console.log('***BOOKING IT TO 3000****');
});
