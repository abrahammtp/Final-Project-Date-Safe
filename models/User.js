const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  // creator: {
  //     type: {
  //         "$ref": String,
  //         "$id": Schema.Types.ObjectId,
  //         "$db": String,
  //     },
  //     required: false,
  // },
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
  },
  dateAddress: {
    type: String,
    required: false
  },
  dateTaken: {
    type: Boolean,
    required: false,
    default: false,
  },

});


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
  dates: {

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
    },
    dateAddress: {
      type: String,
      required: false
    },
    dateTaken: {
      type: Boolean,
      required: true,
      default: false,
    },
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User