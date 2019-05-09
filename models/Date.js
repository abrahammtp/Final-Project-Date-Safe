const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema for a new date

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

const Dates = mongoose.model("Dates", DatesSchema);

module.exports = Dates;