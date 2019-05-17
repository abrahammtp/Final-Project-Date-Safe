var db = require("../models");
var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

// Defining methods for datesControllers
module.exports = {

    find: function (req, res) {
        db.User.find({ _id: "5cd0489e470eb915e0ab839b" }).then(function (dbUsers) {
            res.json(dbUsers[0].dates);
            console.log(dbUsers[0].dates)
        });
    },
    create: function (req, res) {
        db.Date.create(req.body)
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.body.dates.userId }, req.body)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
        console.log(req.body)
    },
    remove: function (req, res) {
        db.Date.findById(req.params.id)
            .then(dbDates => dbDates.remove())
            .then(dbDates => res.json(dbDates))
            .catch(err => res.status(422).json(err));
    }
};