const { Contact } = require("../models/User");

// Defining methods for ContactControllers
module.exports = {
    findAll: function (req, res) {
        Contact.find(req.query)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        Contact.findById(req.params.id)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        Contact.create(req.body)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        Contact.findOneAndUpdate({ id: req.params.id }, req, body)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Contact.findById(req.params.id)
            .then(dbContact => dbContact.remove())
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    }
};