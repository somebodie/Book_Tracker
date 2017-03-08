var User = require('../models/user.js');
var bcrypt = require('bcrypt');

function createSecure(req, res, next) {
  var password = req.body.password

  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next()
}

function loginUser(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email })
  .then(function(foundUser){
    if (foundUser == null) {
      res.json({status: 401, data: "unauthorized"})

    } else if (bcrypt.compareSync(password, foundUser.password_digest)) {
      console.log('foundUser', foundUser)
      req.session.currentUser = foundUser;
    }
    next()
  })
  .catch(function(err){
    res.json({status: 500, data: err})
  });
}

function authorize(req, res, next) {
  var currentUser = req.session.currentUser

  // THIS ASSUMES THAT EVERY :id refers to the user _id
  // needs to check if the current user doesn't exist, if it does then make
  // sure that the id of the logged in user and the id of the route match
  if (!currentUser || currentUser._id !== req.params.id ) {
    // customize
    // res.render('errors/401.hbs')
    // res.redirect('/users')
    res.send({status: 401})
  } else {
    next()
  }
};

module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorize: authorize
}

// https://github.com/ga-students/wdi-remote-matey/blob/abb1fb859e778f542595f4715f6a1385fee98a74/unit_03/w10d02/homework/bucket_list_starter/helpers/auth.js
