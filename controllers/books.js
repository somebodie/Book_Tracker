// This is where I will write CRUD routes for the books.
var express = require('express');
var router = express.Router();
// var User = require('../models/user.js');
// var authHelpers = require('../helpers/auth.js');
var Book = require('../models/book.js');
// var authHelpers = require('../helpers/auth.js');
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
        res.json(book)
    });
});

// Book Create/save
router.post('/', function(req, res) {
  console.log(req);
    console.log("POST ROUTE ACCESSED YAAAAAY");
    // Book.findById(req.params.id).exec(function(err, book) {
    //   console.log(book);
        var newBook = new Book({
          // isbn: Number,
          title: req.body.title,
          author: req.body.author,
          genre: req.body.genre,
          read: req.body.read,
          keep: req.body.keep,
          // giveAway: req.body.giveAway,
          // away: req.body.away
        });
        newBook.save(function(err, book) {
            console.log("BOOK SAVED YAY", book);
            res.json(book)
        });
    // });
});


// Book EDIT/UPDATE page
// router.get('/:id/edit', function(req, res) {
//     Book.findById(req.params.id, req.body).exec(function(err, book) {
//         if (err) {
//             console.log(err)
//         }
//         book : {
//         title: title,
//         author: author,
//         genre: genre,
//         read: read,
//         giveAway: checked,
//         away: give
//       }
//     });
// });


router.patch('/:id', function(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .exec(function(err, book) {
            if (err) {
                console.log(err);
            }
          res.json(book)
        });
});

// delete page
router.delete('/:id', function(req, res) {
    Book.findByIdAndRemove(req.params.id).exec(function(err, book) {
      console.log('Book has been deleted!');
        if (err) {
            console.log(err);
        }
    });
});


module.exports = router;
