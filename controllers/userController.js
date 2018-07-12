const passport = require('passport');
const User = require('../models/User');

/* Modify the route handler for GET requests at /users so that it queries your database using your User model and fetches a list 
  of all users; make this route private so only authenticated users can access it */
exports.getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.render('error');
    } else {
      res.render('users', {
        title: 'All Users',
        users,
        user: req.user,
      });
    }
  });
};

exports.registerForm = (req, res) => {
  res.render('register', {
    title: 'Register',
    warning: '',
    user: req.user,
  });
};

exports.register = (req, res, next) => {
  const newUser = new User({ username: req.body.username });

  User.register(newUser, req.body.password, (err, account) => {
    if (err) {
      // Using "return" so Node doesn't complain that headers already sent
      return res.render('register', {
        title: 'Register',
        warning: 'Sorry, that username is already taken.  Try again.',
        user: req.user,
      });
    }
    next(); /* success */
  });
};

exports.loginForm = (req, res) => {
  const messages = req.session.messages || [];

  // Clear session message
  req.session.messages = [];

  res.render('login', {
    title: 'Login',
    messages,
    user: req.user,
  });  
};
