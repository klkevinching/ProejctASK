var express = require('express');
var router = express.Router();

// (kevin) facebook login setup
var passportFacebook = require('../auth/facebook');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth', { title: 'Auth' });
});

/* (kevin) LOGIN ROUTER */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Please Sign In with:' });
});

/* (kevin) LOGOUT ROUTER */
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

/* FACEBOOK ROUTER */
router.get('/facebook',
  passportFacebook.authenticate('facebook'));

router.get('/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;
