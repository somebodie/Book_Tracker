// This is where I will write CRUD routes for the books.
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');
var Book = require('../models/book.js');
var authHelpers = require('../helpers/auth.js');
var mongoose = require('mongoose');

// routes for /books
// Book index page
router.get('/', function(req, res) {
Book.find({}).exec(function(err, books) {
    if (err) {
        console.log(err)
    }
    res.json(books)
});
});


// // Add Book
// router.get('/new', function(req, res) {
//
// });

// Book show page
router.get('/:id', function(req, res) {
    Book.findById(req.params.id).exec(function(err, book) {
        if (err) {
            console.log(err)
        }

    });
});

// Book Create page
router.post('/', function(req, res) {
    console.log("POST ROUTE ACCESSED YAAAAAY");

    Book.findById(req.params.id).exec(function(err, book) {
        var newBook = new Book({

        });
        newBook.save(function(err, book) {
            console.log("FEEDBACK SAVED YAY", book);

        });
    });
});


// Book EDIT/UPDATE page
// FIXME:
router.get('/:id/edit', function(req, res) {
    Book.findById(req.params.id).exec(function(err, book) {
        if (err) {
            console.log(err)
        }

    });
});


router.put('/:id', function(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .exec(function(err, book) {
            if (err) {
                console.log(err);
            }

        });
});

// delete page
// FIXME: render not going to right place
router.delete('/:id', function(req, res) {
    Book.findByIdAndRemove(req.params.id).exec(function(err, book) {
        if (err) {
            console.log(err);
        }
    });

});


module.exports = router;
