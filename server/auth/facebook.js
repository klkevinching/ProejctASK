var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

// (kevin)facebook auth
passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

module.exports = passport;