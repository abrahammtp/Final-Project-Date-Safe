const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schemas for user, who they are going on a date with and emergency contacts
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
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
  dates: [DatesSchema],
  contacts: [ContactsSchema]
});

const DatesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  metThrough: {
    type: String,
    required: true
  },
  dateDescription: {
    type: String,
    required: true
  }
});

const ContactsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);