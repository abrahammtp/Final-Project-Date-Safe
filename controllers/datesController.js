var db = require("../models");

// Defining methods for datesControllers
module.exports = {
    findAll: function (req, res) {
        db.Dates.find(req.query)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Dates.findById(req.params.id)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Dates.create(req.body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Dates.findOneAndUpdate({ id: req.params.id }, req, body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Dates.findById(req.params.id)
            .then(dbDates => dbDates.remove())
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    }
};