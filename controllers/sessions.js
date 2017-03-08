var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js')

router.post('/login', authHelpers.loginUser, function(req, res){
  console.log('sessions', req.session.currentUser)
  res.json({status: 200, data: req.session.currentUser})
});

router.delete('/', function(req, res){
  req.session.destroy(function() {
    res.json({status: 204, message: 'destroyed'})
  })
})

module.exports = router;

// https://github.com/ga-students/wdi-remote-matey/blob/abb1fb859e778f542595f4715f6a1385fee98a74/unit_03/w10d02/homework/bucket_list_starter/controllers/sessions.js
