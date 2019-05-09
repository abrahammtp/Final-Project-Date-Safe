const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema for a new contact

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

const Contacts = mongoose.model("Contacts", ContactsSchema);

module.exports = Contacts;