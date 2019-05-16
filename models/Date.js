const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for a new date

const DatesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    creator: {
        type: {
            "$ref": String,
            "$id": Schema.Types.ObjectId,
            "$db": String,
        },
        required: false,
    },
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
    }
});

const Dates = mongoose.model("Date", DatesSchema);
module.exports = Dates;