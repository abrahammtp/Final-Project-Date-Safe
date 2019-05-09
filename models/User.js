const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const DatesSchema = require("./Date");
// const ContactsSchema = require("./Contact");

// Create Schema for a new user, date and contact

const DatesSchema = new Schema({
  dateName: {
    type: String,
    required: false
  },
  dateNumber: {
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
  contactName: {
    type: String,
    required: false
  },
  contactNumber: {
    type: String,
    required: false
  },
  relationship: {
    type: String,
    required: false
  }
});

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

const User = mongoose.model("User", UserSchema);
const Contact = mongoose.model("Contact", ContactsSchema);
const Dates = mongoose.model("Dates", DatesSchema);
module.exports = {
  User: User,
  Contact: Contact,
  Dates: Dates
};



