var express        = require('express');
var session        = require('express-session');
var logger         = require('morgan');
var mongoose       = require('mongoose');


var BooksController = require('./controllers/Books.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

app.use(express.static('public'))

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/Book_Tracker'
mongoose.connect(mongoURI);

app.use(logger('dev'));

app.use(session({
  secret: "derpderpderpcats",
  resave: true,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/books', BooksController);

app.listen(process.env.PORT || 3000, function() {
  console.log('***BOOKING IT TO 3000****');
});
