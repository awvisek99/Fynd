// models/User.js
const mongoose = require('mongoose');

// Update the User model to use the "login" collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}, {
  collection: 'login' // Specify the collection name as 'login'
});

const User = mongoose.model('User', userSchema);

// module.exports = User;


module.exports = mongoose.model('User', userSchema);