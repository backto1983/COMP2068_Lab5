const express = require('express');
const userController = require('../controllers/userController');
//Link to  existing User model
const user = require('../models/User');   

const router = express.Router();

//router.get('/users', userController.getUsers);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
