const db = require("../models");

// Defining methods for contactsControllers
module.exports = {
    findAll: function (req, res) {
        db.Contacts.find(req.query)
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Contacts.findById(req.params.id)
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Contacts.create(req.body)
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Contacts.findOneAndUpdate({ id: req.params.id }, req, body)
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Contacts.findById(req.params.id)
            .then(dbContacts => dbContacts.remove())
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err));
    }
};