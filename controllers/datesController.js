var db = require("../models");

// Defining methods for datesControllers
module.exports = {

    find: function (req, res) {
        db.Dates.find({ _nameId: req.params.id }).then(function (dbDates) {
            res.json(dbDates);
        });
    },
    create: function (req, res) {
        db.Date.create(req.body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.dates.findOneAndUpdate({ _id: req.params.id }, req, body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.dates.findById(req.params.id)
            .then(dbDates => dbDates.remove())
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    }
};