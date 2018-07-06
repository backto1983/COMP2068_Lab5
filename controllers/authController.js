const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.isLoggedIn = (req, res, next) => {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login');
};

exports.login = passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login',
});
