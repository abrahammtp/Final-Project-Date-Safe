const { Dates } = require("../models/User");

// Defining methods for datesControllers
module.exports = {
    findAll: function (req, res) {
        Dates.find(req.query)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Dates.findById(req.params.id)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Dates.create(req.body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Dates.findOneAndUpdate({ id: req.params.id }, req, body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Dates.findById(req.params.id)
            .then(dbDates => dbDates.remove())
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    }
};