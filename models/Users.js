const mongoose = require('mongoose');

// Schema object template connected to database
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

// exports template as constructor 'User'
module.exports = mongoose.model('User', UserSchema);