const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatesSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  },
  metThrough: {
    type: String,
    required: false
  },
  dateDescription: {
    type: String,
    required: false
  }
});

const ContactsSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  },
  relationship: {
    type: String,
    required: false
  }
});
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
module.exports = User = mongoose.model("users", UserSchema);
module.exports = contacts = mongoose.model("contacts", ContactsSchema);
module.exports = dates = mongoose.model("dates", DatesSchema);
