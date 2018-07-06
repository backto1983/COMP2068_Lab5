const mongoose = require('mongoose');
// Reference passport-local-mongoose to make this model usable for managing users
const passportLocalMongoose = require('passport-local-mongoose');
//Create the model schema; username and password are  included automatically

const userSchema = new mongoose.Schema({});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
