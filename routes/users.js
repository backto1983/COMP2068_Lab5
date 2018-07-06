const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

//Link to  existing User model
const user = require('../models/User');   

const router = express.Router();

/* Modify the route handler for GET requests at /users so that it queries your database using your User model and fetches a list of
all users; make this route private so only authenticated users can access it */
router.get('/users', authController.isLoggedIn, userController.getUsers);

module.exports = router;
