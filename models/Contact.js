const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for a new contact

const ContactsSchema = new Schema({
  _nameId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
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

const Contact = mongoose.model("Contact", ContactsSchema);
module.exports = Contact;

