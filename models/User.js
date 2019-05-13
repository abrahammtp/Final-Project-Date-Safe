const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schemas for a new user
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User