var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

var BooksController = require('./controllers/Books.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/Book_Tracker'
mongoose.connect(mongoURI);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/books', booksController);

app.listen(process.env.PORT || 3000, function() {
  console.log('***BOOKING IT TO 3000****');
});
